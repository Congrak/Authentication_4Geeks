
const BaseURL = 'https://pokeapi.co/api/v2/'

//call 50 pokemons 

export const get_pokemons = async(limit = 50, offset = 0) => {

    const res = await fetch(`${BaseURL}pokemon?limit=${limit}$offset=${offset}`)
    const data = await res.json()

    const respon = data.results.map(async(pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })

    const results = await Promise.all(respon)

    return results
}

//Search pokemons by Id

export const get_pokemon = async(id) => {
    const res = await fetch(`${BaseURL}pokemon/${id}`)
    let data = await res.json()
    return data
}

//Get All Pokemons

export const get_allPokemons = async() => {
    const res = await fetch (`${BaseURL}pokemon?limit=100000&offset=0`)
    let data = await res.json()
    return data.results
}

//Evolves Chain

export const get_evolves = async() => {
    const res = await fetch(`${BaseURL}evolution-chain/?offset=100000&limit=0`)
    let data = await res.json()
    return data.results
}
