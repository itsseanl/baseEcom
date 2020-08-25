<?php
function mytheme_add_woocommerce_support()
{
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'mytheme_add_woocommerce_support');

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
    require get_template_directory() . '/inc/woocommerce.php';
}


/**
 * Customize product data tabs
 */
add_filter('woocommerce_product_tabs', 'woo_custom_description_tab', 98);
function woo_custom_description_tab($tabs)
{

    $tabs['description']['callback'] = 'woo_custom_description_tab_content';    // Custom description callback

    return $tabs;
}

function woo_custom_description_tab_content()
{
?>
    <div class="tab-info p-2">
        <?php
        woocommerce_template_single_title();
        woocommerce_template_single_excerpt();
        woocommerce_template_single_price();
        woocommerce_template_single_add_to_cart();
        woocommerce_template_single_meta();
        ?>
    </div>
<?php
}


/**
 * Remove product data tabs
 */
add_filter('woocommerce_product_tabs', 'woo_remove_product_tabs', 98);

function woo_remove_product_tabs($tabs)
{

    unset($tabs['reviews']);             // Remove the reviews tab
    return $tabs;
}

add_filter('woocommerce_product_description_tab_title', 'baseecom_rename_description_product_tab_label');
function baseecom_rename_description_product_tab_label()
{
    return the_title();
}

// Minimum CSS to remove +/- default buttons on input field type number
add_action('wp_head', 'custom_quantity_fields_css');
function custom_quantity_fields_css()
{
?>
    <style>
        .quantity input::-webkit-outer-spin-button,
        .quantity input::-webkit-inner-spin-button {
            display: none;
            margin: 0;
        }

        .quantity input.qty {
            appearance: textfield;
            -webkit-appearance: none;
            -moz-appearance: textfield;
        }
    </style>
<?php
}


add_action('wp_footer', 'custom_quantity_fields_script');
function custom_quantity_fields_script()
{
?>
    <script type='text/javascript'>
        jQuery(function($) {
            if (!String.prototype.getDecimals) {
                String.prototype.getDecimals = function() {
                    var num = this,
                        match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                    if (!match) {
                        return 0;
                    }
                    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
                }
            }
            // Quantity "plus" and "minus" buttons
            $(document.body).on('click', '.plus, .minus', function() {
                var $qty = $(this).closest('.quantity').find('.qty'),
                    currentVal = parseFloat($qty.val()),
                    max = parseFloat($qty.attr('max')),
                    min = parseFloat($qty.attr('min')),
                    step = $qty.attr('step');

                // Format values
                if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
                if (max === '' || max === 'NaN') max = '';
                if (min === '' || min === 'NaN') min = 0;
                if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

                // Change the value
                if ($(this).is('.plus')) {
                    if (max && (currentVal >= max)) {
                        $qty.val(max);
                    } else {
                        $qty.val((currentVal + parseFloat(step)).toFixed(step.getDecimals()));
                    }
                } else {
                    if (min && (currentVal <= min)) {
                        $qty.val(min);
                    } else if (currentVal > 0) {
                        $qty.val((currentVal - parseFloat(step)).toFixed(step.getDecimals()));
                    }
                }

                // Trigger change event
                $qty.trigger('change');
            });
        });
    </script>
<?php
}

// replace single product summary with data tabs
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
//woocommerce_after_single_product_summary
add_action('woocommerce_single_product_summary', 'woocommerce_output_product_data_tabs', 10);

remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);

//add reviews after single product summary
add_action('woocommerce_after_single_product_summary', create_function('$args', 'call_user_func(\'comments_template\');'), 14);

/*
 * Woocommerce Remove excerpt from single product
 */
add_action('woocommerce_after_single_product_summary', 'the_content', 10);

/**
 * Change number of related products output
 */
function woo_related_products_limit()
{
    global $product;

    $args['posts_per_page'] = 4;
    return $args;
}
add_filter('woocommerce_output_related_products_args', 'jk_related_products_args', 20);
function jk_related_products_args($args)
{
    $args['posts_per_page'] = 4; // 4 related products
    $args['columns'] = 4; // arranged in 2 columns
    return $args;
}
