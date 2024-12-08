import React, { useEffect, useState } from 'react'

export default function Pokemon() {

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${1}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data);
            })
    }, [])

    return (
        <div>
            {pokemon && pokemon.name}
        </div>
    )
}
