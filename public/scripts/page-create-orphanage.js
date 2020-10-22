//create Map
const map = L.map('mapid').setView([-19.9214549,-43.9616234], 13);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [40, 50],
    iconAnchor: [12, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


//add photo field
function addPhotoField() {
    
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1]. cloneNode(true)

    //verificar se o campo está vazio, se sim, não add ao container de imagens
    const input = newFieldContainer.children[0]
       
    if(input.value == "") {
        return
    }

    //limpar o campo antes de add nova foto ao container
    input.value = ""

    //add o clone ao container de imagens
    container.appendChild(newFieldContainer)

}

//delete field
function deleteField(event) {

const span = (event.currentTarget)

const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
    //limpar o valor do field
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//select yes or no
function toggleSelect(event) {
 
    //retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach( function(button)  {
        button.classList.remove('active')
    })

    //colocar a classe .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value;  
}



