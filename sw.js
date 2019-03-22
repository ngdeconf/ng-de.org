---
layout: null
---

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

const version = '{{site.time | date: '%Y%m%d%H%M%S'}}';
const staticCacheName = `static::${version}`;

console.log("installing service worker");

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

const filesToCache = [
  '/',
  {%- for page in site.html_pages %}
    {%- unless page.url == '/' %}
  '{{ page.url }}',
    {%- endunless %}
  {%- endfor %}
  {%- for post in site.posts %}
  '{{ post.url }}',
  {%- endfor %}
  {%- for file in site.static_files %}
    {%- if
      file.extname == '.js' or
      file.path contains '/assets/sponsors'
    %}
  '{{ file.path }}',
    {%- endif %}
  {%- endfor %}
  'css/default.css'
];