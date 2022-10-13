import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../images/login-img.svg'
import styled from 'styled-components'

const Error = () => {
	return (
		<Wrapper>
			<div className='container'>
				<h1>404</h1>
				<img src={loginImg} alt='github user logo' />
				<h3>Sorry, the page you tried cannot be found</h3>
				<Link to='/' className='btn'>
					back home
				</Link>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
	background: var(--clr-primary-10);
	text-align: center;
	.container {
		width: 90vw;
		max-width: 600px;
		text-align: center;
	}
	h1 {
		font-size: 8rem;
	}
	img {
		margin-bottom: 1.5rem;
	}
	h3 {
		color: var(--clr-grey-3);
		margin-bottom: 1.5rem;
	}
`

export default Error
