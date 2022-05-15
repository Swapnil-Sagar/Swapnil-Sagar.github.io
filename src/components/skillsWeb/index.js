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

import skillIllus from '../../img/skills_Illus.png';
import { useIsMobile } from '../../utils/utils';

const SkillsWeb = () => {
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
						<Animator animation={batch(Sticky(), MoveIn(1000, 0))}>
							<div className='skills-wrapper' id='interactive'>
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
						<Animator animation={batch(Sticky(), MoveIn(1000, -1000))}>
							<div style={{ bottom: '200px' }} className='skills-wrapper' id='nextjs'>
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
						<Animator animation={batch(Sticky(), MoveIn(1000, 1000))}>
							<div style={{ top: '200px' }} className='skills-wrapper' id='testing'>
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
						<Animator animation={batch(Sticky(), MoveIn(0, 1000))}>
							<div style={{ top: '260px', left: '0' }} className='skills-wrapper' id='responsive'>
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
						<Animator animation={batch(Sticky(), MoveIn(0, -1000))}>
							<div style={{ bottom: '270px', left: '0' }} className='skills-wrapper' id='web3'>
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
						<Animator animation={batch(Sticky(), MoveIn(-1000, -1000))}>
							<div
								style={{ bottom: '200px', left: '-500px' }}
								className='skills-wrapper'
								id='react'
							>
								<p>React</p>
								<div
									style={{ left: '6rem', bottom: '2rem', fontSize: '35px' }}
									className='subskill 1'
								>
									<p className='sub1' style={{ fontSize: '48px' }}>
										Es6
									</p>
								</div>
								<div
									style={{ right: '8rem', bottom: '4rem', fontSize: '20px' }}
									className='subskill 2'
								>
									<p className='sub2' style={{ fontSize: '24px' }}>
										Styled Components
									</p>
								</div>
								<div
									style={{ right: '4rem', top: '3rem', fontSize: '20px' }}
									className='subskill 1'
								>
									<p className='sub3' style={{ fontSize: '28px' }}>
										Redux
									</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(-1000, 0))}>
							<div
								style={{ bottom: '0', left: '-500px' }}
								className='skills-wrapper'
								id='functional'
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

						<Animator animation={batch(Sticky(), MoveIn(-1000, 1000))}>
							<div style={{ top: '200px', left: '-500px' }} className='skills-wrapper' id='native'>
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
			<ScrollPage page={17}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky())}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky())}>
							<div className='skills-wrapper' id='interactive'>
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
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div style={{ bottom: '200px' }} className='skills-wrapper' id='nextjs'>
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
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div style={{ top: '200px' }} className='skills-wrapper' id='testing'>
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
						<Animator animation={batch(Sticky())}>
							<div style={{ top: '260px', left: '0' }} className='skills-wrapper' id='responsive'>
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
						<Animator animation={batch(Sticky())}>
							<div style={{ bottom: '270px', left: '0' }} className='skills-wrapper' id='web3'>
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
						<Animator animation={batch(Sticky())}>
							<div
								style={{ bottom: '200px', left: '-500px' }}
								className='skills-wrapper'
								id='react'
							>
								<p>React</p>
								<div
									style={{ left: '6rem', bottom: '2rem', fontSize: '35px' }}
									className='subskill 1'
								>
									<p className='sub1' style={{ fontSize: '48px' }}>
										Es6
									</p>
								</div>
								<div
									style={{ right: '8rem', bottom: '4rem', fontSize: '20px' }}
									className='subskill 2'
								>
									<p className='sub2' style={{ fontSize: '24px' }}>
										Styled Components
									</p>
								</div>
								<div
									style={{ right: '4rem', top: '3rem', fontSize: '20px' }}
									className='subskill 1'
								>
									<p className='sub3' style={{ fontSize: '28px' }}>
										Redux
									</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div
								style={{ bottom: '0', left: '-500px' }}
								className='skills-wrapper'
								id='functional'
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

						<Animator animation={batch(Sticky())}>
							<div style={{ top: '200px', left: '-500px' }} className='skills-wrapper' id='native'>
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
			<ScrollPage page={18}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky())}>
							<div className='background-skills-container'>
								<img src={skillIllus} alt='skillIllus' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div className='skills-wrapper' id='interactive'>
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

						<Animator animation={batch(Sticky())}>
							<div style={{ top: '260px', left: '0' }} className='skills-wrapper' id='responsive'>
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
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div style={{ bottom: '270px', left: '0' }} className='skills-wrapper' id='web3'>
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
						<Animator animation={batch(Sticky())}>
							<div
								style={{ bottom: '200px', left: '-500px' }}
								className='skills-wrapper'
								id='react'
							>
								<p>React</p>
								<div
									style={{ left: '6rem', bottom: '2rem', fontSize: '35px' }}
									className='subskill 1'
								>
									<p className='sub1' style={{ fontSize: '48px' }}>
										Es6
									</p>
								</div>
								<div
									style={{ right: '8rem', bottom: '4rem', fontSize: '20px' }}
									className='subskill 2'
								>
									<p className='sub2' style={{ fontSize: '24px' }}>
										Styled Components
									</p>
								</div>
								<div
									style={{ right: '4rem', top: '3rem', fontSize: '20px' }}
									className='subskill 1'
								>
									<p className='sub3' style={{ fontSize: '28px' }}>
										Redux
									</p>
								</div>
							</div>
						</Animator>

						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div style={{ top: '200px', left: '-500px' }} className='skills-wrapper' id='native'>
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
			<ScrollPage page={19}>
				<div className='skills-me'>
					<span>
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div
								style={{ bottom: '200px', left: '-500px' }}
								className='skills-wrapper'
								id='react'
							>
								<p>React</p>
								<div
									style={{ left: '6rem', bottom: '2rem', fontSize: '35px' }}
									className='subskill 1'
								>
									<p className='sub1' style={{ fontSize: '48px' }}>
										Es6
									</p>
								</div>
								<div
									style={{ right: '8rem', bottom: '4rem', fontSize: '20px' }}
									className='subskill 2'
								>
									<p className='sub2' style={{ fontSize: '24px' }}>
										Styled Components
									</p>
								</div>
								<div
									style={{ right: '4rem', top: '3rem', fontSize: '20px' }}
									className='subskill 1'
								>
									<p className='sub3' style={{ fontSize: '28px' }}>
										Redux
									</p>
								</div>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
							<div style={{ top: '260px', left: '0' }} className='skills-wrapper' id='responsive'>
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
						<Animator animation={batch(Sticky(), MoveOut(-2000, 0))}>
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

export default SkillsWeb;
