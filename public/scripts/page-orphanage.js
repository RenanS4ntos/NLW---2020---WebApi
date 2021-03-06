const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map

const map = L.map('mapid', options).setView([-22.2135645,-49.9500768], 15);

//create and add titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [ 29, 68],
    popupAnchor: [170, 2]
})


//create and add marker

L.marker([-22.2135645,-49.9500768], { icon })
.addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    // remover todas as classes .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
         button.classList.remove('active')
    }

    // selecinar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    // atualizar o container de imagem 
    imageContainer.src = image.src

    //adicionar a classe .active para o botao clicado
    button.classList.add('active')
}
