import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContactIcon, CloseIcon } from '../assets/Icons';

export default Contact => {
	const [isContactOpen, setContactOpen] = useState(false);

	return (
		<ContactContainer>
			<Button
				onClick={() => setContactOpen(now => !now)}
				initial={{ opacity: 0, x: '100%' }}
				animate={{ opacity: 1, x: 0 }}
			>
				{isContactOpen ? <CloseIcon /> : <ContactIcon />}
			</Button>
			<ContactIcon />
			<ContactIcon />
			<ContactIcon />
			<ContactIcon />
		</ContactContainer>
	);
};

const ContactContainer = styled(motion.div)`
	--contact-shift: 20px;
	--button-dimensions: 50px;
	position: fixed;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: var(--button-dimensions);
	right: var(--contact-shift);
	bottom: var(--contact-shift);
`;

const Button = styled(motion.button)`
	--my-pink: #fcc;
	background-color: var(--my-pink);
	padding: 10px;
	border: none;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	border-radius: 100%;
	transition: all 0.1s ease-in-out;
	width: var(--button-dimensions);
	height: var(--button-dimensions);
	order: 2;
	&:focus,
	&:active {
		outline: 2px solid var(--my-pink);
		-moz-outline-radius: 100%;
	}
	&:hover {
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
		transform: translate3d(0, -3px, 0);
	}
	svg {
		max-width: 100%;
		max-height: 100%;
		path {
			fill: white;
		}
	}
`;
