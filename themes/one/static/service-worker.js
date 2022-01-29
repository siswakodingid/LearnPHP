const CACHE_NAME = 'SW-001';
const toCache = [
    '/',
    'web.webmanifest',
    'register.js',
    'https://camo.githubusercontent.com/53ef5222bda6cc6486890376ecd125dc5c418721af874139b85995941cdbae12/68747470733a2f2f63646e332e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f706f70756c61722d73657276696365732d6272616e64732f3531322f7068702d3235362e706e67',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(toCache)
        })
        .then(self.skipWaiting())
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match(event.request)
            })
        })
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((keyList) => {
            return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                console.log('[ServiceWorker] Hapus cache lama', key)
                return caches.delete(key)
            }
            }))
        })
        .then(() => self.clients.claim())
    )
})

