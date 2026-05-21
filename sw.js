// sw.js - Bradley's Maths Service Worker
const CACHE_NAME = 'bradleys-maths-v1';

// Install event
self.addEventListener('install', event => {
    console.log('Service Worker installed.');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Service Worker activated.');
});

// Fetch event (Bypasses caching so you don't get stuck with old code!)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            console.log('Offline mode triggered.');
            // You can add a custom offline HTML page here later if you want!
        })
    );
});