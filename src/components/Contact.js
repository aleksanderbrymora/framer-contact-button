import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContactIcon } from '../assets/Icons';

const variants = {
	open: { opacity: 1, scale: 0 },
	closed: { opacity: 0.6, scale: 1 },
};

export default Contact => {
	const [isContactOpen, setContactOpen] = useState(false);

	return (
		<div className='contact'>
			<Button
				onClick={() => setContactOpen(true)}
				// initial='closed'
				// animate='open'
				// variants={variants}
			>
				<ContactIcon />
			</Button>
		</div>
	);
};

const Contact = styled(motion.div)`
	--contact-shift: 20px;
	position: fixed;
	right: var(--contact-shift);
	bottom: var(--contact-shift);
`;

const Button = styled(motion.button)`
	--button-dimensions: 50px;
	--my-pink: #fcc;
	background-color: var(--my-pink);
	padding: 10px;
	border: none;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	border-radius: 100%;
	transition: transform 0.1s ease-in-out;
	width: var(--button-dimensions);
	height: var(--button-dimensions);
	&:focus,
	&:active {
		outline: 2px solid var(--my-pink);
		-moz-outline-radius: 100%;
	}
	&:hover {
		transform: translate3d(0, -3px, 0) scale(1.02);
	}
	svg path {
		fill: white;
	}
`;
