import React from 'react';
import {
	ScrollContainer,
	ScrollPage,
	Animator,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	ZoomIn,
} from 'react-scroll-motion';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import './style.css';
import headerImage from '../../img/header-image2.jpg';
import headerImageMb from '../../img/header-image-mb.png';
import galaxyImage from '../../img/background.png';
import faceIllus from '../../img/face-illus.png';
import projectOne from '../../img/FSW.jpg';
import projectTwo from '../../img/rm2.png';
import projectThree from '../../img/Stockview.jpg';
import projectFour from '../../img/expenseRm.png';
import { FiMail } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { TiSocialLinkedin } from 'react-icons/ti';
import { useIsMobile } from '../../utils/utils';

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
		<ScrollContainer snap={isMobile ? 'none' : 'mandatory'}>
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
							I am just a dev who loves to build stuffs for the web. <br />
							Also passionate to become a fullstacker one day.
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
								<h3>Expensely</h3>
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
			<ScrollPage page={5}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(500, 0), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<img src={projectTwo} alt='projectTwo' />
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>Expensely</h3>
								<p>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
								</p>
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={6}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title'>
								<h3>Expensely</h3>
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
			<ScrollPage page={7}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(500, 0), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<img src={projectTwo} alt='projectTwo' />
							</div>
						</Animator>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(-200, 0), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>Expensely</h3>
								<p>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
								</p>
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>

			<ScrollPage page={8}>
				<Animator animation={ZoomScrollOut}>
					<div className='section-title contact'>Contact Me</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={9}>
				<div className='contact-me'>
					<span>
						<Animator animation={MoveIn(-1000, 0)}>
							<div
								className='contact-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<SiInstagram color='white' className='contact-list-icon' />
								<p>_swapnilsagar_</p>
							</div>
						</Animator>
						<Animator animation={MoveOut(1000, 0)}>
							<div
								className='contact-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<FiMail color='white' className='contact-list-icon' />
								<p>_swapnilsagar@fgmail</p>
							</div>
						</Animator>
						<Animator animation={MoveOut(-1000, 0)}>
							<div
								className='contact-wrapper'
								onClick={() => handleContactClick('https://google.com')}
							>
								<FiMail color='white' className='contact-list-icon' />
								<p>_swapnilsagar@fgmail</p>
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
			<ScrollPage page={10}>
				<Animator animation={batch(Fade(), Sticky())}>
					<span className='footer'>Done</span>
					<span className='footer'>Thank You, for your time.</span>
				</Animator>
			</ScrollPage>
		</ScrollContainer>
	);
};

export default Home;
