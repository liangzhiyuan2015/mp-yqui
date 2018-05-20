/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "75132ce94869cd8a255c648071a39c54"
  },
  {
    "url": "assets/css/0.styles.1a6ecac9.css",
    "revision": "78ca5db181b7a47ca11c496c3e12c3ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.59414b55.js",
    "revision": "40ef7c10df8763b38ac99f3c5bfe315b"
  },
  {
    "url": "assets/js/3.1f52805b.js",
    "revision": "f9c86ba4850717b6d328be59078c9e50"
  },
  {
    "url": "assets/js/4.b5331338.js",
    "revision": "9e4186bb9fa6c1bb300822d462abd1ea"
  },
  {
    "url": "assets/js/5.1842cee1.js",
    "revision": "e54278fe2fff67a55e405742e8037aa8"
  },
  {
    "url": "assets/js/6.be911f73.js",
    "revision": "c93ab4a82aadc644e8aa7f15ad4e9380"
  },
  {
    "url": "assets/js/7.b0bd0a4e.js",
    "revision": "1cd9c88d7dec8ffe50015e39deef55c9"
  },
  {
    "url": "assets/js/app.a4eeaf5f.js",
    "revision": "583054bf07dca381cc46fbc18b72d9cb"
  },
  {
    "url": "assets/js/vendors~docsearch.5f08c506.js",
    "revision": "7c514014152c0429d60517d9f8b09ea3"
  },
  {
    "url": "foo.html",
    "revision": "e82f513627667134e97d9a5b090198b5"
  },
  {
    "url": "hero.png",
    "revision": "7b4ae84b870cbaa4cbc01f78a578037d"
  },
  {
    "url": "index.html",
    "revision": "7d03340460423b6940a73d1e6625ecf5"
  },
  {
    "url": "nested/index.html",
    "revision": "c0830896e6cc8ef55814bfe8d78673fd"
  },
  {
    "url": "zh/foo.html",
    "revision": "4348b0ae8db63b1ccb9c936fdfc6a660"
  },
  {
    "url": "zh/index.html",
    "revision": "8237802b720f942086d8709bfb0b581a"
  },
  {
    "url": "zh/zh/nested/index.html",
    "revision": "2b7e01790b85b64fd472afab86686831"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
