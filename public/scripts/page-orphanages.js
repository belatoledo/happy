//create Map
const map = L.map('mapid').setView([-19.9214549,-43.9616234], 13);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [40, 50],
    iconAnchor: [12, 68],
    popupAnchor: [155, 2]
})

//create popup overlay

const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 200, 
    minHeight: 200
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker
L.marker([-19.9214549,-43.9616234], {icon}).addTo(map)
    .bindPopup(popup);