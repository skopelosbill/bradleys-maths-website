// sw.js - Bradley's Maths Hub Service Worker
const CACHE_NAME = 'bradleys-maths-hub-v1';

// Install: Skip waiting to activate immediately
self.addEventListener('install', event => {
    self.skipWaiting();
});

// Fetch: Always check the cache first. 
// If it's not there, fetch it from the network and save it.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request).then(networkResponse => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});