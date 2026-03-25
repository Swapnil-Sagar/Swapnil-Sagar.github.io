import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import headerImage from '../../img/header-image2.jpg';
import headerImageMb from '../../img/header-image-mb.png';

import { useIsMobile } from '../../utils/utils';
import Landing from '../Landing';
import Skills from '../../components/skillsWeb';
import AboutMe from '../../components/aboutMe';
import Projects from '../../components/projects';
import Experience from '../../components/experience';

const Home = () => {
	const isMobile = useIsMobile();


	return (
		<div className='home'>
			{/* ===== Hero Section ===== */}
			<section className='hero-section'>
				<motion.div
					className='hero-bg'
					initial={{ scale: 1.1, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
				>
					<img
						src={isMobile ? headerImageMb : headerImage}
						alt='headerImg'
						className='hero-image'
					/>
				</motion.div>

				<div className='hero-gradient' />

				<div className='hero-content'>
					<motion.div
						className='name'
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
					>
						<h2 className='first'>Swapnil</h2>
					</motion.div>
					<motion.div
						className='name'
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
					>
						<h2 className='last'>Sagar</h2>
					</motion.div>
					<motion.div
						className='position'
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
					>
						<h2>Frontend Developer</h2>
					</motion.div>
				</div>

				<motion.div
					className='scroll-indicator'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.6 }}
				>
					<div className='scroll-line' />
				</motion.div>
			</section>

			{/* ===== About Me ===== */}
			<AboutMe />

			{/* ===== Experience ===== */}
			<Experience />

			{/* ===== Skills ===== */}
			<Skills />

			{/* ===== Projects ===== */}
			<Projects />

			

			{/* ===== Thank You ===== */}
			<section className='thankyou-section'>
				<motion.p
					className='footer-text'
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					Thank You...
				</motion.p>
			</section>

			{/* ===== Contact ===== */}
			<Landing />
		</div>
	);
};

export default Home;
