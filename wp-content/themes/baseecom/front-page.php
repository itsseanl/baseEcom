<?php

/**
 * Template Name: Home
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package getOnline
 */

get_header();
?>

<main id="primary" class="site-main ">
    <!-- Hero Slider -->
    <?php get_template_part('template-parts/content', 'heroslider'); ?>
    <div class="py-2" style="background:#f0f0f059;">
        <div class="custom-wrapper flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between px-10 align-center m-5">
            <?php get_template_part('template-parts/content', 'productcats'); ?>

            <?php get_search_form(); ?>
        </div>
    </div>
    <!-- Featured Product Categories -->
    <?php get_template_part('template-parts/content', 'featuredcats'); ?>
</main><!-- #main -->

<div class="sidebar-wrapper bg-gray-200">
    <div class="custom-wrapper p-2 ">
        <?php get_sidebar(); ?>
    </div>
</div>

<?php
get_footer();
