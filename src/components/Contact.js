import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactIcon, CloseIcon } from '../assets/Icons';

const item = {
	hidden: { x: 100 },
	show: { x: 0 },
};

const linksContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};

export default Contact => {
	const [isContactOpen, setContactOpen] = useState(false);

	return (
		<ContactContainer
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			clicked={isContactOpen}
		>
			<ContactButton onClick={() => setContactOpen(now => !now)}>
				{isContactOpen ? <CloseIcon /> : <ContactIcon />}
			</ContactButton>
			<AnimatePresence>
				{isContactOpen && (
					<Links
						variants={linksContainer}
						initial='hidden'
						animate='show'
						exit='hidden'
					>
						<ContactLink />
						<ContactLink />
						<ContactLink />
						<ContactLink />
					</Links>
				)}
			</AnimatePresence>
		</ContactContainer>
	);
};

const ContactLink = () => (
	<motion.div
		variants={item}
		whileHover={{ scale: [0.95, 1.05], shadowY: 10, shadowBlur: 5 }}
	>
		<OtherButton>
			<ContactIcon />
		</OtherButton>
	</motion.div>
);

const ContactContainer = styled(motion.div)`
	--contact-shift: 20px;
	--button-dimensions: 50px;
	position: fixed;
	display: flex;
	width: var(--button-dimensions);
	flex-direction: column;
	right: var(--contact-shift);
	bottom: var(--contact-shift);
	z-index: 1;
`;

const Links = styled(motion.div)`
	--button-dimensions: 50px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: auto;
`;

const Button = styled(motion.button)`
	--my-pink: #fcc;
	padding: 10px;
	border: none;
	cursor: pointer;
	border-radius: 100%;
	transition: all 0.1s ease-in-out;
	width: var(--button-dimensions);
	height: var(--button-dimensions);
	&:focus,
	&:active {
		outline: none;
		-moz-outline-radius: 100%;
	}
	svg {
		max-width: 100%;
		max-height: 100%;
		path {
			fill: var(--my-pink);
		}
	}
`;

const OtherButton = styled(Button)`
	background-color: white;
	border: 5px solid var(--my-pink);
`;

const ContactButton = styled(Button)`
	order: 2;
	margin-top: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	svg > path {
		fill: white;
	}
	&:hover {
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
		transform: translate3d(0, -3px, 0);
	}
	${({ clicked }) =>
		clicked
			? `
		background-color: white;
		svg path {
			fill: var(--my-pink);
		}
		`
			: `
		background-color: var(--my-pink);
		svg path {
			fill: white;
		}
		`};
`;
