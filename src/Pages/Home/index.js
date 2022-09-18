import React, { Fragment } from 'react';
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
import './style.css';
import headerImage from '../../img/header-image2.jpg';
import headerImageMb from '../../img/header-image-mb.png';
import faceIllus from '../../img/face-illus.png';
import skillIllus from '../../img/skills_Illus.png';

import { useIsMobile } from '../../utils/utils';
import Landing from '../Landing';
import SkillMobile from '../../components/skillsMobile';
import SkillsWeb from '../../components/skillsWeb';
import AboutMe from '../../components/aboutMe';
import Projects from '../../components/projects';

const Home = () => {
	const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const isMobile = useIsMobile();

	return (
		<div>
			<ScrollContainer snap={isMobile ? 'none' : 'none'}>
				<ScrollPage page={0}>
					<Animator animation={batch(Fade(), Sticky())}>
						<div className='black-background'>
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
								<div className='name'>
									<h2 className='position'>Front-End Developer</h2>
								</div>
							</Animator>
						</div>
					</Animator>
				</ScrollPage>

				<ScrollPage page={1}>
					<Animator animation={ZoomScrollOut}>
						<div className='section-title about-me'>About Me</div>
					</Animator>
				</ScrollPage>

				<AboutMe />
				<ScrollPage page={4}>
					<Animator animation={ZoomScrollOut}>
						<div className='section-title'>Projects</div>
					</Animator>
				</ScrollPage>

				<Projects />

				<ScrollPage page={16}>
					<Animator animation={ZoomScrollOut}>
						<div className='section-title skills'>Skills</div>
					</Animator>
				</ScrollPage>

				{!isMobile ? <SkillsWeb /> : <SkillMobile />}

				<ScrollPage page={21}>
					<Animator animation={batch(FadeIn(), Sticky())}>
						<span className='footer'>Thank You...</span>
					</Animator>
				</ScrollPage>
				<ScrollPage page={22}>
					<Animator animation={batch(Fade(), Sticky())}>
						<span className='footer'>Thank You...</span>
					</Animator>
				</ScrollPage>
				<ScrollPage page={23}>
					<Animator animation={batch(Fade(), Sticky())}>
						<div className='background-contact-container'>
							<Landing />
						</div>
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div>
	);
};

export default Home;
