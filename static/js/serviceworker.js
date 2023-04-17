const manifest = self.__WB_MANIFEST;

// https://web.dev/offline-fallback-page/
const CACHE_NAME = 'offline-html';
const STATIC_CACHE_NAME = 'static-assets';
const STATIC_FILES_TO_CACHE = [
  '/static/img/bg.jpg',
  '/static/img/favicon.ico',
  '/static/img/icon.png',
  '/static/img/icon-192x192.png',
  '/static/img/icons/icons8-download-from-cloud-24.png',
  '/static/img/icons/icons8-google-play-store-24.png',
 
  '/static/img/catacombs/bg.gif', 
  '/static/img/catacombs/ss.jpg', 
  '/static/img/catacombs/ss-1.jpg', 
  '/static/img/catacombs/ss-2.jpg', 
  '/static/img/catacombs/ss-3.jpg', 

  '/static/img/catacombs/weapons/weapon-1.png', 
  '/static/img/catacombs/weapons/weapon-2.png', 
  '/static/img/catacombs/weapons/weapon-3.png', 
  '/static/img/catacombs/weapons/weapon-4.png', 
  '/static/img/catacombs/weapons/weapon-5.png', 
  '/static/img/catacombs/weapons/weapon-6.png', 
  '/static/img/catacombs/weapons/weapon-7.png', 
  '/static/img/catacombs/weapons/weapon-8.png', 

  '/static/img/catacombs/characters/character-1.png', 
  '/static/img/catacombs/characters/character-2.png', 
  '/static/img/catacombs/characters/character-3.png', 
  '/static/img/catacombs/characters/character-4.png', 
  '/static/img/catacombs/characters/character-5.png', 
  '/static/img/catacombs/characters/character-6.png', 

  '/static/img/catacombs/villians/villian-1.png', 
  '/static/img/catacombs/villians/villian-2.png', 
  '/static/img/catacombs/villians/villian-3.png', 
  '/static/img/catacombs/villians/villian-4.png', 
  '/static/img/catacombs/villians/villian-5.png', 
  '/static/img/catacombs/villians/villian-6.png', 

  '/static/css/style.css',
  '/static/js/script.js',
  '/static/js/serviceworker.js',
  '/static/js/jquery-3.6.1.min.js',
  '/static/fonts/Ancient-Modern-Tales/AncientModernTales-a7Po.ttf',
  '/static/fonts/Eight-Bit-Dragon/EightBitDragon-anqx.ttf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    // Cachear archivos estáticos en la instalación del service worker
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_FILES_TO_CACHE);
      })
  );

  // Forzar al service worker en espera a convertirse en el service worker activo.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  // Informar al service worker activo para tomar el control de la página inmediatamente.
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    // Intentar obtener el recurso solicitado desde la caché
    caches.match(event.request)
      .then(response => {
        // Si se encuentra una respuesta en caché, se devuelve
        if (response) {
          return response;
        }

        // Si no, se obtiene el recurso desde la red
        return fetch(event.request)
          .then(networkResponse => {
            // Clonar la respuesta de la red antes de almacenarla en caché y devolverla
            const clonedResponse = networkResponse.clone();

            // Almacenar imágenes, CSS, JS y fuentes en cachés separadas
            if (event.request.url.includes('/static/img') ||
              event.request.url.includes('/static/css') ||
              event.request.url.includes('/static/js') ||
              event.request.url.includes('/static/fonts')) {
              caches.open(STATIC_CACHE_NAME)
                .then(cache => {
                  // Almacenar la respuesta en caché con la solicitud como clave
                  cache.put(event.request, clonedResponse);
                });
            }

            // Devolver la respuesta de la red
            return networkResponse;
          })
          .catch(() => {
            // Si la obtención desde la red falla, responder con un error 404
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