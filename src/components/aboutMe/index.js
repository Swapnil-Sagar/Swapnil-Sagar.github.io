import React from 'react';
import { motion } from 'framer-motion';
import faceIllus from '../../img/face-illus.png';

const getYearsOfExperience = () => {
	const start = new Date(2021, 3); // April 2021
	const now = new Date();
	let years = now.getFullYear() - start.getFullYear();
	if (now.getMonth() < start.getMonth()) years--;
	return years;
};

const fadeInLeft = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.85 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

const AboutMe = () => {
	const years = getYearsOfExperience();

	return (
		<section className='section about-section' id='about'>
			<motion.h2
				className='section-heading'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6 }}
			>
				About Me
			</motion.h2>

			<div className='about-layout'>
				{/* "Hey There!" background text */}
				<motion.div
					className='about-greeting-bg'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, delay: 0.3 }}
				>
					<span>Hey There!</span>
				</motion.div>

				{/* Left paragraph */}
				<motion.div
					className='about-col left about-text'
					variants={fadeInLeft}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
				>
					<p className='bio'>
						I am a <span>Frontend Developer</span> who loves to build stuffs for the
						web. <br />
						Who is also passionate about <span>Web3</span> space and blockchain.
					</p>
				</motion.div>

				{/* Center image */}
				<motion.div
					className='about-center'
					variants={scaleIn}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
				>
					<img src={faceIllus} alt='Swapnil Sagar illustration' />
				</motion.div>

				{/* Right paragraph */}
				<motion.div
					className='about-col right about-text'
					variants={fadeInRight}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
				>
					<p className='bio'>
						I have over <span>{years} years</span> of professional developing experience
						and I still thrive to <span>upgrade</span> my skills constantly.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutMe;
