//create Map
const map = L.map('mapid').setView([-19.9214549,-43.9616234], 13);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [40, 50],
    iconAnchor: [12, 68],
    popupAnchor: [155, 2]
})

//add a function
function addMarker({id, name, lat, lng}) {

//create popup overlay
const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 200, 
    minHeight: 200
}).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)


//create and add marker
L.marker([lat,lng], {icon}).addTo(map)
    .bindPopup(popup);

}

//executando a function
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
        
    }
    
    addMarker(orphanage)
})
