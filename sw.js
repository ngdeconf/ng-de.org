---
layout: null
---

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const version = '{{site.time | date: '%Y%m%d%H%M%S'}}';
const staticCacheName = `static::${version}`;

console.log("installing service worker");

// uncomment JS part - it prevents simple analytics and google tag manager to load properly
// please just activate if fixed
// workbox.routing.registerRoute(
//   new RegExp('.*\.js'),
//   new workbox.strategies.NetworkFirst()
// );

workbox.routing.registerRoute(
  /.*\.css/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

const filesToCache = [

];