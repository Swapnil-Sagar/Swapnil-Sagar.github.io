import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const experienceData = [
	{
		role: 'Software Development Engineer',
		company: 'Marlin',
		location: 'Remote',
		period: '09/2024 - Present',
		highlights: [
			'Designed and built a new Job Deployment Flow on Marlin Hub Portal, providing users with granular control over Dockerfile configuration and job parameters, replacing a CLI-only workflow with an intuitive UI.',
			'Revamped the Kalypso.org dApp UI and landing page with modern animations using GSAP, significantly improving visual polish and first-impression load experience.',
			'Built a GitHub Activity Monitoring Tool that scrapes and logs all commits and pull requests across the organization, improving developer accountability and sprint visibility.',
			'Engineered frontend CI/CD workflows for enclave building and deployment on Marlin Hub Portal, enabling reliable and automated releases of the decentralized product infrastructure.',
		],
	},
	{
		role: 'Front End Developer',
		company: 'Polkassembly.io',
		location: 'Remote',
		period: '12/2023 - 08/2024',
		highlights: [
			'Core contributor to Polkassembly app, a blockchain governance platform serving 100K+ users across Polkadot and Kusama ecosystems.',
			'Developed key features on TownHall application including house creation workflows and on-chain voting integration, directly improving community participation rates.',
			'Built BountyBird from scratch — a bounty hunting application on Lens Protocol, integrating wallet connection and Twitter OAuth using Wagmi and Ethers.js.',
			'Drove significant improvements across platforms: revamped UI/UX for responsive design, built analytics dashboards, authentication flows, and optimized performance via lazy loading and code splitting.',
		],
	},
	{
		role: 'Front End Developer',
		company: 'Wow Labz',
		location: 'Bangalore',
		period: '04/2021 - 11/2023',
		highlights: [
			'Built a large-scale data monitoring dashboard handling multiple dataset formats using React, Redux, Chart.js, and Material UI, optimized rendering through memoization and lazy loading.',
			'Developed an NFT Marketplace from scratch enabling users to Mint, List, and Buy digital assets with integrated Web3 wallet functionality using Ethers.js.',
			'Led a team of 3 frontend developers in an Agile environment — owned story definition, task estimation, sprint planning, and code reviews.',
			'Developed a Web3-enabled social media application ensuring scalability by implementing robust frontend architecture with best practices for debugging and performance tuning.',
		],
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.7,
			ease: 'easeOut',
		},
	}),
};

const Experience = () => {
	return (
		<section className='section experience-section' id='experience'>
			<motion.h2
				className='section-heading'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6 }}
			>
				Experience
			</motion.h2>

			<div className='timeline'>
				<div className='timeline-line' />
				{experienceData.map((exp, index) => (
					<motion.div
						className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
						key={index}
						custom={index}
						variants={cardVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}
					>
						<div className='timeline-dot' />
						<div className='timeline-card'>
							<div className='card-header'>
								<h3 className='card-role'>{exp.role}</h3>
								<div className='card-meta'>
									<span className='card-company'>{exp.company}</span>
									<span className='card-separator'>•</span>
									<span className='card-location'>{exp.location}</span>
								</div>
								<span className='card-period'>{exp.period}</span>
							</div>
							<ul className='card-highlights'>
								{exp.highlights.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Experience;
