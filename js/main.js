const cajaBotones = document.querySelector("#cajaBotones");
// console.log(cajaBotones);
const fragment = document.createDocumentFragment();
const imagenGrande = document.querySelector("#imagenGrande");
// console.log(imagenGrande);
const tituloImagenGrande = document.querySelector("#tituloImagenGrande");
// console.log(tituloImagenGrande);
const numeroAparicionTag = document.querySelector("#numeroAparicionTag");
const nombreTag = document.querySelector("#nombreTag");
const botones = [
    "mar",
    "edificio",
    "seniales",
    "arena",
    "cosa"
]

const imagenes = [
    {
        titulo: 'Viaje 1',
        url: '/asset/image/viajes-1.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['mar', 'palmera', 'chica', 'arena'],
    },
    {
        titulo: 'Viaje 2',
        url: '/asset/image/viajes-2.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['mar', 'arena', 'puente', 'cielo'],
    },
    {
        titulo: 'Viaje 3',
        url: '/asset/image/viajes-3.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'edificio', 'arena'],
    },
    {
        titulo: 'Viaje 4',
        url: '/asset/image/viajes-4.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'agua', 'arena'],
    },
    {
        titulo: 'Viaje 5',
        url: '/asset/image/viajes-5.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['seniales', 'agua', 'cielo', 'arena'],
    },
    {
        titulo: 'Viaje 6',
        url: '/asset/image/viajes-6.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['palmera', 'seniales', 'cielo'],
    },
    {
        titulo: 'Viaje 7',
        url: '/asset/image/viajes-7.jpg',
        alt: 'texto alternativo de la imagen',
        descripcion: 'Breve descripción de la imagen',
        tags: ['seniales', 'agua', 'cielo', 'cosa'],
    },
]


//Eventos de creacion de elementos

document.addEventListener("click", (event) => {
    
    if (event.target.matches(".cajaBotones > button")) {
        const tag = event.target.id;
        let arrayObjetos = imagenes.filter((element) => element.tags.includes(tag));
        printarMensaje(arrayObjetos.length, tag);
        crearImagenGrande(arrayObjetos);
        createGallery(arrayObjetos);
    }
});


//Funcion crear botones
const crearBotones = () => {
    botones.forEach((boton) => {
        const botonCreado = document.createElement("button");
        botonCreado.id = boton;
        botonCreado.textContent = boton;
        fragment.append(botonCreado);

    });
    cajaBotones.append(fragment);
}

//Funcion Crear imagenes

const crearImagenGrande = (arrayObjetosTag, indiceImagen = 0) => {
    imagenGrande.innerHTML = "";
    tituloImagenGrande.textContent = arrayObjetosTag[indiceImagen].titulo;
    const cajaImagenGrande = document.createElement("DIV");
    const imageBig = document.createElement("IMG");

    //Caja imagen
    cajaImagenGrande.id = "cajaImagenGrande";
    cajaImagenGrande.classList = "cajaImagenGrande";

    //Imagen

    imageBig.setAttribute("src", arrayObjetosTag[0].url);
    imageBig.setAttribute("alt", arrayObjetosTag[0].alt);
    

    cajaImagenGrande.append(imageBig);
    fragment.append(cajaImagenGrande);
    imagenGrande.append(fragment);
}



//Funcion crear galeria
const createGallery = (arrayObjetosTag, indiceImagen = 0) => {
    const imgBox = document.querySelector("#imgBox");
    // console.log(imgBox);
    imgBox.innerHTML = "";
    arrayObjetosTag.forEach ((objetoImagen, index) => {

        if (index != indiceImagen) {
            //Creación article y añadir su clase
            const cardImagenes = document.createElement("ARTICLE");
            cardImagenes.classList = "cardImagenes";

            //Creación título imagen y añadir su clase
            const tituloImagenCard = document.createElement("H3");
            tituloImagenCard.classList = "tituloImagenCard";
            tituloImagenCard.textContent = objetoImagen.titulo;
            

            
            //Creación caja de la imagen y añadir su clase
            const cajaImagenPequenia = document.createElement("DIV");
            cajaImagenPequenia.classList = "cajaImagenPequenia";
            

            //Creación imagenCard y sus atributos
            const imagenPequeniaCard = document.createElement("IMG");
            imagenPequeniaCard.setAttribute("src", objetoImagen.url);
            imagenPequeniaCard.setAttribute("alt", objetoImagen.alt);
            

            cardImagenes.append(tituloImagenCard);
            cardImagenes.append(cajaImagenPequenia);
            cajaImagenPequenia.append(imagenPequeniaCard);
            fragment.append(cardImagenes);
        }

    });
    imgBox.append(fragment);
}

//FUNCION PRINTAR MENSAJE

const printarMensaje = (cantidad, tag) => {
    
    numeroAparicionTag.innerHTML = `<strong>${cantidad}</strong>`;
    nombreTag.innerHTML = `<strong>${tag}</strong>`;
    // numeroAparicionTag.textContent = cantidad;
    // nombreTag.textContent = tag;

}

// createGallery();


//Crear un evento que al hacer click, con ayuda del método filter, escoja solo los objetos que cuentan con ese tag. Después con el array de objetos resultante crear las imagenes con sus títulos que cuenten con ese tag.

// const lista = document.querySelector("#lista");




//Invocaciones de funciones

crearBotones();



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
