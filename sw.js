const C='gravity-painter-v1';const A=['/uncle-bruce-gravity-painter/','/uncle-bruce-gravity-painter/index.html','/uncle-bruce-gravity-painter/manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)).catch(()=>caches.match('/uncle-bruce-gravity-painter/index.html'))));
