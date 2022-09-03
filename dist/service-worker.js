self.addEventListener('install', event =>
  event.waitUntil(
    caches.open('v1').then(
      cache => cache.addAll([
        '/',
        '/app.js',
        '/index.html',
        '/async-loaded.js',
        '/app.webmanifest'
      ])
    )
  )
);
self.addEventListener('fetch', event =>
  event.respondWith(caches.match(event.request))
);
