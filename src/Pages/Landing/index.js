import { useState } from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
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

export default function App() {
	const [hearted, setHearted] = useState(true);
	const isMobile = useIsMobile();
	return (
		<>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					background: `url(${galaxyImage}) no-repeat`,
					backgroundSize: 'cover',
				}}
			>
				<MouseParallaxContainer
					className='parallax'
					containerStyles={{
						width: '100%',
						height: '100%',
						display: 'grid',
						justifyContent: 'center',
						alignContent: 'center',
						gridTemplateColumns: 'auto auto auto auto auto',
					}}
					resetOnLeave
				>
					<MouseParallaxChild factorX={0.01} factorY={0.01} className='saturn_parallax'>
						<img src={saturn} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.03} factorY={0.02} className='earth_parallax'>
						<img src={earth} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.06} factorY={0.06} className='rock_parallax'>
						<img style={{ height: isMobile ? '2.5em ' : '6em' }} src={rock} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.02}
						factorY={0.01}
						updateStyles={{
							position: 'absolute',
							bottom: '-20%',
						}}
					>
						<img style={{ width: '100vw' }} src={mid} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.04}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							right: '-5%',
							bottom: '0',
						}}
					>
						<img style={{ height: '50vh' }} src={fore} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.06} factorY={0.03} className='insta_parallax'>
						<a
							href='https://www.instagram.com/_swapnilsagar_/?hl=en'
							target='_blank'
							rel='noreferrer'
						>
							<SiInstagram
								className='icon'
								id='insta'
								style={{ transform: 'rotate(20deg)' }}
								size={isMobile ? '2.5em ' : '4em'}
							/>
						</a>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.06} factorY={0.03} className='linkedin_parallax'>
						<a href='https://www.linkedin.com/in/swapnilsagar09/' target='_blank' rel='noreferrer'>
							<TiSocialLinkedin
								className='icon'
								id='linkedin'
								style={{ transform: 'rotate(-20deg)' }}
								size={isMobile ? '3.2em ' : '4em'}
							/>
						</a>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.06} factorY={0.03} className='github_parallax'>
						<a href='https://github.com/Swapnil-Sagar' target='_blank' rel='noreferrer'>
							<FaGithub className='icon' id='github' size={isMobile ? '2.5em ' : '4em'} />
						</a>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.06} factorY={0.03} className='twitter_parallax'>
						<a href='https://twitter.com/sagar946' target='_blank' rel='noreferrer'>
							<FaTwitter className='icon' id='twitter' size={isMobile ? '2.5em ' : '4em'} />
						</a>
					</MouseParallaxChild>
				</MouseParallaxContainer>
				<div className='container'>
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
				</div>
			</div>
		</>
	);
}
