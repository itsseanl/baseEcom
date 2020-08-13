<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package getOnline
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<script src="https://kit.fontawesome.com/c44a6dd91b.js" crossorigin="anonymous"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<!-- <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'getonline'); ?></a> -->

		<header id="masthead" class="site-header">
			<div class="site-branding">
				<div class="custom-wrapper">
					<div class="left">
						<!-- <?php
								the_custom_logo();
								?> -->
						<a href="/">
							<h1 class="text-2xl">base<span class="text-teal-200 text-bold">Ecom</span></h1>
						</a>

					</div>

					<div class="right">
						<div class="activate-mobile-nav" onClick="mobileNavToggle()">
							<span id="bar1" class="activatenavbar"></span>
							<span id="bar2" class="activatenavbar"></span>
							<span id="bar3" class="activatenavbar"></span>
						</div>
						<a href="/contact/"><i class="fas fa-envelope desktophide"></i></a>
					</div>
					<nav id="site-navigation" class="main-navigation">
						<!-- <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e('Primary Menu', 'getonline'); ?></button> -->
						<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							)
						);
						?>
					</nav><!-- #site-navigation -->
				</div>
			</div><!-- .site-branding -->
		</header><!-- #masthead -->