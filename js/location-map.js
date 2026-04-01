(function (window) {
    'use strict';

    var MAP_ID = 'location-map';
    var DEFAULT_COORDS = [56.16848, 10.161381];
    var DEFAULT_ZOOM = 16;
    var TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/" rel="noopener" target="_blank">OpenStreetMap</a> contributors';
    var mapInstance = null;

    function destroyMap() {
        if (mapInstance) {
            mapInstance.remove();
            mapInstance = null;
        }
    }

    function getCoords(container) {
        if (!container || !container.dataset) {
            return DEFAULT_COORDS;
        }

        var lat = parseFloat(container.dataset.mapLat);
        var lng = parseFloat(container.dataset.mapLng);
        if (isFinite(lat) && isFinite(lng)) {
            return [lat, lng];
        }
        return DEFAULT_COORDS;
    }

    function getZoom(container) {
        if (!container || !container.dataset || !container.dataset.mapZoom) {
            return DEFAULT_ZOOM;
        }
        var zoom = parseInt(container.dataset.mapZoom, 10);
        if (isFinite(zoom)) {
            return zoom;
        }
        return DEFAULT_ZOOM;
    }

    function getLabel(container) {
        if (container && container.dataset && container.dataset.mapLabel) {
            return container.dataset.mapLabel;
        }
        return 'Restaurant Vinde';
    }

    function renderMap() {
        var container = document.getElementById(MAP_ID);
        if (!container) {
            destroyMap();
            return;
        }

        if (!window.L) {
            return;
        }

        // Avoid re-rendering on the same node.
        if (mapInstance && mapInstance.getContainer() === container) {
            mapInstance.invalidateSize();
            return;
        }

        destroyMap();

        var coords = getCoords(container);
        var zoom = getZoom(container);
        var label = getLabel(container);

        var fallback = container.querySelector('.location-map__fallback');
        if (fallback) {
            fallback.parentNode.removeChild(fallback);
        }

        mapInstance = window.L.map(container, {
            scrollWheelZoom: false,
            attributionControl: true,
        }).setView(coords, zoom);

        window.L.tileLayer(TILE_URL, {
            attribution: ATTRIBUTION,
            maxZoom: 19,
        }).addTo(mapInstance);

        window.L.marker(coords).addTo(mapInstance).bindPopup(label);
    }

    window.RestaurantVindeMap = {
        init: function () {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', renderMap);
                return;
            }
            // Delay to make sure ui-router has inserted the partial.
            window.requestAnimationFrame(renderMap);
        },
        refresh: renderMap,
    };
})(window);
