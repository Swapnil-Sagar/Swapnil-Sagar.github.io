import React from 'react';
import { motion } from 'framer-motion';
import skillIllus from '../../img/skills_Illus.png';

const allSkills = [
	'React', 'Redux', 'Next.js', 'JavaScript', 'TypeScript', 'ES6',
	'Web3', 'Ethereum', 'Smart Contracts', 'Metamask', 'Ethers.js',
	'GSAP', 'Framer Motion', 'Spline', 'CSS Animations',
	'Responsive Design', 'CSS Grid',
	'Jest', 'Unit Testing', 'Debugging',
	'Node.js', 'Firebase', 'REST APIs',
	'C++', 'DSA', 'OOP',
	'React Native',
	'Git', 'CI/CD', 'Agile',
];

const orbVariants = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: (i) => ({
		opacity: 1,
		scale: 1,
		transition: {
			delay: i * 0.04,
			duration: 0.4,
			type: 'spring',
			stiffness: 200,
			damping: 15,
		},
	}),
};

const floatVariant = (i) => ({
	y: [0, -6, 0],
	transition: {
		duration: 3 + (i % 4),
		repeat: Infinity,
		ease: 'easeInOut',
		delay: i * 0.15,
	},
});

const Skills = () => {
	return (
		<section className='section skills-section' id='skills'>
			<motion.h2
				className='section-heading'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6 }}
			>
				Skills
			</motion.h2>

			<div className='skills-container'>
				<div className='skills-orbit'>
					{allSkills.map((skill, index) => (
						<motion.div
							className='skill-pill'
							key={index}
							custom={index}
							variants={orbVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.1 }}
							animate={floatVariant(index)}
							whileHover={{ scale: 1.2, borderColor: 'rgba(204, 159, 63, 0.6)' }}
						>
							{skill}
						</motion.div>
					))}
				</div>

				{/* <motion.div
					className='skills-illustration-bottom'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					<img src={skillIllus} alt='Skills illustration' />
				</motion.div> */}
			</div>
		</section>
	);
};

export default Skills;
