const CACHE_NAME = 'oxflashcards-v24';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './data.js',
  './manifest.json'
];
const CHART_JS_URL = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(STATIC_ASSETS);
      try {
        await cache.add(CHART_JS_URL);
      } catch (_) {
        // Ignore optional CDN pre-cache failure when installing offline
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Never intercept non-GET requests (e.g. Firestore writes / Auth POSTs)
  if (event.request.method !== 'GET') return;

  let reqUrl;
  try {
    reqUrl = new URL(event.request.url);
  } catch (_) {
    return;
  }

  // Bypass cross-origin Google/Firebase APIs & SDKs except pinned Chart.js & Google Fonts (Stale-While-Revalidate)
  const isFontAsset = reqUrl.origin === 'https://fonts.googleapis.com' || reqUrl.origin === 'https://fonts.gstatic.com';
  if (reqUrl.origin !== self.location.origin) {
    if (reqUrl.href.startsWith(CHART_JS_URL) || isFontAsset) {
      event.respondWith(
        caches.match(event.request).then((cached) => {
          const networkFetch = fetch(event.request).then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
            return res;
          }).catch(() => cached || new Response('', { status: 503, statusText: 'Offline' }));
          if (cached) {
            event.waitUntil(networkFetch);
            return cached;
          }
          return networkFetch;
        })
      );
    }
    return;
  }

  // Never intercept Firebase reserved auth handler paths or Admin Dashboard files
  if (reqUrl.pathname.includes('/__/') || reqUrl.pathname.endsWith('/admin.html') || reqUrl.pathname.endsWith('/admin.js')) return;

  // Heavy data bundle (data.js 2.3MB): Stale-While-Revalidate for instant cold start + silent refresh
  if (reqUrl.pathname.endsWith('/data.js') || reqUrl.pathname === '/data.js') {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request).then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return res;
        }).catch(() => cached || new Response('', { status: 503, statusText: 'Offline' }));
        if (cached) {
          event.waitUntil(networkFetch);
          return cached;
        }
        return networkFetch;
      })
    );
    return;
  }

  // App shell & logic (index.html, styles.css, script.js): Network-First so updates appear immediately,
  // with transparent Cache fallback when offline.
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('', { status: 503, statusText: 'Offline' });
        });
      })
  );
});

