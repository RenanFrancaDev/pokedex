const pokeApi = {}


pokeApi.getPokemonsArr = buscarPoke()

async function buscarPoke(offset, limit) {
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    const pokemons = await response.json()
    const jsonBody = await jsonBody.results
    const pokemonsArr = await pokemonsArr.map((pokemon) => pokeApi.getPokemonsDetail(pokemon))
    const detailRequest = await Promise.all(detailRequest)
    const pokemonsDetails = await pokemonsDetails
    return pokemonsDetails
    } catch (error){
        console.error(error)
    }
}


pokeApi.getPokemonsDetail = async (pokemon) => {
    await fetch(pokemon.url)
    const response = await response.json()
    const poke = convertPokeAoiDetailtoPokemon(pokemon)


    return poke
                            
}


function convertPokeAoiDetailtoPokemon(pokeDetail){


    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    pokemon.type = pokemon.types[0];
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.weight = pokeDetail.weight;
    pokemon.height = pokeDetail.height;
    pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    pokemon.ability = pokemon.abilities.length > 1 ? pokemon.abilities[0] + ' & ' + pokemon.abilities[1] : pokemon.abilities[0];
    pokemon.moves = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    pokemon.move = pokemon.moves.length > 1 ? pokemon.moves[0] + ' & ' + pokemon.moves[1] : pokemon.moves[0] ;


    
    return pokemon
    
}


