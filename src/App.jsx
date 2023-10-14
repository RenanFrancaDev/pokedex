import './App.css'
import { PokeService} from '../src/api/PokemonService'
import { useEffect, useState } from 'react'


function App() {


  const [pokemons, setPokemons] = useState({});
  // const limit = 10;
  // let offset = 0;

  const getPokemons = async () =>{
    const{data:{results}} = await PokeService.getPokemons()

    console.log(results)

    setPokemons(results)
  }

  useEffect(() => {
    getPokemons()

}, []);

  return (
    <>
      <div className='Home'>
       {pokemons.map((pokemon) => (
        <h2>{pokemon.name}</h2>
       ))}
      </div>
    </>
  )
}

export default App
