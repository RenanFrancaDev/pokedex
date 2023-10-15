import axios from "axios"

// const BASE_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// var pokeApi = {}

export class PokeService{
    static getPokemons(){
        return axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=15`)
    }

    static getPokeInfo(){
        return axios(`https://pokeapi.co/api/v2/pokemon/1`)
        
    }
}



export default PokeService