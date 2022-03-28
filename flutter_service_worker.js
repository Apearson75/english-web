'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "7f571fca0da21d34fab6c50ca6e6fe8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "61b310323b90c70ebbad70fc6719862f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6cd7f0e46126cb56d7f0d37b6bc1c6e4",
".git/logs/refs/heads/main": "65abdabc1564f82c3c8bced15e84e999",
".git/logs/refs/remotes/origin/main": "2e6fa58039bce1a4903ccf4286b4c4d4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/8265cae816943d15af0c6d0516783e8e927a63": "f756f1f78900223b95040a02ece866b3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/17/9300bf5d4f465cbf50788f8d8da0059b35132c": "c902e393452224dcc708815ffcbc1403",
".git/objects/18/6ec03c3554c9c802c5daeaca8c4acc4ce08de0": "c3cc731302775b0a9c5929cc25dd597c",
".git/objects/1e/e443a387d9839cc2ed7292c0a628d358a36e27": "77922f1969c986684828f8ccb090907d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/a7817c8e6e12922e6ed29735f6f65d2d89f9a7": "07a13ee771cbd5c88cbb123a51d96050",
".git/objects/2d/0a8a6986cf9bce32dd8ef4cb29c3b21984f360": "d617360f1783c03e58a4fe070d7c938a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3c/2eebed12f0fdb27e104c728c4459e469fda59d": "28d69ab7c7155edba2d353f7307b2b2e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/487bf2241ea4ae17124ef7ec73d537f24647a4": "0da372788e8131e4240060421f1e7450",
".git/objects/4a/9ffe2c38316026cd7b6fa8d8d07ab86d0036fc": "f3319e64c56696decdc2c4b92116d320",
".git/objects/4d/c4daefd2fac97b4e0761cac708f28e63bed826": "865e328c5a8a2f7155516f6047b24bbf",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/a1bb76962ac2ffb600a75d387df72a78d1210e": "c8e289d0437efd9c84a9eac64e262dd4",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/aa720eced1c09c9e949192fa5b040e61aaf9ac": "bbc63f8c1cf44e258dd5e1d21750c28a",
".git/objects/55/63320dfd73406f055a9e014b018658598004a3": "aa4493bd1624fb565a9299d21a3492e4",
".git/objects/57/54679db2117358684028e07599ef7647c01be2": "864a5fad6a7180d52507947a93ec12be",
".git/objects/5c/358f896976276c78644648d1f380c6e289cbff": "09c118a413f37d069067b2eed9873747",
".git/objects/67/56fdc510e5a9be1fdc0bc1cdd3edcda27b74de": "aaf68295f9aebf0fc39068fea1a24b24",
".git/objects/75/68efdb07eadf5cf7c7322bda4af0bd21451620": "03d48f769c6ab591122c67b558bf982e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/83116710a568b39125bb2c47213a87157cda51": "ce143352606777d3bc383078b61f8a3c",
".git/objects/86/a67d61264420290da82135e136877cb3956764": "b081e3f1fcdb35ae9b9fc15854818661",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d585329283786711357f9d594a8cef7866c387": "dcdf94aee9dcb411bd16a45a1dd2bc3f",
".git/objects/99/1a14598af176150b5540b4986f38d751a84485": "0ee6201b48b2405e47655bc114c1c46d",
".git/objects/99/6f10affd27e78da607607b00fc2d6e48d57d26": "c7d3727a97f2d1d9ed0e83ff7c1d8806",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/77d900c94816c8b8df5725188d328ffe2135d9": "0fe60d39f5eaa01aa28dd9ab303ed830",
".git/objects/aa/eff16f6f5cb7415855e3ebd815a577dcb2d696": "9203d6bb167cfd2cf677f8b17ae3979b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/7b79d5e211a08d58583f14b40c17cd592c4afb": "a72df57e13d4cf7f7e099200c8942140",
".git/objects/b0/1fbf370fb7b05205d8dcc9a015942e5b9a2aa6": "fe982674f0404432aa1aa9cac499e38c",
".git/objects/b1/234ed4132ae7837e023c708a4f8e83347e8ff5": "fcdf263259f4f185737cfc92631001f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1be5b10bd4930cec306ae9c9642b076c9c6f18": "408309a69d376dad4d71672bbbcbf480",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/0a1dc2df93a4eaa1e3ad7374cff15f29c1e8e2": "ec8c88d681ef1988d98e72e1c1bb997c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/2fdac4a6411b83ebaa653a46b2e1b3bdf2dab0": "e0ca3d4afb13d12d9cbdc963d23b1b4c",
".git/objects/cd/8a24a60f00779fa4de771b5e5ac7453a078d2b": "2ceb8e18b6b673a52b3327c6604472a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/ffc1d8c19aa8f0c7a8543d2ac34fd1c73496f8": "934569f8155002eaa438e9737f4c4213",
".git/objects/e2/897272db9e72b50c038d288b40e7c436da9ba3": "ac2ae59db75c7b8cf41cfda40c40001b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/45be744de104f4a3fc6061c32acf248a918ab6": "a4cb3496e4181457b3b56d178a46216f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/beef371a38b8643c65a048cc7a00205417213d": "81fa43df05489006039d368bff9404bf",
".git/refs/heads/main": "c03f66fc83c365fc7112f76382339a7b",
".git/refs/remotes/origin/main": "c03f66fc83c365fc7112f76382339a7b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "77598eebf29594b1ccd0a3499fa67d08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c8a30972f2d7f87af34f5c3b62df9f39",
"/": "c8a30972f2d7f87af34f5c3b62df9f39",
"main.dart.js": "9ed9dac20328d7bf6748d3d9f270c564",
"manifest.json": "86f3560b340d4d246badef1b8927b83c",
"version.json": "e2c59f9157f91d8562978c7a3de6fa85"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
