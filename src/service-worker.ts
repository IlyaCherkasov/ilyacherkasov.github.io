/// <reference lib="webworker" />
/* eslint-disable */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }: { request: Request; url: URL }) => {
    if (url.pathname === '/') return true;

    return false;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.webp'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
});
