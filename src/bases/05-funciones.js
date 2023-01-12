
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}


//cuando tengan un solo return
const saludar3 = (nombre) => `Hola, ${nombre}`;


console.log(saludar('Mario'));
console.log(saludar2('Peter'));
console.log(saludar2('Andrea'));


const getUser = ()=>({
        uid: 'ABC123',
        username: 'mconde994'

    })


const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre)=>({
    uid: '123456',
    username: nombre
});

console.log(getUsuarioActivo('Mario'));