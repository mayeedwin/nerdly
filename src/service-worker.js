importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);
const cached = document.querySelector(".cached");

if (workbox) {
  // console.log(`Yay! Workbox is loaded 🎉`);
  cached.innerText = `App ready to work offline!`;

  window.addEventListener("load", event => {
    cached.innerText = `App ready to work offline!`;
  });
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
