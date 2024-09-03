// alert('Favor de revisar informes pendientes');

const usuarioHaidiel = "haidel vargas madriz";
const usuarioAusencio = "ausencio azuara dominguez";
const usuarioPaul = "paul garcia escamilla";
const usuarioYuridia = "yuridia duran trujillo";

let usuario = prompt('Ingresa nombre completo (omitir acentos)');
usuario = usuario.toLowerCase();

let nuevoProyecto = confirm('¿Quieres agregar un nuevo proyecto?');

if (nuevoProyecto) {
    let nombreProyecto = prompt('Selecciona área del experimento (insecticida, fungicida, herbicida, nematicida, acaricida, bactericida');
    if (nombreProyecto == 'insecticida') {
        alert('Proyecto asignado a ' + usuarioAusencio.toLocaleUpperCase());
    }
}

//function asignar() {
    

switch (usuario) {
    case usuarioHaidiel:
        // asignar();
        console.log("INFORMES DE " + usuario.toLocaleUpperCase());
        
        break;

    case usuarioAusencio:
        console.log("INFORMES DE " + usuario.toLocaleUpperCase());
        break;

    case usuarioPaul:
        console.log("INFORMES DE " + usuario.toLocaleUpperCase());
        break;

    case usuarioYuridia:
        console.log("INFORMES DE " + usuario.toLocaleUpperCase());
        break;
    
    default:
        alert('FAVOR DE REVISAR INFORMACIÓN DE ACCESO');
}


