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
import headerImage from '../../img/header-image.jpg';
import galaxyImage from '../../img/background.png';
import faceIllus from '../../img/face-illus.png';
import projectOne from '../../img/project-1.png';
import projectTwo from '../../img/project-2.png';
import projectThree from '../../img/project-3.png';
import { FiMail } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { TiSocialLinkedin } from 'react-icons/ti';

const Home = () => {
	const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

	const work = [
		{
			name: 'Project 1',
			link: '#',
			imageSrc: projectOne,
		},
		{
			name: 'Project 2',
			link: '#',
			imageSrc: projectTwo,
		},
		{
			name: 'Project 3',
			link: '#',
			imageSrc: projectThree,
		},
	];

	const handleContactClick = (url) => {
		const win = window.open(url, '_blank');
		win.focus();
	};
	return (
		<ScrollContainer>
			<ScrollPage page={0}>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
					<div className='image-container'>
						<img src={headerImage} alt='headerImg' />

						<div className='black-background'></div>
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
				<Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, -100))}>
					<div className='background-image-container'>
						<img src={faceIllus} alt='my-pic' />
						<div className='black-background'></div>
					</div>
				</Animator>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
					<div className='details'>
						<div className='greeting'>Hello</div>
						<p className='bio'>
							Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
							dolor sit amet Lorem ipsum dolor sit amet
						</p>
						<p className='bio'>
							Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
							ipsum dolor sit amet
						</p>
						<div className='bio'>
							Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
						</div>
					</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={3}>
				<Animator animation={ZoomScrollOut}>
					<div className='section-title'>Portfolio</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={4}>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
					<div className='portfolio-content'>
						{work?.map((work, index) => {
							return (
								<a href={work?.link} target='_blank' key={work?.name} rel='noreferrer'>
									<div className='portfolio-card'>
										<div className='project-image'>
											<img src={work?.imageSrc} alt={work?.name} />
										</div>

										<div className='portfolio-title'>
											<h3>{work?.name}</h3>
										</div>
										<div className='count'>{index}</div>
									</div>
								</a>
							);
						})}
					</div>
				</Animator>
			</ScrollPage>

			<ScrollPage page={5}>
				<Animator animation={ZoomScrollOut}>
					<div className='section-title contact'>Contact Me</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={6}>
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
			<ScrollPage page={7}>
				<Animator animation={batch(Fade(), Sticky())}>
					<span className='footer'>Done</span>
					<span className='footer'>Thank You, for your time.</span>
				</Animator>
			</ScrollPage>
		</ScrollContainer>
	);
};

export default Home;
