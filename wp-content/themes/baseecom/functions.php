<?php

/**
 * baseEcom functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package baseEcom
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

if (!function_exists('baseecom_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function baseecom_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on baseEcom, use a find and replace
		 * to change 'baseecom' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('baseecom', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__('Primary', 'baseecom'),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'baseecom_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support('customize-selective-refresh-widgets');

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action('after_setup_theme', 'baseecom_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function baseecom_content_width()
{
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters('baseecom_content_width', 640);
}
add_action('after_setup_theme', 'baseecom_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function baseecom_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'baseecom'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'baseecom'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action('widgets_init', 'baseecom_widgets_init');



/**
 * Customize Register
 */
function baseecom_customize_register($wp_customize)
{
	//h1 color
	$wp_customize->add_setting('be_h1_color', array(
		'default' => '#707070',
		'transport' => 'refresh'
	));

	$wp_customize->add_section('be_color_customizer', array(
		'title' => __('Website Colors', 'baseEcom'),
		'priority' => 30,
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_h1_color_control', array(
		'label' => __('h1 Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_h1_color'
	)));

	//slider overlay background
	$wp_customize->add_setting('be_sliderbg_color', array(
		'default' => '#ffffff',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_sliderbg_color_control', array(
		'label' => __('Slider Overlay Background Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_sliderbg_color'
	)));

	//header-accent-span
	$wp_customize->add_setting('be_span_color', array(
		'default' => '#1e73be',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_span_color_control', array(
		'label' => __('Title Accent Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_span_color'
	)));

	//button color
	$wp_customize->add_setting('be_button_color', array(
		'default' => '#1e73be',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_button_color_control', array(
		'label' => __('Button Accent Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_button_color'
	)));

	//button text color
	$wp_customize->add_setting('be_button_text_color', array(
		'default' => '#73e6e6',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_button_text_color_control', array(
		'label' => __('Button Text Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_button_text_color'
	)));

	//accent color
	$wp_customize->add_setting('be_accent_color', array(
		'default' => '#1e73be',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_accent_color_control', array(
		'label' => __('Accent Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_accent_color'
	)));

	//sidebar color
	$wp_customize->add_setting('be_sidebar_color', array(
		'default' => '#e2e2e2',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_sidebar_color_control', array(
		'label' => __('SideBar/homepage Title Background Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_sidebar_color'
	)));

	//footer color
	$wp_customize->add_setting('be_footer_color', array(
		'default' => '#2d3748',
		'transport' => 'refresh'
	));

	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'be_footer_color_control', array(
		'label' => __('Footer Color', 'baseEcom'),
		'section' => 'be_color_customizer',
		'settings' => 'be_footer_color'
	)));
}
add_action('customize_register', 'baseecom_customize_register');

//Output customize CSS
function baseecom_customize_css()
{
?>
	<style type="text/css">
		h1 {
			color: <?php echo get_theme_mod('be_h1_color'); ?>;
		}

		.slide-overlay {
			background-color: <?php echo get_theme_mod('be_sliderbg_color'); ?>E6;

		}

		.header-accent-span {
			color: <?php echo get_theme_mod('be_span_color'); ?>;
		}

		.button,
		button {
			background-color: <?php echo get_theme_mod('be_button_color'); ?>;
			color: <?php echo get_theme_mod('be_button_text_color'); ?>;

		}

		.onsale {
			background-color: <?php echo get_theme_mod('be_accent_color'); ?>;

		}

		.accent,
		.current_page_item {
			color: <?php echo get_theme_mod('be_accent_color'); ?>;
		}

		.sidebar-wrapper,
		.featured-heading-bg {
			background-color: <?php echo get_theme_mod('be_sidebar_color'); ?>;

		}

		#colophon {
			background-color: <?php echo get_theme_mod('be_footer_color'); ?>;
		}
	</style>
<?php
}
add_action('wp_head', 'baseecom_customize_css');

/**
 * Enqueue scripts and styles.
 */
function baseecom_scripts()
{
	wp_enqueue_style('baseecom-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('baseecom-style', 'rtl', 'replace');



	wp_enqueue_script('baseecom-custom-vendor-js', get_template_directory_uri() . '/assets/js/vendor.min.js', array(), _S_VERSION);
	wp_enqueue_script('baseecom-custom-js', get_template_directory_uri() . '/assets/js/custom.min.js', array(), _S_VERSION);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'baseecom_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

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

remove_action('action_woocommerce_before_shop_loop_item_title', 'woocommerce_before_shop_loop_item_title');
function baseEcom_before_shop_loop_item_title()
{
	woocommerce_get_product_thumbnail($size = 'woocommerce_thumbnail', $deprecated1 = 0, $deprecated2 = 0);
	woocommerce_show_product_loop_sale_flash();
}
add_action('action_woocommerce_before_shop_loop_item_title', 'baseEcom');


/**
 * Customize product data tabs
 */
add_filter('woocommerce_product_tabs', 'woo_custom_description_tab', 98);
function woo_custom_description_tab($tabs)
{

	$tabs['description']['callback'] = 'woo_custom_description_tab_content';	// Custom description callback

	return $tabs;
}

function woo_custom_description_tab_content()
{
	echo '<h2>' . the_title() . '</h2>';
	echo '<p>Here\'s a custom description</p>';
	woocommerce_template_single_title();
	woocommerce_template_single_price();
	woocommerce_template_single_add_to_cart();
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
