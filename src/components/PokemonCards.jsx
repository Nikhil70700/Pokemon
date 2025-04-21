import React from 'react';
import { motion } from 'framer-motion';

const PokemonCards = ({ pokemonData, index }) => {
    const rowPosition = Math.floor(index / 4);
    const colPosition = index % 4;

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            x: colPosition < 2 ? -100 : 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 12,
                delay: (rowPosition * 0.1) + (colPosition * 0.05),
            },
        },
    };

    return (
        <motion.div
            className="pokemon-parent-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <li className="pokemon-card">
                <figure>
                    <img
                        className="pokemon-image"
                        src={pokemonData.sprites.other.dream_world.front_default}
                        alt={pokemonData.name}
                    />
                </figure>

                <h1 className="pokemon-name">{pokemonData.name}</h1>

                <div className="pokemon-info pokemon-highlight">
                    <p>
                        {pokemonData.types.map((curType) => curType.type.name).join(', ')}
                    </p>
                </div>

                <div className="grid-three-cols">
                    <p className="pokemon-info"><span>Height:</span> {pokemonData.height}</p>
                    <p className="pokemon-info"><span>Weight:</span> {pokemonData.weight}</p>
                    <p className="pokemon-info"><span>Speed:</span> {pokemonData.stats[5].base_stat}</p>
                </div>

                <div className="grid-three-cols">
                    <div className="pokemon-info">
                        <p>{pokemonData.base_experience}</p>
                        <span>Experience:</span>
                    </div>
                    <div className="pokemon-info">
                        <p>{pokemonData.stats[1].base_stat}</p>
                        <span>Attack:</span>
                    </div>
                    <div className="pokemon-info">
                        <p>{pokemonData.abilities.map((a) => a.ability.name).slice(0, 1).join(', ')}</p>
                        <span>Abilities:</span>
                    </div>
                </div>
            </li>
        </motion.div>
    );
};

export default PokemonCards;