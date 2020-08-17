<div class="slider-wrapper w-screen m-auto overflow-hidden max-w-full">
    <div id="slider" class="slider transition w-auto flex " style="max-height:500px;">

        <?php
        if (have_rows('hero_slider')) : while (have_rows('hero_slider')) : the_row();
                if (have_rows('slides')) : while (have_rows('slides')) : the_row();
                        if (have_rows('slide')) : while (have_rows('slide')) : the_row();
                                $image = get_sub_field('slide_img');
        ?>
                                <div class="slide w-screen h-full overflow-hidden relative  flex items-center content-center" style="flex:1 0 auto; height:500px;">
                                    <?php
                                    if (!empty($image)) : ?>
                                        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="object-cover object-center absolute h-full w-full z-100" style="max-height:500px;" />
                                    <?php endif; ?>
                                    <div class="slide-overlay banner-cta relative px-8 py-10 my-8 mx-auto z-10 border-solid border-1 rounded shadow-md border-gray-600md:text-center lg:w-full custom-wrapper flex flex-col justify-center content-center text-center">
                                        <h2 class="uppercase text-4xl my-1 custom-text-shadow accent"><?php echo get_sub_field('slide_title'); ?></h2>
                                        <p class="p-5 text-lg font-bold"><?php echo get_sub_field('slide_text'); ?></p>
                                        <?php
                                        $link = get_sub_field('slide_cta');
                                        if ($link) :
                                            $link_url = $link['url'];
                                            $link_title = $link['title'];
                                            $link_target = $link['target'] ? $link['target'] : '_self';
                                        ?>
                                            <a class="button text-white m-auto my-5 p-2 sm:max-w-xs w-64 uppercase rounded shadow font-bold z-40" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                                        <?php endif; ?>
                                    </div>

                                </div>
        <?php
                            endwhile;
                        endif;
                    endwhile;
                endif;
            endwhile;
        endif;
        ?>
    </div>
</div>
<div class="slider-controls w-full flex items-center justify-between absolute -mt-64 custom-wrapper">
    <div id="slider-left" class="p-10 z-40  border-r-1 border-gray-200 border-solid text-4xl text-white custom-text-shadow cursor-pointer">
        <i class="fas fa-chevron-left "></i> </div>
    <div id="slider-right" class="p-10 z-40 border-l-1 border-gray-200 border-solid text-4xl text-white custom-text-shadow cursor-pointer"> <i class="fas fa-chevron-right"></i>
    </div>
</div>