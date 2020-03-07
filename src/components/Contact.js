import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactIcon, CloseIcon } from '../assets/Icons';

const item = {
	hidden: { opacity: 0, x: 70 },
	show: { opacity: 1, x: 0 },
};

const linksContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
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
						<motion.div variants={item}>
							<OtherButton>
								<ContactIcon />
							</OtherButton>
						</motion.div>
						<motion.div variants={item}>
							<OtherButton>
								<ContactIcon />
							</OtherButton>
						</motion.div>
						<motion.div variants={item}>
							<OtherButton>
								<ContactIcon />
							</OtherButton>
						</motion.div>
						<motion.div variants={item}>
							<OtherButton>
								<ContactIcon />
							</OtherButton>
						</motion.div>
					</Links>
				)}
			</AnimatePresence>
		</ContactContainer>
	);
};

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
	grid-template-columns: var(--button-dimensions);
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
	&:hover {
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
		transform: translate3d(0, -3px, 0);
	}
	svg {
		max-width: 100%;
		max-height: 100%;
		path {
			fill: black;
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
	&:hover {
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
		transform: translate3d(0, -3px, 0);
	}
	svg > path {
		fill: white;
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
