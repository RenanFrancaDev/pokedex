class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    weigth;
    height;
    ability;
    abilities = [];
    move;
    moves = []
}

export default Pokemon


// function convertPokemon(pokeDetail){

//     const pokemon = new Pokemon();
  
//     pokemon.number = pokeDetail.id;
//     pokemon.name = pokeDetail.name;
//     pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
//     pokemon.type = pokemon.types[0];
//     pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
//     pokemon.weight = pokeDetail.weight;
//     pokemon.height = pokeDetail.height;
//     pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
//     pokemon.ability = pokemon.abilities.length > 1 ? pokemon.abilities[0] + ' & ' + pokemon.abilities[1] : pokemon.abilities[0];
//     pokemon.moves = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
//     pokemon.move = pokemon.moves.length > 1 ? pokemon.moves[0] + ' & ' + pokemon.moves[1] : pokemon.moves[0] ;
  
//    setPokemons(pokemon)
//   }