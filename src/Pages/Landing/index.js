import { useState } from 'react';
import { motion } from 'framer-motion';
import face2 from '../../img/faceIllus2.png';
import earth from '../../img/Planets/earth.png';
import saturn from '../../img/Planets/saturn.png';
import rock from '../../img/Planets/rock.png';
import mid from '../../img/Planets/mid.png';
import fore from '../../img/Planets/foreground.png';
import galaxyImage from '../../img/background2.jpg';
import { SiInstagram } from 'react-icons/si';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';
import { useIsMobile } from '../../utils/utils';
import './style.css';

const socialLinks = [
	{
		Icon: SiInstagram,
		href: 'https://www.instagram.com/_swapnilsagar_/?hl=en',
		id: 'insta',
		style: { transform: 'rotate(20deg)' },
	},
	{
		Icon: TiSocialLinkedin,
		href: 'https://www.linkedin.com/in/swapnilsagar09/',
		id: 'linkedin',
		style: { transform: 'rotate(-20deg)' },
	},
	{
		Icon: FaGithub,
		href: 'https://github.com/Swapnil-Sagar',
		id: 'github',
		style: {},
	},
	{
		Icon: FaTwitter,
		href: 'https://twitter.com/sagar946',
		id: 'twitter',
		style: {},
	},
];

const floatAnimation = {
	y: [0, -15, 0],
	transition: {
		duration: 4,
		repeat: Infinity,
		ease: 'easeInOut',
	},
};

export default function Landing() {
	const [hearted, setHearted] = useState(true);
	const isMobile = useIsMobile();

	return (
		<section
			className='landing-section'
			id='contact'
			style={{
				background: `url(${galaxyImage}) no-repeat center center`,
				backgroundSize: 'cover',
			}}
		>
			{/* Decorative planets */}
			<motion.img
				src={saturn}
				alt=''
				className='planet saturn-planet'
				animate={floatAnimation}
			/>
			<motion.img
				src={earth}
				alt=''
				className='planet earth-planet'
				animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
			/>
			<motion.img
				src={rock}
				alt=''
				className='planet rock-planet'
				style={{ height: isMobile ? '2.5em' : '6em', width: 'auto' }}
				animate={{
					...floatAnimation,
					transition: { ...floatAnimation.transition, delay: 0.5, duration: 3 },
				}}
			/>
			<img src={mid} alt='' className='planet mid-layer' />
			<img src={fore} alt='' className='planet fore-layer' />

			{/* Social icons */}
			<div className='social-icons-float'>
				{socialLinks.map(({ Icon, href, id, style }, index) => (
					<motion.a
						key={id}
						href={href}
						target='_blank'
						rel='noreferrer'
						className={`social-float-icon ${id}-float`}
						whileHover={{ scale: 1.3 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1, duration: 0.5 }}
					>
						<Icon className='icon' id={id} style={style} size={isMobile ? '2.5em' : '3.5em'} />
					</motion.a>
				))}
			</div>

			{/* Contact card */}
			<motion.div
				className='container'
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
			>
				<h1>
					WANNA <br /> CHAT?
				</h1>
				<form action=''>
					<img src={face2} alt='face2' />
					<button>
						<a href='mailto:swapnilsagar09@gmail.com'>MAIL ME</a>
					</button>
				</form>
				<p>
					Made with
					{hearted ? (
						<RiHeartFill
							onClick={() => setHearted(false)}
							className='heart'
							color='red'
							size='1.5em'
						/>
					) : (
						<RiHeartLine
							onClick={() => setHearted(true)}
							className='heart'
							color='red'
							size='1.5em'
						/>
					)}
					by Swapnil Sagar
				</p>
			</motion.div>
		</section>
	);
}
