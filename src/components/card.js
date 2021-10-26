import React from "react";
import './card.css';

export default function Card(pokemon) {
    return (
        <div className='cartao'>
            <img src={pokemon.pokemon.image_url} />
            <div>
                {pokemon.pokemon.name}
            </div>
            <div>
                {pokemon.pokemon.number}
            </div>
            <div>
                {pokemon.pokemon.weight}
            </div>
            <div>
                {pokemon.pokemon.height}
            </div>
            <div>
                {pokemon.kind}
            </div>
        </div>
    )
}