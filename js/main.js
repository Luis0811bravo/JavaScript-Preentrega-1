// alert('Favor de revisar informes pendientes');

const usuarioHaidiel = "haidel vargas madriz";
const usuarioAusencio = "ausencio azuara dominguez";
const usuarioPaul = "paul garcia escamilla";
const usuarioYuridia = "yuridia duran trujillo";

let usuario = prompt('Ingresa nombre completo (omitir acentos)');
usuario = usuario.toLowerCase();

let nuevoProyecto = confirm('¿Quieres agregar un nuevo proyecto?');

if (nuevoProyecto == false) {
    switch (usuario) {
        case usuarioHaidiel:
            // asignar();
            console.log("INFORMES DEL DR " + usuario.toLocaleUpperCase());
            
            break;
    
        case usuarioAusencio:
            console.log("INFORMES DEL DR " + usuario.toLocaleUpperCase());
            break;
    
        case usuarioPaul:
            console.log("INFORMES DEL DR " + usuario.toLocaleUpperCase());
            break;
    
        case usuarioYuridia:
            console.log("INFORMES DE LA DRA " + usuario.toLocaleUpperCase());
            break;
        
        default:
            alert('FAVOR DE REVISAR INFORMACIÓN DE ACCESO');
    }

} else {
    
    let nombreProyecto = prompt('Selecciona área del experimento (insecticida, fungicida, herbicida, nematicida');
    if (nombreProyecto == 'insecticida') {
        alert('PROYECTO ASIGNADO AL DR' + usuarioHaidiel.toLocaleUpperCase());
    } else if (nombreProyecto == 'herbicida') {
        alert('PROYECTO ASIGNADO A LA DRA' + usuarioYuridia.toLocaleUpperCase());
    } else if (nombreProyecto == 'fungicida') {
        alert('PROYECTO ASIGNADO AL DR' + usuarioPaul.toLocaleUpperCase());
    } else if (nombreProyecto == 'nematicida') {
        alert('PROYECTO ASIGNADO AL DR' + usuarioAusencio.toLocaleUpperCase());
    }
}

//Hace falta una funcion para asignar la entrada por prompt 

//function asignar() { }

//Hace falta realizar un arreglo de todos los experimentos para así poder extraer los asignados a cada usuario 

//Hace falta una funcion para poder seleccionar y mostrar los experimentos de cada usuario,  

//function extraer() { }    




