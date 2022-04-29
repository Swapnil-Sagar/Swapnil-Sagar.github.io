import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import projectOne from '../../img/project-1.png';
import projectTwo from '../../img/project-2.png';
import projectThree from '../../img/project-3.png';
import galaxyImage from '../../img/background.png';
import './style.css';

export default function App() {
	return (
		<>
			<div
				style={{
					height: '100vh',
					width: '100%',
					// background: 'black',
					color: '#fff',
					overflow: 'hidden',
					backgroundImage: "url('https://ibb.co/HHff25V')",
				}}
			>
				<div
					style={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundImage: galaxyImage,
					}}
				>
					<h1 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>
						My Skills | Example for React Parallax Mouse
					</h1>
					<MouseParallaxContainer
						className='parallax'
						containerStyles={{
							width: '100%',
							display: 'grid',
							gridTemplateColumns: 'auto auto auto auto auto',
						}}
						resetOnLeave
					>
						<MouseParallaxChild
							factorX={0.03}
							factorY={0.1}
							updateStyles={{
								background:
									'url(https://images.unsplash.com/photo-1611502867268-9193c5c45f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
								backgroundPositionY: '50%',
								transform: 'scale(1.2)',
								position: 'absolute',
								filter: 'blur(4px) brightness(50%)',
								backgroundSize: 'auto',
								backgroundRepeat: 'repeat',
								width: '100%',
								height: '100%',
								backfaceVisibility: 'hidden',
							}}
						/>
						<MouseParallaxChild
							factorX={0.05}
							factorY={0.05}
							updateStyles={{
								filter: 'invert(1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 'auto',
								height: '100%',
							}}
						>
							<img height='50%' src={projectOne} alt='' />
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.07}
							factorY={0.05}
							updateStyles={{
								filter: 'invert(1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 'auto',
								height: '100%',
							}}
						>
							<img height='50%' src={projectOne} alt='' />
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.09}
							factorY={0.05}
							updateStyles={{
								filter: 'invert(1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 'auto',
								height: '100%',
							}}
						>
							<img height='50%' src={projectTwo} alt='' />
						</MouseParallaxChild>
						<MouseParallaxChild
							factorX={0.07}
							factorY={0.05}
							updateStyles={{
								filter: 'invert(1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 'auto',
								height: '100%',
							}}
						>
							<img height='50%' src={projectThree} alt='' />
						</MouseParallaxChild>
					</MouseParallaxContainer>
				</div>
			</div>
		</>
	);
}
