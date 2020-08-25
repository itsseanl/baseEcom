<?php


/**
 * ACF Options Page
 */
add_action('acf/init', 'my_acf_op_init');
function my_acf_op_init()
{

    // Check function exists.
    if (function_exists('acf_add_options_page')) {

        // Register options page.
        $option_page = acf_add_options_page(array(
            'page_title'    => __('Theme General Settings'),
            'menu_title'    => __('Theme Settings'),
            'menu_slug'     => 'theme-general-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false
        ));
    }
}


/**
 * Populate Featured Categories Homepage
 */

function acf_load_featured_product_choices($field)
{
    $choices = [];

    $taxonomy     = 'product_cat';
    $orderby      = 'name';
    $show_count   = 0;      // 1 for yes, 0 for no
    $pad_counts   = 0;      // 1 for yes, 0 for no
    $hierarchical = 1;      // 1 for yes, 0 for no  
    $title        = '';
    $empty        = 0;

    $args = array(
        'taxonomy'     => $taxonomy,
        'orderby'      => $orderby,
        'show_count'   => $show_count,
        'pad_counts'   => $pad_counts,
        'hierarchical' => $hierarchical,
        'title_li'     => $title,
        'hide_empty'   => $empty
    );
    $all_categories = get_categories($args);
    foreach ($all_categories as $cat) {
        if ($cat->category_parent == 0) {
            $category_id = $cat->term_id;
            array_push($choices, $cat->name);

            $args2 = array(
                'taxonomy'     => $taxonomy,
                'child_of'     => 0,
                'parent'       => $category_id,
                'orderby'      => $orderby,
                'show_count'   => $show_count,
                'pad_counts'   => $pad_counts,
                'hierarchical' => $hierarchical,
                'title_li'     => $title,
                'hide_empty'   => $empty
            );
            $sub_cats = get_categories($args2);
            if ($sub_cats) {
                foreach ($sub_cats as $sub_category) {
                    array_push($choices, $sub_category->name);
                }
            }
        }
    }
    // loop through array and add to field 'choices'
    if (is_array($choices)) {

        foreach ($choices as $choice) {

            $field['choices'][$choice] = $choice;
        }
    }
    // return the field
    return $field;
}

add_filter('acf/load_field/name=featured_category', 'acf_load_featured_product_choices');
