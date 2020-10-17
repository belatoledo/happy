const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false, 
    zoomControl: false
}

//create Map
const map = L.map('mapid', options).setView([-19.9214549,-43.9616234], 13);

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
L.marker([-19.9214549,-43.9616234], {icon}).addTo(map)

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
