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
import nftie from '../../img/nftie.png';
import kailash from '../../img/Kailash.png';
import slacky from '../../img/slacky.png';
import social from '../../img/social.png';
// import dflipkart from '../../img/dflipkart.png';
import dflipkart from '../../img/dfrm.png';
import expensely from '../../img/exp2.png';
import { useIsMobile } from '../../utils/utils';
import Landing from '../Landing';
import SkillMobile from '../../components/skillsMobile';
import SkillsWeb from '../../components/skillsWeb';
import SmoothScroll from '../../components/smoothScroll';

const Home = () => {
	const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const isMobile = useIsMobile();

	return (
		<div>
			<ScrollContainer snap={isMobile ? 'none' : 'none'}>
				<ScrollPage page={0}>
					<Animator animation={batch(Fade(), Sticky())}>
						<div style={{ background: '#2C2A35', width: '100vw', height: '100vh' }}>
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
							<div className='greeting'>Hey There!</div>
							<p className='bio right'>
								I have over a year of professional developing experience and I still thrive to
								upgrade my skills constantly.
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
							<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
								<div className='portfolio-title'>
									<h3>1. Kailash</h3>
									<p>
										Expensely is a smart expense tracker which lets user add income or remove
										expense from the budget using voice enabled input method.
									</p>
								</div>
							</Animator>
							<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
								<div className='project-image'>
									<img src={kailash} alt='projectFour' />
								</div>
							</Animator>
						</div>
					</div>
				</ScrollPage>
				<ScrollPage page={5}></ScrollPage>
				<ScrollPage page={6}>
					<div className='portfolio-content'>
						<div className='portfolio-card'>
							<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
								<div className='portfolio-title rtl'>
									<h3>2. Nftie</h3>
									<p className='text_right'>
										Expensely is a smart expense tracker which lets user add income or remove
										expense from the budget using voice enabled input method.
									</p>
								</div>
							</Animator>
							<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
								<div className='project-image2'>
									<img src={nftie} alt='projectTwo' />
								</div>
							</Animator>
						</div>
					</div>
				</ScrollPage>
				<ScrollPage page={7}></ScrollPage>
				<ScrollPage page={8}>
					<div className='portfolio-content'>
						<div className='portfolio-card'>
							<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
								<div className='portfolio-title'>
									<h3>3. Social.li</h3>
									<p>
										Expensely is a smart expense tracker which lets user add income or remove
										expense from the budget using voice enabled input method.
									</p>
								</div>
							</Animator>
							<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
								<div className='project-image'>
									<img src={social} alt='projectFour' />
								</div>
							</Animator>
						</div>
					</div>
				</ScrollPage>
				<ScrollPage page={9}></ScrollPage>
				<ScrollPage page={10}>
					<div className='portfolio-content'>
						<div className='portfolio-card'>
							<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
								<div className='portfolio-title rtl'>
									<h3>4. D-flipkart</h3>
									<p className='text_right'>
										Expensely is a smart expense tracker which lets user add income or remove
										expense from the budget using voice enabled input method.
									</p>
								</div>
							</Animator>
							<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
								<div className='project-image2'>
									<img src={dflipkart} alt='projectTwo' />
								</div>
							</Animator>
						</div>
					</div>
				</ScrollPage>
				<ScrollPage page={11}></ScrollPage>
				<ScrollPage page={12}>
					<div className='portfolio-content'>
						<div className='portfolio-card'>
							<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
								<div className='portfolio-title'>
									<h3>5. Slacky</h3>
									<p>
										Expensely is a smart expense tracker which lets user add income or remove
										expense from the budget using voice enabled input method.
									</p>
								</div>
							</Animator>
							<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
								<div className='project-image'>
									<img src={slacky} alt='projectFour' />
								</div>
							</Animator>
						</div>
					</div>
				</ScrollPage>
				<ScrollPage page={13}></ScrollPage>
				<ScrollPage page={14}>
					<div className='portfolio-content'>
						<div className='portfolio-card'>
							<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
								<div className='portfolio-title rtl'>
									<h3>6. Expensely</h3>
									<p className='text_right'>
										Expensely is a smart expense tracker which lets user add income or remove
										expense from the budget using voice enabled input method.
									</p>
								</div>
							</Animator>
							<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
								<div className='project-image2'>
									<img src={expensely} alt='projectTwo' />
								</div>
							</Animator>
						</div>
					</div>
				</ScrollPage>

				<ScrollPage page={15}>
					<Animator animation={ZoomScrollOut}>
						<div className='section-title skills'>Skills</div>
					</Animator>
				</ScrollPage>

				{!isMobile ? <SkillsWeb /> : <SkillMobile />}

				<ScrollPage page={20}>
					<Animator animation={batch(Fade(), Sticky())}>
						<span className='footer'>Thank You, for your time.</span>
					</Animator>
				</ScrollPage>
				<ScrollPage page={21}>
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
