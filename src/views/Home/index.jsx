import { PokeService} from '../../api/PokemonService'
import { useEffect, useState } from 'react'
import Pokemon from '../../components/Pokemon/model';
import Card from '../../components/Card'


const Home = () => {

  const [pokemons, setPokemons] = useState([]);

  let offset = 0
  let limit = 10

  const getPokemons = async (offset, limit) =>{
  
  const {data} = await PokeService.getPokemons(offset, limit)
  const {results} = data
  results.map((poke) => (getPokemonDetail(poke.url)))
  }


  const getPokemonDetail = async (url) =>{
  const {data} = await PokeService.getPokeInfo(url)
  // console.log(data)
  convertPokemon(data)
    }


function convertPokemon(pokeDetail){

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
  

 setPokemons((prev)=>{return [...prev,pokemon]})
}

useEffect(() => {
  getPokemons(offset, limit)
  console.log('oi')
},[]);


const handleClick = () => {
offset = 0
limit += 10
getPokemons(offset, limit)

}


  return (
    <>
      <div className='Home'>

        <div>
          <h3>POKEMON</h3>
          {console.log(pokemons)}
          {pokemons.map((pokemon) => (
            <Card key={pokemon.number} pokemon={pokemon}/>
          ))}
          <button onClick={handleClick}></button>
        </div>

      </div>
    </>
  )
}

export default Home
