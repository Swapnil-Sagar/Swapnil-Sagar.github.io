import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import projectOne from '../../img/project-1.png';
import face2 from '../../img/faceIllus2.png';
import earth from '../../img/Planets/earth.png';
import saturn from '../../img/Planets/saturn.png';
import rock from '../../img/Planets/rock.png';
import mid from '../../img/Planets/mid.png';
import fore from '../../img/Planets/foreground.png';
import galaxyImage from '../../img/background.png';
import { SiInstagram } from 'react-icons/si';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { CgHeart } from 'react-icons/cg';
import './style.css';

export default function App() {
	return (
		<>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
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
						background: `url(${galaxyImage}) no-repeat`,
						backgroundSize: 'cover',
					}}
					resetOnLeave
				>
					<MouseParallaxChild
						factorX={0.01}
						factorY={0.01}
						updateStyles={{
							position: 'absolute',
							right: '70%',
							top: '-20%',
						}}
					>
						<img style={{ height: '30rem' }} src={saturn} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.03}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							left: '80%',
							top: '30%',
						}}
					>
						<img style={{ height: '16rem' }} src={earth} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.06}
						factorY={0.06}
						updateStyles={{
							position: 'absolute',
							left: '60%',
							top: '80%',
							zIndex: 1,
						}}
					>
						<img style={{ height: '6rem' }} src={rock} alt='' />
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
						factorX={0.03}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							right: '-5%',
							bottom: '0',
						}}
					>
						<img style={{ height: '50vh' }} src={fore} alt='' />
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.06}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							top: '10%',
							right: '10%',
						}}
					>
						<a
							href='https://www.instagram.com/_swapnilsagar_/?hl=en'
							target='_blank'
							rel='noreferrer'
						>
							<SiInstagram
								className='icon'
								id='insta'
								style={{ transform: 'rotate(20deg)' }}
								size='4em'
							/>
						</a>
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.06}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							top: '40%',
							left: '25%',
						}}
					>
						<a href='https://www.linkedin.com/in/swapnilsagar09/' target='_blank' rel='noreferrer'>
							<TiSocialLinkedin
								className='icon'
								id='linkedin'
								style={{ transform: 'rotate(-20deg)' }}
								size='4em'
							/>
						</a>
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.06}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							top: '85%',
							right: '20%',
						}}
					>
						<a href='https://github.com/Swapnil-Sagar' target='_blank' rel='noreferrer'>
							<FaGithub className='icon' id='github' size='4em' />
						</a>
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.06}
						factorY={0.03}
						updateStyles={{
							position: 'absolute',
							top: '80%',
							left: '35%',
							zIndex: 1,
						}}
					>
						<a href='https://twitter.com/sagar946' target='_blank' rel='noreferrer'>
							<FaTwitter className='icon' id='twitter' size='4em' />
						</a>
					</MouseParallaxChild>
				</MouseParallaxContainer>
				<div className='container'>
					<h1>Contact Me</h1>
					<form action=''>
						<img src={face2} alt='face2' />

						<a href='mailto:swapnilsagar09@gmail.com'>
							<button>SEND MAIL</button>
						</a>
					</form>
					<p>
						Made with <CgHeart style={{ margin: '0 8px' }} color='red' size='1.5em' /> by Swapnil
						Sagar
					</p>
				</div>
			</div>
		</>
	);
}
