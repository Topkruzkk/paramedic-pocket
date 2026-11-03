const CACHE='paramedic-pocket-field-v1.0.0';
const CORE=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./data/field-data.json','./data/sources.json','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png','./assets/adult-arrest-algorithm.png','./assets/peds-arrest-algorithm.png','./assets/neonatal-algorithm.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(x=>x.put(e.request,cp));return r}).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):undefined)))});
