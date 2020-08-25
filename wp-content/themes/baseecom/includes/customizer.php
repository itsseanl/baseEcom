<?php

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
        .current_page_item,
        .price {
            color: <?php echo get_theme_mod('be_accent_color'); ?>;
        }

        .active,
            {
            border-bottom: 2px solid <?php echo get_theme_mod('be_accent_color'); ?>;
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
