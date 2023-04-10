const manifest = self.__WB_MANIFEST;

// https://web.dev/offline-fallback-page/
const CACHE_NAME = 'offline-html';
const STATIC_CACHE_NAME = 'static-assets';
const STATIC_FILES_TO_CACHE = [
  '/static/img/',
  '/static/css/',
  '/static/js/',
  '/static/fonts/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    // Cache static files on service worker installation
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_FILES_TO_CACHE);
      })
  );

  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    // Try to fetch the requested resource from the cache
    caches.match(event.request)
      .then(response => {
        // If a cached response is found, return it
        if (response) {
          return response;
        }

        // If not, fetch the resource from the network
        return fetch(event.request)
          .then(networkResponse => {
            // Clone the network response before caching and returning it
            const clonedResponse = networkResponse.clone();

            // Cache images, CSS, JS, and fonts separately
            if (event.request.url.includes('./static/img') ||
              event.request.url.includes('./static/css') ||
              event.request.url.includes('./static/js') ||
              event.request.url.includes('./static/fonts')) {
              caches.open(STATIC_CACHE_NAME)
                .then(cache => {
                  // Cache the response with the request as the key
                  cache.put(event.request, clonedResponse);
                });
            }

            // Return the network response
            return networkResponse;
          })
          .catch(() => {
            // If the network fetch fails, respond with a 404 error
            return new Response('Not Found', {
              status: 404,
              statusText: 'Not Found',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});
