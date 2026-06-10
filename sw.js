// sw.js – Bradley's Maths PWA Service Worker
const CACHE_NAME = 'bradleys-maths-v2';

// Files that must always be available offline
const APP_SHELL = [
    '/',                // index.html
    '/index.html',
    '/hub.html',
    '/unlock.html',
    '/style.css',
    '/hub-engine.js',
    '/engine.js',
    '/manifest.json',
    '/images/app-icon-512.png',
    '/offline.html'
];

// Install: cache the app shell
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(APP_SHELL);
        })
    );
    self.skipWaiting();

    // ⭐ INSTALL TRACKING — fires once per install
    fetch("https://countapi.mileshilliard.com/api/v1/hit/bradleysmaths_sw_installs")
        .catch(() => {}); // fail silently if offline
});

// Activate: clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            )
        )
    );
    self.clients.claim();
});

// Fetch handler
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    // 1. App shell → cache first
    if (APP_SHELL.includes(url.pathname)) {
        event.respondWith(
            caches.match(req).then(cached => {
                return cached || fetch(req).then(res => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(req, res.clone());
                        return res;
                    });
                });
            })
        );
        return;
    }

    // 2. Question files → network first, fallback to cache
    if (url.pathname.includes('/problems/')) {
        event.respondWith(
            fetch(req)
                .then(res => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(req, res.clone());
                        return res;
                    });
                })
                .catch(() => caches.match(req))
        );
        return;
    }

    // 3. Everything else → network first, fallback to offline page
    event.respondWith(
        fetch(req).catch(() => {
            return caches.match(req).then(cached => {
                return cached || caches.match('/offline.html');
            });
        })
    );
});
