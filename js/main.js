// alert('Favor de revisar informes pendientes');

const usuarioHaidiel = "haidel vargas madriz";
const usuarioAusencio = "ausencio azuara dominguez";
const usuarioPaul = "paul garcia escamilla";
const usuarioYuridia = "yuridia duran trujillo";

let experimentosInsecticidas = [
    "INSECTICIDA-001",
];

let experimentosFungicidas = [
    "FUNGICIDA-001",
];

let experimentosNematicidas = [
    "NEMATICIDA-001",
];

let experimentosHerbicidas = [
    "HERBICIDA-001",
];

// Función para dar bienvenida a usuario 
function bienvenida() {
    alert('BIENVENIDO DR. ' + usuario.toUpperCase());
}

// Función para mostrar estudios de cada director
function mostrarExperimentos() {
    switch (usuario) {
        case usuarioHaidiel:
            console.log("INFORMES DEL DR " + usuario.toUpperCase());
            console.log(experimentosInsecticidas)
            break;
    
        case usuarioAusencio:
            console.log("INFORMES DEL DR " + usuario.toUpperCase());
            console.log(experimentosNematicidas)
            break;
    
        case usuarioPaul:
            console.log("INFORMES DEL DR " + usuario.toUpperCase());
            console.log(experimentosFungicidas)
            break;
    
        case usuarioYuridia:
            console.log("INFORMES DE LA DRA " + usuario.toUpperCase());
            console.log(experimentosHerbicidas)
            break;
        
        default:
            alert('FAVOR DE REVISAR INFORMACIÓN DE ACCESO');
    }
}



// Función para asigar proyecto al directos correspondiente
function asignarProyecto(nombreProyecto) {
    switch (nombreProyecto.toLowerCase()) {
        case 'insecticida':
            alert('PROYECTO ASIGNADO AL DR ' + usuarioHaidiel.toLocaleUpperCase());

            break;
        case 'herbicida':
            alert('PROYECTO ASIGNADO A LA DRA ' + usuarioYuridia.toLocaleUpperCase());
            break;
        case 'fungicida':
            alert('PROYECTO ASIGNADO AL DR ' + usuarioPaul.toLocaleUpperCase());
            break;
        case 'nematicida':
            alert('PROYECTO ASIGNADO AL DR ' + usuarioAusencio.toLocaleUpperCase());
            break;
        default:
            alert('Proyecto no asignado');
    }
}


let usuario = prompt('Ingresa nombre completo (omitir acentos)');
usuario = usuario.toLowerCase();

let nuevoProyecto = confirm('¿Quiere agregar un nuevo proyecto?');

if (nuevoProyecto == false) {

    switch (usuario) {
        case usuarioHaidiel:
            bienvenida ();
            mostrarExperimentos();
            break;
    
        case usuarioAusencio:
            bienvenida ();
            mostrarExperimentos();
            break;
    
        case usuarioPaul:
            bienvenida ();
            mostrarExperimentos();
            break;
    
        case usuarioYuridia:
            bienvenida ();
            mostrarExperimentos();
            break;
        
        default:
            alert('FAVOR DE REVISAR INFORMACIÓN DE ACCESO');
    }

} else {
    
    let nombreProyecto = prompt('Selecciona área del experimento (insecticida, fungicida, herbicida, nematicida');

    function agregarProyecto() { // Función para agregar el nuevo proyecto al arreglo de valores
        if (nombreProyecto == 'insecticida') {
            experimentosInsecticidas.push(nombreProyecto); // Agregar el nuevo proyecto al final del array
            alert(`Nuevo proyecto "${nombreProyecto}" asignado.`);
    
        } else if (nombreProyecto == 'fungicida') {
            experimentosFungicidas.push(nombreProyecto); // Agregar el nuevo proyecto al final del array
            alert(`Nuevo proyecto "${nombreProyecto}" asignado.`);
    
        } else if (nombreProyecto == 'herbicida') {
            experimentosFungicidas.push(nombreProyecto); // Agregar el nuevo proyecto al final del array
            alert(`Nuevo proyecto "${nombreProyecto}" asignado.`);
    
        } else {
            experimentosFungicidas.push(nombreProyecto); // Agregar el nuevo proyecto al final del array
            alert(`Nuevo proyecto "${nombreProyecto}" asignado.`);
        }
    }
   
    agregarProyecto();
    asignarProyecto(nombreProyecto);
}
