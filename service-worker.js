const CACHE='paramedic-pocket-v0.7.1';
const SHELL=[
  './','./index.html','./styles.css','./app.js','./manifest.webmanifest',
  './assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png',
  './assets/adult-arrest-algorithm.png','./assets/peds-arrest-algorithm.png','./assets/neonatal-algorithm.png',
  './assets/visuals/airway-oxygenation.svg','./assets/visuals/befast.svg','./assets/visuals/conduction-system.svg',
  './assets/visuals/ecg-territories.svg','./assets/visuals/neonatal-transition.svg','./assets/visuals/pat-triangle.svg',
  './assets/visuals/pph-4ts.svg','./assets/visuals/sepsis-pathway.svg','./assets/visuals/shock-matrix.svg',
  './assets/visuals/toxidrome.svg','./assets/visuals/ventilator-dope.svg','./assets/visuals/xabcde.svg',
  './data/sources.json','./data/knowledge/index.json','./data/knowledge/research.json'
];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{
    if(res && res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return res;
  }).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):undefined)));
});
