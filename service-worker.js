const CACHE='paramedic-pocket-v0.6.1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png','./assets/adult-arrest-algorithm.png','./assets/peds-arrest-algorithm.png','./assets/neonatal-algorithm.png','./data/sources.json','./data/learning.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;}).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):undefined)));
});
