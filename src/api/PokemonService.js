import axios from "axios"

// const BASE_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// var pokeApi = {}

export class PokeService{
    static getPokemons(offset, limit){
        return axios(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    }

    static getPokeInfo(url){
        return axios({url})
        
    }
}



export default PokeService