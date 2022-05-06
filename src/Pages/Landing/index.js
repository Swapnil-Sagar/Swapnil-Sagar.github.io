import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import projectOne from '../../img/project-1.png';
import face2 from '../../img/faceIllus2.png';
import earth from '../../img/Planets/earth.png';
import saturn from '../../img/Planets/saturn.png';
import rock from '../../img/Planets/rock.png';
import mid from '../../img/Planets/mid.png';
import fore from '../../img/Planets/foreground.png';
import galaxyImage from '../../img/background.png';
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
					{/* <MouseParallaxChild
						factorX={0.02}
						factorY={0.02}
						updateStyles={{
							zIndex: 1,
						}}
					>
						<div className='container'>
							<form action=''>
								<img src='https://bit.ly/2tlJLoz' />
								<br />
								<input type='text' value='@AmJustSam' />
								<br />
								<input type='password' />
								<br />
								<input type='submit' value='Submit' />
							</form>
						</div>
					</MouseParallaxChild> */}
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
				</MouseParallaxContainer>
				<div className='container'>
					<h1>Contact Me</h1>
					<form action=''>
						<img src={face2} alt='face2' />
						<br />
						<input type='text' value='@AmJustSam' />
						<br />
						<input type='password' />
						<br />
						<input type='submit' value='Submit' />
					</form>
				</div>
			</div>
		</>
	);
}
