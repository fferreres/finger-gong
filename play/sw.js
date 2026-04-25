var V = 'fg-v2';
var FILES = ['./', 'e7c4f1a9.js', 'f9a3e7c1.dat', 'd2b8f4a6.dat', 'a1c5e9d3.dat', 'b7f2c8e4.dat', 'manifest.json'];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(V).then(function(c) { return c.addAll(FILES) }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(ks) {
    return Promise.all(ks.filter(function(k) { return k !== V }).map(function(k) { return caches.delete(k) }));
  }));
});

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request) }));
});
