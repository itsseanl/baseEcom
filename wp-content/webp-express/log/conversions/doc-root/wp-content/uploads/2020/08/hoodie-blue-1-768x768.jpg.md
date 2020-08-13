WebP Express 0.17.4. Conversion triggered using bulk conversion, 2020-08-12 18:48:33

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.3.20
- Server software: Apache/2.4.25 (Debian)

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg
- destination: [doc-root]wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- default-quality: 70
- encoding: "auto"
- max-quality: 80
- metadata: "none"
- near-lossless: 60
- quality: "auto"
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg
- destination: [doc-root]wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg.webp
- default-quality: 70
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- max-quality: 80
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: "auto"
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- alpha-quality: 85
- auto-filter: false
- preset: "none"
- size-in-percentage: null (not set)
- skip: false
- rel-path-to-precompiled-binaries: *****
- try-cwebp: true
- try-discovering-cwebp: true
------------

Encoding is set to auto - converting to both lossless and lossy and selecting the smallest file

Converting to lossy
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: *Exec failed* (the cwebp binary was not found at path: cwebp)
Nope a plain cwebp call does not work
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 0 binaries
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 0 binaries
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: [doc-root]wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
- Executing: [doc-root]wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version 2>&1. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
- Executing: [doc-root]wp-content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version 2>&1. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)

**Error: ** **No cwebp binaries could be executed (permission denied for user: "www-data").** 
No cwebp binaries could be executed (permission denied for user: "www-data").
cwebp failed in 89 ms

*Trying: vips* 

**Error: ** **Required Vips extension is not available.** 
Required Vips extension is not available.
vips failed in 1 ms

*Trying: imagemagick* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg
- destination: [doc-root]wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg.webp
- default-quality: 70
- encoding: "auto"
- log-call-arguments: true
- max-quality: 80
- metadata: "none"
- quality: "auto"
- use-nice: true

The following options have not been explicitly set, so using the following defaults:
- alpha-quality: 85
- auto-filter: false
- low-memory: false
- method: 6
- skip: false

The following options were supplied but are ignored because they are not supported by this converter:
- near-lossless
------------

Encoding is set to auto - converting to both lossless and lossy and selecting the smallest file

Converting to lossy
Version: ImageMagick 6.9.7-4 Q16 x86_64 20170114 http://www.imagemagick.org
Quality of source is 82. This is higher than max-quality, so using max-quality instead (80)
using nice
Executing command: nice convert -quality '80' -strip -define webp:alpha-quality=85 -define webp:method=6 '[doc-root]wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg' 'webp:[doc-root]wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg.webp.lossy.webp' 2>&1

*Output:* 
convert-im6.q16: delegate failed `'cwebp' -quiet %Q '%i' -o '%o'' @ error/delegate.c/InvokeDelegate/1919.

return code: 1

**Error: ** **The exec call failed** 
The exec call failed
imagemagick failed in 103 ms

*Trying: graphicsmagick* 

**Error: ** **gmagick is not installed** 
gmagick is not installed
graphicsmagick failed in 5 ms

*Trying: wpc* 

**Error: ** **Missing URL. You must install Webp Convert Cloud Service on a server, or the WebP Express plugin for Wordpress - and supply the url.** 
Missing URL. You must install Webp Convert Cloud Service on a server, or the WebP Express plugin for Wordpress - and supply the url.
wpc failed in 1 ms

*Trying: ewww* 

**Error: ** **Missing API key.** 
Missing API key.
ewww failed in 0 ms

*Trying: imagick* 

**Error: ** **iMagick was compiled without WebP support.** 
iMagick was compiled without WebP support.
imagick failed in 1 ms

*Trying: gmagick* 

**Error: ** **Required Gmagick extension is not available.** 
Required Gmagick extension is not available.
gmagick failed in 0 ms

*Trying: gd* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg
- destination: [doc-root]wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/hoodie-blue-1-768x768.jpg.webp
- default-quality: 70
- log-call-arguments: true
- max-quality: 80
- quality: "auto"

The following options have not been explicitly set, so using the following defaults:
- skip: false

The following options were supplied but are ignored because they are not supported by this converter:
- encoding
- metadata
- near-lossless
- skip-pngs
------------

GD Version: bundled (2.1.0 compatible)
image is true color
Quality of source is 82. This is higher than max-quality, so using max-quality instead (80)
gd succeeded :)

Converted image in 249 ms, reducing file size with 58% (went from 33 kb to 14 kb)
