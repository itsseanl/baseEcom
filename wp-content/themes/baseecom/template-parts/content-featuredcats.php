<div class="custom-wrapper">
    <?php

    $productLimit = get_field('display_limit');

    // Check rows exists.
    if (have_rows('featured_product_categories')) :

        // Loop through rows.
        while (have_rows('featured_product_categories')) : the_row();

            // Load sub field value.
            $sub_value = get_sub_field('featured_category');
            $catID = get_term_by('name', $sub_value, 'product_cat');
            // $catID = get_cat_ID($sub_value);
            $catSlug = get_category($catID);
    ?>
            <div class="featured-cat">
                <h2 class="featured-heading-bg pl-10 -mb-4 custom-text-shadow bg-gray-400 m-10 rounded" style="color:#808080; ">featured<span style="display:inline-block; margin:5px 2px 0px 5px;height:25px;background:#808080;width:3px;"></span><span class="header-accent-span text-4xl text-bold uppercase text-shadow:none!important;"><?php echo $sub_value; ?></span></h2>

                <?php echo do_shortcode('[products best_selling category="' . $catSlug->slug . '" limit="' . $productLimit . '"]'); ?>
            </div>
            <!-- <div class="spitter bg-teal-200 " style="height:1px;"></div> -->
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