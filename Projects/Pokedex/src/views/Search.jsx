import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Navbar } from "../componets/navbar"
import { get_pokemon } from "../service/pokeapi"
import '../style/PokeData.css'
import 'bootstrap'

export const Search = () => {

    const { pokeName } = useParams()
    const [info, setInfo] = useState()
    //const [evolve, setEvolve] = useState()

    console.log(pokeName)

    useEffect(() => {
        async function set() {
            let pokemonInfo = await get_pokemon(pokeName.toLowerCase())
            //setEvolve(evolveInfo)
            setInfo(pokemonInfo)
            //console.log(pokemonInfo, 'this')
        }
        set()
    }, [pokeName])

    console.log(info, 'info')
    if (info == undefined) {
        return (
            <div className="pokeData">
                <Navbar />

                <div className="titleData">
                    <h1>That pokemon doesn't exist</h1>
                </div>
            </div>  
    )}else {
    return (
                <div className="pokeData">
                    <Navbar />

                    <div className="titleData">
                        <div><h1>{info?.name[0].toUpperCase() + info?.name.slice(1)}</h1></div>
                    </div>

                    <div className="bodyData">

                        <div className="imgDivData">
                            <img className='pokeImg' src={info?.sprites.front_default} alt={info?.name} />
                        </div>

                        <div className="info">

                            <div className='featuresPoke'>
                                <div className='pokeHeight' >Height: {info?.height} M</div>
                                <div className='pokeWeight' >Weight: {info?.weight} Kg</div>
                            </div>

                            <div className='type'>{info?.types.map((type, index) => {
                                return <div key={index} className={`${type.type.name}`}>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</div>
                            })}
                            </div>
                            {info?.stats.map((stat, index) => {
                                //console.log(stat)
                                let Class = 'progress-bar progress-bar-striped progress-bar-animated'
                                if (stat.stat.name == 'hp') barClass = `${Class} bg-success`
                                else if (stat.stat.name == 'attack') barClass = `${Class} bg-danger`
                                else if (stat.stat.name == 'defense') barClass = `${Class} bg-warning`
                                else if (stat.stat.name == 'special-attack') barClass = `${Class} bg-danger-subtle`
                                else if (stat.stat.name == 'special-defense') barClass = `${Class} bg-primary-subtle`
                                else if (stat.stat.name == 'speed') barClass = `${Class} bg-info`
                                return (
                                    <div className="stats" key={index}>
                                        <span className="statName"> {stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}</span>
                                        <div id={stat.stat.name} className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div className={barClass} style={{ width: `${stat.base_stat}%` }}></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                )
}}