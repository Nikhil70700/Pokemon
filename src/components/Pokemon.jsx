import React, { useEffect, useState } from 'react'
import '.././index.css'
import PokemonCards from './PokemonCards';

const Pokemon = () => {
    const[pokemon,setPokemon]=useState([]);
    const API = 'https://pokeapi.co/api/v2/pokemon?limit=50';

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);
            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            });
            // console.log(detailedPokemonData);
            const detailedResponse=await Promise.all(detailedPokemonData);
            console.log(detailedResponse);
            setPokemon(detailedResponse)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchPokemon();
    }, [])
    return (
        <>
           <section className='container'>
            <header>
                <h1>Pokemon List</h1>
            </header>
            <div>
                <ul className='cards'>
                    {
                        pokemon.map((curPokemon)=>{
                            return <PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>
                        })
                    }
                </ul>
            </div>
           </section>
        </>
    )
}

export default Pokemon