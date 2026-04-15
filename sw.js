self.addEventListener("install", () => {
  console.log("installed");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
