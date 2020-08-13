# wp-boilerplate
My WordPress workflow. Developed in large part with [Jon Powers](https://github.com/jpowersdev) and utilizes a number of tools introduced to me by [AJ Jardiah](https://github.com/AjDigitalDesign)

## Step 1: Install Docker

While it may sound like overkill for WordPress, docker is the basis of my local development workflow. Specifically, I use [Lando](https://lando.dev)

Why? It removes the headaches. It handles all of the configuration for you. Simply build out your [recipe](https://docs.lando.dev/config/wordpress.html#configuration), navigate to your project’s root directory, run “Lando start,” and viola. Wordpress is set up and ready to work with. I have my boilerplate set up in a repository to make it as easy as clone and go. No more downloading WordPress, modifying the wp-config file, creating a new database in your local sql server, and running through the setup process. Lando also provides tools for quickly importing and exporting your database, and containerizes your entire environment so that you can easily take your work with you between computers nearly seamlessly.

## Step 2: Underscores

From there, I head over to [underscores.me] to grab my starter theme. Download a fresh copy, add it to the theme directory, and you’ve got a skeleton theme ready to build out. This was introduced to me by my co-worker and friend AJ Jardiah, check his github out in my followers list as well!

## Step 3: WPGulp

My final tool before I hit the ground running is [WPGulp](https://github.com/ahmadawais/WPGulp). This provides a number of features I couldn’t imagine working without. Auto-reloading, sass compilation, css and JavaScript minifying, and even image optimization. This tool removes much of the hassle of optimizing your code, and auto-reload is a godsend while writing CSS. No more F5 mashing required!

## Step 4: Plugins & Other Tools

To further optimize images, I make use of [Lazysizes](https://github.com/aFarkas/lazysizes). With a single JS file, and some data-src attributes, you can lazy load all your images without having to rely on bulky plugins. However, there are a few plugins that are indispensable. The obvious ones are Advanced Custom Fields and Custom Post Type UI for custom fields and custom post types. I also utilize wp-all-in-one for quick backups, and for uploading sites once my local development is complete. Github is of course another essential tool for managing codeouts and maintaining sites once they launch. 



