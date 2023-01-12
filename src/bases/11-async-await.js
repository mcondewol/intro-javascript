//async nos sirve para convertir una función en una promesa
//await nos ayuda a nosotros a que podamos trabajar todo el código como si fuera sincrono

const getImagen = async ()=>{

    try {
        const apiKey = 'C6NquXRbdcSUnw7HZvJy8bJGAyJ05ou6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await resp.json();
        const { url } = data.images.original;
        console.log(url)
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img) 
    } catch (error) {
        //manejo del error
    }
    

}


getImagen();


// const apiKey = 'C6NquXRbdcSUnw7HZvJy8bJGAyJ05ou6';


// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
// .then(resp=> resp.json())
// .then(({data})=>{
//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img)
// })
// .catch(console.warn)