---
layout: null
---

const version = '{{site.time | date: '%Y%m%d%H%M%S'}}';
const staticCacheName = `static::${version}`;

console.log("installing service worker");

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

function updateStaticCache() {
  return caches.open(staticCacheName).then(cache => {
    return cache.addAll(filesToCache);
  });
}

function clearOldCache() {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(keys
      .filter(key => {
        return key !== staticCacheName;
      })
      .map(key => {
        console.log(`Service Worker: removing cache ${key}`);
        return caches.delete(key);
      })
    );
  });
}

self.addEventListener('install', event => {
  event.waitUntil(updateStaticCache().then(() => {
    console.log(`Service Worker: cache updated to version: ${staticCacheName}`);
  }));
});

self.addEventListener('activate', event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener('fetch', event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  // For non-HTML requests, look in the cache first else fall back to the network.
  event.respondWith(
    caches.match(request).then(match => {
      if (!match) { return fetch(request); }
      return fetch(request).then(response => {
        // Update cache.
        caches.open(staticCacheName).then(cache => cache.put(request, response.clone()));
        return response;
      }) || response;
    })
  );
});