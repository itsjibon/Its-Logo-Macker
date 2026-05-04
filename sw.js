self.addEventListener("install",e=>{
e.waitUntil(
caches.open("its-app").then(cache=>{
return cache.addAll(["index.html"]);
})
);
});
