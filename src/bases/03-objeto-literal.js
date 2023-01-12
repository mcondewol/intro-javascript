const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Guatemala',
        zip: '01066',
        lat: 14.6789,
        lng: 34.97987
    }
}

//console.table(persona);

// ... al agregar los 3 puntos a persona me permite crear un nuevo objeto
const persona2 = {...persona};
persona2.nombre = 'Mario';
console.log(persona)
console.log(persona2);

