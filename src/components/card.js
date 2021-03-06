import React, { useState } from "react";
import './card.css';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import colors from '../styles/colors';


export default function Card(pokemon) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const tipos = pokemon.pokemon.kind.split(';')
	const paraMaiusculo = (palavra)=>{
		return palavra.slice(0,1).toUpperCase()+palavra.slice(1,palavra.length)
	}
	const Tipo = styled.div`
		background-color:${props => colors[props.cor]};
		margin: 0.3rem;
		border-radius: 5px;
		padding: 0.1rem 0.4rem;
	`


	return (
		<>

			<div className='cartao' onClick={handleShow}>
				<img alt='imagem de pokemon' src={pokemon.pokemon.image_url} />
				<div>
					{paraMaiusculo(pokemon.pokemon.name)}
				</div>
				<div>
					{pokemon.pokemon.number}
				</div>
				<div className='tipos'>
					{tipos.map((tipo) => (
						<Tipo cor={tipo}>
							{tipo}
						</Tipo>
					))}
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{pokemon.pokemon.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img alt='imagem de pokemon' src={pokemon.pokemon.image_url} />
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
						{pokemon.pokemon.kind}
					</div>
				</Modal.Body>
			</Modal>
		</>

	)
}