//import {heroes} from './data/heroes';
//import {heroes} from './data/heroes'

import  heroes,{ owners}  from "./data/heroes";

console.log(owners);

//find
const getHeroeById = (id)=>{
    return heroes.find(heroe=> heroe.id === id);
}

console.log(getHeroeById(2));

//filter
const getHeroesByOwner = (owner)=>{
    return heroes.filter(heroe=> heroe.owner === owner);
}

console.log(getHeroesByOwner('DC'));