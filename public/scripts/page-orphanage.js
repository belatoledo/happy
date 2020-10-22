const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false, 
    zoomControl: false
}

//get values from html
const lat = document.querySelector('[data-lat]').dataset.lat;
const lng = document.querySelector('[data-lng]').dataset.lng;

//create Map
const map = L.map('mapid', options).setView([lat, lng], 13);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [40, 50],
    iconAnchor: [12, 68],
    popupAnchor: [155, 2]
})

//create and add marker

L.marker([lat,lng], {icon})
.addTo(map)

//image gallery 
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar de volta a classe .active ao botão clicado
    button.classList.add('active')
    

}
