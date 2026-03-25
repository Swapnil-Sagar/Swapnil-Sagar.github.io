import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import slacky from '../../img/slacky.png';
import social from '../../img/social.png';
import dflipkart from '../../img/dfrm.png';
import expensely from '../../img/exp2.png';
import battlefleet from '../../img/battlefleet.png';

const projectsData = [
	{
		title: 'Battle Fleet',
		description:
			'A neon-styled battleship game using Node.js and Socket.io with real-time matchmaking, live tactical grids, in-game chat, and dynamic turn-based gameplay. Features a modern glassmorphism UI with animations.',
		image: battlefleet,
		tech: ['React', 'Node.js', 'Socket.io'],
		link: 'https://battlefleet.onrender.com/',
	},
	// {
	// 	title: 'Social.li',
	// 	description:
	// 		'Landing page for a platform to launch your own cryptocurrency and establish a community.',
	// 	image: social,
	// 	tech: ['React', 'Web3'],
	// 	link: 'https://www.social.li/',
	// },
	{
		title: 'D-Flipkart',
		description:
			'A fullstack ecommerce site like Flipkart but with a darker neomorphic theme.',
		image: dflipkart,
		tech: ['React', 'Node.js', 'Redux'],
		link: 'https://dflipkart.herokuapp.com/',
	},
	{
		title: 'Slacky',
		description: 'A Slack-like application for connecting people and building community.',
		image: slacky,
		tech: ['React', 'Redux', 'Firebase'],
		link: 'https://slackybysagar.web.app/',
	},
	{
		title: 'Expensely',
		description:
			'A smart expense tracker to log transactions using voice-enabled input method.',
		image: expensely,
		tech: ['React', 'Speechly'],
		link: 'https://expensely.netlify.app/',
	},
];

const projectVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.7,
			ease: 'easeOut',
		},
	}),
};

const Projects = () => {
	return (
		<section className='section projects-section' id='projects'>
			<motion.h2
				className='section-heading'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6 }}
			>
				Projects
			</motion.h2>

			<div className='projects-showcase'>
				{projectsData.map((project, index) => (
					<motion.div
						className={`project-item ${index % 2 !== 0 ? 'reverse' : ''}`}
						key={index}
						custom={index}
						variants={projectVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.15 }}
					>
						<motion.div
							className='project-img-container'
							whileHover={{ scale: 1.04 }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
						>
							{project.link ? (
								<a href={project.link} target='_blank' rel='noreferrer'>
									<img src={project.image} alt={project.title} />
								</a>
							) : (
								<img src={project.image} alt={project.title} />
							)}
							<div className='project-img-overlay' />
						</motion.div>

						<div className='project-details'>
							<h3 className='project-title'>{project.title}</h3>
							<p className='project-desc'>{project.description}</p>
							<div className='project-tech'>
								{project.tech.map((t, i) => (
									<span key={i} className='tech-tag'>
										{t}
									</span>
								))}
							</div>
							{project.link && (
								<a
									href={project.link}
									target='_blank'
									rel='noreferrer'
									className='project-link'
								>
									View Project →
								</a>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Projects;
