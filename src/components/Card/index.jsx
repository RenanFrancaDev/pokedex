import React from "react"
import './index.css'

const Card = ( { pokemon } ) =>{ 

    
  return (
    <div className="container">
        <div>
            <h2 className="name">{pokemon.name}</h2>
            <img src={pokemon.photo} width={100}/>
        </div>
        <div>
            <span>#{pokemon.number}</span>
            <ol className="types">

            {pokemon.types.map((type) => (<li className={`pokemon ${type}`} key={type.index}>{type}</li>))}
            </ol>
        </div>
    </div>
  )
}

export default Card