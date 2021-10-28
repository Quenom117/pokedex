import styled from 'styled-components';
import colors from '../styles/colors';

export const Tipo = styled.div`
		background-color:${props => colors[props.cor]};
		margin: 0.3rem;
		border-radius: 5px;
		padding: 0.1rem 0.4rem;
	`