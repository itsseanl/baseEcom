<?php

/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package GetOnline
 */

if (!is_active_sidebar('sidebar-1')) {
	return;
}
?>

<aside id="secondary" class="widget-area flex flex-col sm:flex-col md:flex-row lg:flex-row justify-end sm:justify-center content-cent   text-center sm:text-center md:text-center lg:text-left">
	<?php dynamic_sidebar('sidebar-1'); ?>
</aside><!-- #secondary -->