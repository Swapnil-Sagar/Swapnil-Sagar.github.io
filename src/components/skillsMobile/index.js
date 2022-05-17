import React from 'react';
import './style.css';
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

import skillIllus from '../../img/skills_Illus.png';
import { useIsMobile } from '../../utils/utils';

const SkillsMobile = () => {
	const ZoomScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());
	const isMobile = useIsMobile();

	return (
		<>
			<ScrollPage page={16}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Fade(), Sticky())}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
						<Animator animation={FadeUp}>
							<div style={{ bottom: '250px' }} className='skills-wrapper' id='react'>
								<h2>React</h2>
								<div style={{ left: '30vw', bottom: '2rem' }} className='subskill 1'>
									<p className='sub1' style={{ fontSize: '38px' }}>
										Es6
									</p>
								</div>
								<div style={{ right: '20vw', bottom: '5rem' }} className='subskill 2'>
									<p className='sub2' style={{ fontSize: '18px' }}>
										Styled Components
									</p>
								</div>
								<div style={{ right: '30vw', top: '2rem' }} className='subskill 1'>
									<p className='sub3' style={{ fontSize: '24px' }}>
										Redux
									</p>
								</div>
							</div>
						</Animator>
						<Animator animation={FadeUp}>
							<div style={{ bottom: '125px' }} className='skills-wrapper' id='web3'>
								<h2>Web3</h2>
								<div style={{ right: '35vw', bottom: '3rem' }} className='subskill'>
									<p style={{ fontSize: '38px' }}>ETH</p>
								</div>
								<div style={{ left: '25vw', bottom: '2rem' }} className='subskill'>
									<p style={{ fontSize: '18px' }}>Smart Contract</p>
								</div>
								<div style={{ right: '10vw', top: '2rem' }} className='subskill'>
									<p style={{ fontSize: '24px' }}>Metamask</p>
								</div>
							</div>
						</Animator>
						<Animator animation={FadeUp}>
							<div style={{ bottom: '0' }} className='skills-wrapper' id='nextjs'>
								<h2>NextJs</h2>
								<div
									style={{ left: '20vw', bottom: '2rem', fontSize: '35px' }}
									className='subskill'
								>
									<p style={{ fontSize: '24px' }}>Dynamic Routing</p>
								</div>
								<div style={{ right: '25vw', top: '2rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '48px' }}>SSR</p>
								</div>
								<div style={{ left: '0', top: '6rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '28px' }}>Framework</p>
								</div>
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
			<ScrollPage page={17}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky())}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
						<Animator animation={FadeUp}>
							<div style={{ bottom: '250px' }} className='skills-wrapper' id='interactive'>
								<h2>Interactive UI</h2>
								<div style={{ right: '20vw', bottom: '4rem' }} className='subskill'>
									<p style={{ fontSize: '54px' }}>Spline</p>
								</div>
								<div style={{ left: '25vw', top: '5rem', fontSize: '20px' }} className='subskill'>
									<p style={{ fontSize: '24px' }}>Animation</p>
								</div>
							</div>
						</Animator>
						<Animator animation={FadeUp}>
							<div style={{ bottom: '75px' }} className='skills-wrapper' id='responsive'>
								<h2>
									Responsive <br /> Design
								</h2>
								<div style={{ right: '35vw', bottom: '5rem' }} className='subskill'>
									<p style={{ fontSize: '18px' }}>Media Queries</p>
								</div>
								<div style={{ right: '45vw', top: '4rem' }} className='subskill'>
									<p style={{ fontSize: '38px' }}>Flex</p>
								</div>
								<div style={{ left: '35vw', top: '5rem' }} className='subskill'>
									<p style={{ fontSize: '54px' }}>Grid</p>
								</div>
							</div>
						</Animator>
						<Animator animation={FadeUp}>
							<div style={{ top: '100px' }} className='skills-wrapper' id='native'>
								<h2>React Native</h2>
								<div style={{ left: '10vw', top: '4rem' }} className='subskill'>
									<p style={{ fontSize: '38px' }}>Android</p>
								</div>
								<div style={{ right: '45vw', bottom: '4rem' }} className='subskill'>
									<p style={{ fontSize: '34px' }}>IOS</p>
								</div>
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
			<ScrollPage page={18}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky())}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>

						<Animator animation={FadeUp}>
							<div style={{ bottom: '200px' }} className='skills-wrapper' id='testing'>
								<h2>
									Testing <br /> Debugging
								</h2>
								<div style={{ right: '25vw', bottom: '5rem' }} className='subskill'>
									<p style={{ fontSize: '34px' }}>Unit Testing</p>
								</div>
								<div style={{ left: '35vw', top: '4rem' }} className='subskill'>
									<p style={{ fontSize: '54px' }}>Jest</p>
								</div>
							</div>
						</Animator>

						<Animator animation={FadeUp}>
							<div style={{ top: '0' }} className='skills-wrapper' id='functional'>
								<h2>Functional Programming</h2>
								<div style={{ left: '45vw', bottom: '4rem' }} className='subskill'>
									<p style={{ fontSize: '44px' }}>C++</p>
								</div>
								<div style={{ right: '50vw', bottom: '5rem' }} className='subskill'>
									<p style={{ fontSize: '54px' }}>DSA</p>
								</div>
								<div style={{ right: '5rem', top: '5rem' }} className='subskill'>
									<p style={{ fontSize: '34px' }}>OOPS</p>
								</div>
								<div style={{ left: '9rem', top: '8rem' }} className='subskill'>
									<p style={{ fontSize: '64px' }}>JS</p>
								</div>
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
			<ScrollPage page={19}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky(), MoveOut(0, 200))}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
					</span>
				</div>
			</ScrollPage>
		</>
	);
};

export default SkillsMobile;
