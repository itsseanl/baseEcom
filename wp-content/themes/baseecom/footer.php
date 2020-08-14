<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package GetOnline
 */

?>

<footer id="colophon" class="site-footer bg-gray-800 p-10 flex justify-end">

	<div class="site-info custom-wrapper text-white w-full flex justify-end items-center">
		<a class="text-white" href="<?php echo esc_url(__('https://wordpress.org/', 'getonline')); ?>">
			Copyright 2020 © baseEcom
		</a>
		<span class="sep text-white mx-2 text-4xl"> | </span>
		<i class="fab fa-cc-discover mx-2 text-4xl"></i>
		<i class="fab fa-cc-apple-pay mx-2 text-4xl"></i>
		<i class="fab fa-cc-amex mx-2 text-4xl"></i>
		<i class="fab fa-cc-paypal mx-2 text-4xl"></i>
	</div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>