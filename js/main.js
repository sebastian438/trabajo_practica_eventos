const cajaBotones = document.querySelector("#cajaBotones");
// console.log(cajaBotones);


const botones = [
    "Mar",
    "Edificio",
    "Señales",
    "Arena",
    "Cosa"
]

const fragment = document.createDocumentFragment();

const crearBotones = () => {
    botones.forEach((boton) => {
        const botonCreado = document.createElement("button");
        botonCreado.textContent = boton;
        fragment.append(botonCreado);

    });
    cajaBotones.append(fragment);
}


crearBotones();



//Crear imagenes

const imagenes = [
    {
        titulo: 'Viaje 1',
        url: '/asset/image/viajes-1.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['mar', 'palmera', 'chica', 'cielo'],
    },
    {
        titulo: 'Viaje 2',
        url: '/asset/image/viajes-2.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['mar', 'arena', 'puente', 'cielo', 'casas'],
    },
    {
        titulo: 'Viaje 3',
        url: '/asset/image/viajes-3.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 4',
        url: '/asset/image/viajes-4.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 5',
        url: '/asset/image/viajes-5.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 6',
        url: '/asset/image/viajes-6.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 7',
        url: '/asset/image/viajes-7.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'agua', 'cielo'],
    },
]


const imagenGrande = document.querySelector("#imagenGrande");
// console.log(imagenGrande);
const tituloImagenGrande = document.querySelector("#tituloImagenGrande");
// console.log(tituloImagenGrande);

const crearImagenGrande = () => {
    tituloImagenGrande.textContent = imagenes[0].titulo;
    const cajaImagenGrande = document.createElement("DIV");
    const imageBig = document.createElement("IMG");

    //Caja imagen
    cajaImagenGrande.id = "cajaImagenGrande";
    cajaImagenGrande.classList = "cajaImagenGrande";

    //Imagen

    imageBig.setAttribute("src", imagenes[0].url);
    imageBig.setAttribute("alt", imagenes[0].alt);
    

    cajaImagenGrande.append(imageBig);
    fragment.append(cajaImagenGrande);
    imagenGrande.append(fragment);
}

crearImagenGrande();

// imagenes[0] = "";

const createGallery = () => {
    const imgBox = document.querySelector("#imgBox");
    // console.log(imgBox);
    
    imagenes.forEach((element) => {


        //Creación article y añadir su clase
        const cardImagenes = document.createElement("ARTICLE");
        cardImagenes.classList = "cardImagenes";

        //Creación título imagen y añadir su clase
        const tituloImagenCard = document.createElement("H3");
        tituloImagenCard.classList = "tituloImagenCard";
        tituloImagenCard.textContent = element.titulo;
        cardImagenes.append(tituloImagenCard);

        
        //Creación caja de la imagen y añadir su clase
        const cajaImagenPequenia = document.createElement("DIV");
        cajaImagenPequenia.classList = "cajaImagenPequenia";
        cardImagenes.append(cajaImagenPequenia);

        //Creación imagenCard y sus atributos
        const imagenPequeniaCard = document.createElement("IMG");
        imagenPequeniaCard.setAttribute("src", element.url);
        imagenPequeniaCard.setAttribute("alt", element.alt);
        cajaImagenPequenia.append(imagenPequeniaCard);

        fragment.append(cardImagenes);


    });
    imgBox.append(fragment);
}

createGallery();





// document.addEventListener('click', (ev) => {
//     if (ev.target.matches('.boton')) {
//         // console.log('es un boton')
//         const tag = ev.target.id
//         console.log(tag)
//         crearMiniaturas(tag);
//         mostrarGrande(tag);
//         pintarMensaje();
//     }
//     if (ev.target.matches('#miniaturas > *')) {
//         console.log('es un hijo')
//     }
// })
// const crearBotones = () => {
//     console.log('pintando botones')
// }
// const crearMiniaturas = (tag) => {
//     console.log('creando miniaturas')
// }
// const mostrarGrande = (tag) => {
//     console.log(`creando grande que corresponda con el ${tag}`)
// }
// const pintarMensaje = () => {
//     console.log('creando mensaje')
// }
// crearBotones()

// Reaccionar

// Responder

// 10:10
