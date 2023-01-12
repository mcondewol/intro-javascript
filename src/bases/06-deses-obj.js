//Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const getContext = ({nombre, edad, clave, rango='Capitan'})=>{

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.9798,
            lng: -12.987
        }
    }
}

const {nombreClave, anios, latlng} = getContext(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);
