import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../componets/navbar'
import { get_pokemons } from '../service/pokeapi'
import 'bootstrap'
import '../style/App.css'
import '../style/type.css'

function App() {

  const [pokemons, setPokemons] = useState()
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(50)

  //First Call for API

  useEffect(() => {
    async function setAll() {
      let pokemons = await get_pokemons()
      setPokemons(pokemons)
      //console.log(pokemons)
    }
    setAll()
  }, [])

  // Second Render Add 50 more Pokemons when you press the bottom 'More Pokemons'

  useEffect(() => {
    async function setAll() {
      let pokemons = await get_pokemons(limit, offset)
      setPokemons(pokemons)
      //console.log(pokemons)
    }
    setAll()
  }, [limit, offset])

  //console.log(pokemons)

  //Function add more pokemons

  const morePokemons = () => {

    setLimit(limit + 50)
    setOffset(offset + 50)

    return limit, offset
  }

  return (
    <div className="App">
      <Navbar />
      <div className='wrapper'>
        {pokemons?.map((pokemon, index) => {
          return (
            <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" key={index}>

                <div className='imgDiv'>
                  <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                </div>

                <div className="card-body">
                  <div className='name'>
                    <h5 className="card-title">#{pokemon.id} {pokemon.name}</h5>
                  </div>
                </div>

                <div className='features'>
                  <div className='pokeHeight'>{pokemon.height} M</div>
                  <div className='pokeWeight'>{pokemon.weight} Kg</div>

                </div>

                <div className='type'>{pokemon.types?.map((type, index) => {
                  return <div key={index} className={`${type.type.name}`}>{type.type.name}</div>
                })}
                </div>

              </div>
            </Link>
          )
        })}
      </div>

      <div className='footer'>
        <button type="button" className="btn btn-warning" onClick={() => {
          morePokemons()
        }}>More Pokemons</button>
      </div>
    </div>
  )
}

export default App
