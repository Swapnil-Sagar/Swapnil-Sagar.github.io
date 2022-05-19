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
import nftie from '../../img/nftie.png';
import kailash from '../../img/Kailash.png';
import slacky from '../../img/slacky.png';
import social from '../../img/social.png';
// import dflipkart from '../../img/dflipkart.png';
import dflipkart from '../../img/dfrm.png';
import expensely from '../../img/exp2.png';
import { useIsMobile } from '../../utils/utils';

const Projects = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<ScrollPage page={5}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
							<div className='portfolio-title'>
								<h3>1. Kailash</h3>
								<p>
									Kailash is an NFT minting project based on Web3 blockchain and smart contract
									integration
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
			<ScrollPage page={6}></ScrollPage>
			<ScrollPage page={7}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>2. Nftie</h3>
								<p className='text_right'>
									Niftie is an online marketplace for NFTs. Here you can purchase listed items.
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
			<ScrollPage page={8}></ScrollPage>
			<ScrollPage page={9}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
							<div className='portfolio-title'>
								<h3>3. Social.li</h3>
								<p>
									Landing page for a platform where you can launch you own crypto currency and
									establish a community.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
							<div className='project-image'>
								<img style={{ height: isMobile && '25rem' }} src={social} alt='projectFour' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={10}></ScrollPage>
			<ScrollPage page={11}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>4. D-flipkart</h3>
								<p className='text_right'>
									A fullstack ecommerce site like flipkart but with a darker neomorphic theme.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<img style={{ height: isMobile && '25rem' }} src={dflipkart} alt='projectTwo' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={12}></ScrollPage>
			<ScrollPage page={13}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
							<div className='portfolio-title'>
								<h3>5. Slacky</h3>
								<p>A Slack Clone created using ReactJS, materialUI and Firebase Authentication.</p>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
							<div className='project-image'>
								<img style={{ height: isMobile && '25rem' }} src={slacky} alt='projectFour' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
			<ScrollPage page={14}></ScrollPage>
			<ScrollPage page={15}>
				<div className='portfolio-content'>
					<div className='portfolio-card'>
						<Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200), MoveOut(0, -200))}>
							<div className='portfolio-title rtl'>
								<h3>6. Expensely</h3>
								<p className='text_right'>
									Expensely is a smart expense tracker which lets user add income or remove expense
									from the budget using voice enabled input method.
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
		</>
	);
};

export default Projects;
