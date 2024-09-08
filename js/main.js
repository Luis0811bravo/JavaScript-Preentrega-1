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


// Función para asigar proyecto al director correspondiente
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

// Función para generar el siguiente número consecutivo
function generarConsecutivo(experimentos, nombreProyecto) {
    let ultimoExperimento = experimentos[experimentos.length - 1];
    let numero = parseInt(ultimoExperimento.split('-')[1]) + 1; // Extraer el número y sumarle 1
    let nuevoExperimento = `${nombreProyecto.toUpperCase()}-${String(numero).padStart(3, '0')}`;
    return nuevoExperimento;
}

// Función para agregar el nuevo proyecto al arreglo de valores
function agregarProyecto(nombreProyecto) {
    switch (nombreProyecto.toLowerCase()) {
        case 'insecticida':
            let nuevoInsecticida = generarConsecutivo(experimentosInsecticidas, nombreProyecto);
            experimentosInsecticidas.push(nuevoInsecticida);
            alert(`Nuevo proyecto "${nuevoInsecticida}" asignado.`);
            break;
        case 'fungicida':
            let nuevoFungicida = generarConsecutivo(experimentosFungicidas, nombreProyecto);
            experimentosFungicidas.push(nuevoFungicida);
            alert(`Nuevo proyecto "${nuevoFungicida}" asignado.`);
            break;
        case 'herbicida':
            let nuevoHerbicida = generarConsecutivo(experimentosHerbicidas, nombreProyecto);
            experimentosHerbicidas.push(nuevoHerbicida);
            alert(`Nuevo proyecto "${nuevoHerbicida}" asignado.`);
            break;
        case 'nematicida':
            let nuevoNematicida = generarConsecutivo(experimentosNematicidas, nombreProyecto);
            experimentosNematicidas.push(nuevoNematicida);
            alert(`Nuevo proyecto "${nuevoNematicida}" asignado.`);
            break;
        default:
            alert('Proyecto no válido');
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
    let nombreProyecto;
    
    while (true) {
        nombreProyecto = prompt('Selecciona área del experimento (insecticida, fungicida, herbicida, nematicida)');
        if (['insecticida', 'fungicida', 'herbicida', 'nematicida'].includes(nombreProyecto.toLowerCase())) {
            agregarProyecto(nombreProyecto);
            asignarProyecto(nombreProyecto);
            break;
        } else {
            alert('Área no válida, intenta de nuevo.');
        }
    }
}





