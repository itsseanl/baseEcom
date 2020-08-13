<div class="custom-wrapper">
    <?php

    $productLimit = get_field('display_limit');

    // Check rows exists.
    if (have_rows('featured_product_categories')) :

        // Loop through rows.
        while (have_rows('featured_product_categories')) : the_row();

            // Load sub field value.
            $sub_value = get_sub_field('featured_category');
            $catID = get_cat_ID($sub_value);
    ?>
            <div class="featured-cat">
                <h2><?php echo $sub_value; ?></h2>

                <?php echo do_shortcode('[products category="' . $catID . '" limit="' . $productLimit . '"]'); ?>
            </div>
            <div class="spitter h-1 bg-teal-200 "></div>
    <?php
        // Do something...

        // End loop.
        endwhile;

    // No value.
    else :
    // Do something...
    endif;

    ?>
</div>