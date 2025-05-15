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
// const imagenes = [
//     {
//         titulo: 'Viaje 1',
//         url: 'ruta de la imagen',
//         alt: 'texto alternativo de la imagen',
//         descripcion: 'Breve descripción de la imagen',
//         tags: ['mar', 'palmera', 'chica', 'cielo'],
//     },
//     {
//         titulo: 'Viaje 1',
//         url: 'ruta de la imagen',
//         alt: 'texto alternativo de la imagen',
//         descripcion: 'Breve descripción de la imagen',
//         tags: ['mar', 'arena', 'puente', 'cielo', 'casas'],
//     },
//     {
//         titulo: 'Viaje 1',
//         url: 'ruta de la imagen',
//         alt: 'texto alternativo de la imagen',
//         descripcion: 'Breve descripción de la imagen',
//         tags: ['palmera', 'agua', 'cielo'],
//     },
// ]