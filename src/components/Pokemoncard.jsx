import React from 'react'
import './pokecard.css'
const Pokemoncard = (props) => {
  const {pokemon} =props;
  return (
    <div className='cont'> 
      <div className='Pokemoncard'>
        <h1>{pokemon.species.name}</h1>
        <div className='imageinfo'>
          <img src={pokemon.sprites.front_default} alt='' />
        </div>
        <div className='pokemondetails'>
            <h3>HP: {pokemon.stats[0].base_stat}</h3>
            <h3>Attack: {pokemon.stats[1].base_stat}</h3>
            <h3>Defense: {pokemon.stats[2].base_stat}</h3>
            <h3>Type: {pokemon.types[0].type.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Pokemoncard
