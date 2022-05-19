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
import faceIllus from '../../img/face-illus.png';

const AboutMe = () => {
	return (
		<>
			<ScrollPage page={2}>
				<Animator animation={batch(Fade(), Sticky())}>
					<div className='details'>
						<p className='bio'>
							I am a dev who loves to build stuffs for the web. <br />
							Who is also passionate to become a fullstacker one day.
						</p>
						<div className='greeting'>Hey There!</div>
						<p className='bio right'>
							I have over a year of professional developing experience and I still thrive to upgrade
							my skills constantly.
						</p>
					</div>
				</Animator>
				<Animator animation={batch(FadeIn(), Sticky())}>
					<div className='background-image-container'>
						<img src={faceIllus} alt='my-pic' />
					</div>
				</Animator>
			</ScrollPage>
			<ScrollPage page={3}>
				<Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
					<div className='details'>
						<p className='bio'>
							I am a dev who loves to build stuffs for the web. <br />
							Who is also passionate to become a fullstacker one day.
						</p>
						<div className='greeting'>Hey There!</div>
						<p className='bio right'>
							I have over a year of professional developing experience and I still thrive to upgrade
							my skills constantly.
						</p>
					</div>
				</Animator>
				<Animator animation={batch(Sticky(), MoveOut(-1650, -0))}>
					<div className='background-image-container'>
						<img src={faceIllus} alt='my-pic' />
					</div>
				</Animator>
			</ScrollPage>
		</>
	);
};

export default AboutMe;
