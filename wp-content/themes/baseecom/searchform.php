<form id="searchform" method="get" action="<?php echo esc_url(home_url('/')); ?>">
    <input type="text" class="search-field shadow rounded w-full p-1" name="s" placeholder="Search" value="<?php echo get_search_query(); ?>">
    <!-- <input type="submit" value="Search" class="bg-teal-200 px-5 text-white uppercase rounded shadow"> -->
</form>