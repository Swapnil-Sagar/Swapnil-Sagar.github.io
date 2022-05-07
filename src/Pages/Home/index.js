import React from 'react';
import {
	ScrollContainer,
	ScrollPage,
	Animator,
	batch,
	Fade,
	FadeIn,
	FadeOut,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	StickyOut,
	ZoomIn,
	ZoomOut,
} from 'react-scroll-motion';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import './style.css';
import headerImage from '../../img/header-image2.jpg';
import headerImageMb from '../../img/header-image-mb.png';
import galaxyImage from '../../img/background.png';
import faceIllus from '../../img/face-illus.png';
import skillIllus from '../../img/skills_Illus.png';
import projectOne from '../../img/FSW.jpg';
import projectTwo from '../../img/rm2.png';
import projectThree from '../../img/Stockview.jpg';
import projectFour from '../../img/expenseRm.png';
import { FiMail } from 'react-icons/fi';
import { useIsMobile } from '../../utils/utils';
import Landing from '../Landing';

const Home = () => {
	const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const isMobile = useIsMobile();

	const work = [
		{
			name: 'Project 1',
			link: '#',
			imageSrc: projectFour,
		},
		{
			name: 'Project 2',
			link: '#',
			imageSrc: projectFour,
		},
		{
			name: 'Project 3',
			link: '#',
			imageSrc: projectFour,
		},
		{
			name: 'Project 4',
			link: '#',
			imageSrc: projectFour,
		},
	];

	const handleContactClick = (url) => {
		const win = window.open(url, '_blank');
		win.focus();
	};
	return (
		<ScrollContainer snap={isMobile ? 'none' : 'proximity'}>
			<ScrollPage page={0}>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
					<div className='image-container'>
						<img src={isMobile ? headerImageMb : headerImage} alt='headerImg' />
					</div>
				</Animator>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
					<div className='name'>
						<h2 className='first'>Swapnil</h2>
					</div>
				</Animator>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
					<div className='name'>
						<h2 className='last'>Sagar</h2>
					</div>
				</Animator>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
					<div className='position'>
						<h2 className='last'>Front-End Developer</h2>
					</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={1}>
				<Animator animation={ZoomScrollOut}>
					<div className='section-title about-me'>About Me</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={2}>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
					<div className='details'>
						<p className='bio'>
							I am a dev who loves to build stuffs for the web. <br />
							Who is also passionate to become a fullstacker one day.
						</p>
						<div className='greeting'>Hey There !</div>
						<p className='bio right'>
							I have over a year of professional developing experience and I still thrive to upgrade
							my skills constantly.
						</p>
					</div>
				</Animator>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, -100))}>
					<div className='background-image-container'>
						<img src={faceIllus} alt='my-pic' />
					</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={3}>
				<Animator animation={ZoomScrollOut}>
					<div className='section-title'>Projects</div>
				</Animator>
			</ScrollPage>

			<ScrollPage page={4}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title'>
								<h3>1. Expensely</h3>
								<p>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-500, 0), MoveOut(0, -1000))}>
							<div className='project-image'>
								<img src={projectFour} alt='projectFour' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={5}></ScrollPage>
			<ScrollPage page={6}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>2. Expensely</h3>
								<p>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(500, 0), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<img src={projectTwo} alt='projectTwo' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={7}></ScrollPage>
			<ScrollPage page={8}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title'>
								<h3>3. Expensely</h3>
								<p>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-500, 0), MoveOut(0, -1000))}>
							<div className='project-image'>
								<img src={projectFour} alt='projectFour' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={9}></ScrollPage>
			<ScrollPage page={10}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(500, 0), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<img src={projectTwo} alt='projectTwo' />
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>4. Expensely</h3>
								<p>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
								</p>
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>

			<ScrollPage page={11}>
				<Animator animation={ZoomScrollOut}>
					<div className='section-title skills'>Skills</div>
				</Animator>
			</ScrollPage>

			<ScrollPage page={12}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Fade(), Sticky())}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 0))}>
							<div
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>Interactive UI</p>
								<div
									style={{ right: '7rem', bottom: '3rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '54px' }}>Spline</p>
								</div>
								<div style={{ left: '9rem', top: '4rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '24px' }}>Animation</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(1000, -1000))}>
							<div
								style={{ bottom: '200px' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>NextJs</p>
								<div
									style={{ left: '8rem', bottom: '5rem', fontSize: '35px' }}
									className='subskill'
								>
									<p style={{ fontSize: '24px' }}>Dynamic Routing</p>
								</div>
								<div
									style={{ right: '8rem', bottom: '3rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '48px' }}>SSR</p>
								</div>
								<div style={{ right: '8rem', top: '3rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '28px' }}>Framework</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(1000, 1000))}>
							<div
								style={{ top: '200px' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>
									Testing <br /> Debugging
								</p>
								<div
									style={{ right: '5rem', bottom: '7rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '34px' }}>Unit Testing</p>
								</div>
								<div style={{ left: '9rem', top: '6rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '54px' }}>Jest</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 1000))}>
							<div
								style={{ top: '260px', left: '0' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>
									Responsive <br /> Design
								</p>
								<div
									style={{ right: '10rem', bottom: '7rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '24px' }}>Media Queries</p>
								</div>
								<div style={{ right: '20rem', top: '3rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '38px' }}>Flex</p>
								</div>
								<div
									style={{ left: '17rem', bottom: '1rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '54px' }}>Grid</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, -1000))}>
							<div
								style={{ bottom: '270px', left: '0' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>Web3</p>
								<div
									style={{ right: '12rem', bottom: '3rem', fontSize: '35px' }}
									className='subskill'
								>
									<p style={{ fontSize: '65px' }}>ETH</p>
								</div>
								<div
									style={{ left: '6rem', bottom: '2rem', fontSize: '35px' }}
									className='subskill'
								>
									<p style={{ fontSize: '35px' }}>Smart Contract</p>
								</div>
								<div style={{ right: '4rem', top: '3rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '28px' }}>Metamask</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-1000, -1000))}>
							<div
								style={{ bottom: '200px', left: '-500px' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>React</p>
								<div
									style={{ left: '6rem', bottom: '2rem', fontSize: '35px' }}
									className='subskill'
								>
									<p style={{ fontSize: '48px' }}>Es6</p>
								</div>
								<div
									style={{ right: '8rem', bottom: '4rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '24px' }}>Styled Components</p>
								</div>
								<div style={{ right: '4rem', top: '3rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '28px' }}>Redux</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-1000, 0))}>
							<div
								style={{ bottom: '0', left: '-500px' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>Functional Programming</p>
								<div
									style={{ left: '6rem', bottom: '6rem', fontSize: '35px' }}
									className='subskill'
								>
									<p style={{ fontSize: '44px' }}>C++</p>
								</div>
								<div
									style={{ right: '10rem', bottom: '7rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '54px' }}>DSA</p>
								</div>
								<div style={{ right: '5rem', top: '5rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '64px' }}>OOPS</p>
								</div>
								<div style={{ left: '9rem', top: '8rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '28px' }}>JS</p>
								</div>
							</div>
						</Animator>

						<Animator animation={batch(Fade(), Sticky(), MoveIn(-1000, 1000))}>
							<div
								style={{ top: '200px', left: '-500px' }}
								className='skills-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<p>React Native</p>
								<div style={{ right: '8rem', top: '4rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '44px' }}>Android</p>
								</div>
								<div
									style={{ left: '9rem', bottom: '1rem', fontSize: '20px' }}
									className='subskill'
								>
									<p style={{ fontSize: '64px' }}>IOS</p>
								</div>
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
			<ScrollPage page={13}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky(), MoveOut(-2000, 0))}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
			<ScrollPage page={14}>
				<Animator animation={batch(Fade(), Sticky())}>
					<span className='footer'>Done</span>
					<span className='footer'>Thank You, for your time.</span>
				</Animator>
			</ScrollPage>
			<ScrollPage page={15}>
				<Animator animation={batch(Fade(), Sticky())}>
					<div className='background-contact-container'>
						<Landing />
					</div>
				</Animator>
			</ScrollPage>
		</ScrollContainer>
	);
};

export default Home;
