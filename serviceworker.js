var CACHE_NAME = 'salvatorecriscione-cache-v2';
// The files we want to cache
var urlsToCache = [
  '/',
  '/css/main.css',
  '/js/bundle.js',
  '/8dcdb9e114f20b826ec76a50ecd82f48.jpg',
  '/08843bd6579db1e036994abe8100c007.jpg',
  '/f458b9e1503ed16629d62544f288e3e4.jpg',
  '/fa9c36493972c90635d5ecab70ae384b.jpg'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    // event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      });
});

// Set the callback when the files get fetched
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cached files available, return those
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response
        var fetchRequest = event.request.clone();

        // Start request again since there are no files in the cache
        return fetch(fetchRequest).then(
          function(response) {
            // If response is invalid, throw error
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have 2 stream.
            var responseToCache = response.clone();

            // Otherwise cache the downloaded files
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            // And return the network response
            return response;
          }
        );
      })
    );
});
