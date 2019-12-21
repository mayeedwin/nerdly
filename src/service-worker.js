importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);
// const cached = document.querySelector(".cached");

if (workbox) {
  // console.log(`Yay! Workbox is loaded 🎉`);
  // Use an explicit cache-first strategy and a dedicated cache for images.
  workbox.routing.registerRoute(
    new RegExp("./"),
    new workbox.strategies.CacheFirst({
      cacheName: "images"
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
