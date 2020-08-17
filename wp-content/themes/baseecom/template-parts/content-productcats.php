<div class="product-cats flex justify-center align-center md:justify-start lg:justify-start px-2">
    <?php
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
            $cat_name = $cat->name;
            $category_id = $cat->term_id;
            if ($cat_name != 'Uncategorized') {
    ?>
                <a href="<?php echo get_category_link($category_id); ?>" class="px-5 font-bold"><?php echo $cat->name; ?></a>
    <?php
            }
        }
    }

    ?>
</div>