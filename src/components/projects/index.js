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
import './style.css';
import nftie from '../../img/nftie.png';
import kailash from '../../img/Kailash.png';
import slacky from '../../img/slacky.png';
import social from '../../img/social.png';
import reactIcon from '../../img/reactIcon.png';
import metamaskIcon from '../../img/metamaskIcon.png';
import thirdwebIcon from '../../img/thirdwebIcon.png';
import socialliIcon from '../../img/socialliIcon.png';
import nodeIcon from '../../img/nodeIcon.png';
import reduxIcon from '../../img/reduxIcon.png';
import firebaseIcon from '../../img/firebaseIcon.png';
import kailashIcon from '../../img/kailashIcon.png';
import micIcon from '../../img/micIcon2.png';
import nftIcon from '../../img/nftIcon.png';
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
						<Animator animation={batch(FadeIn(), Sticky(), MoveIn(0, -200))}>
							<div className='project-icons'>
								<img src={reactIcon} alt='reactIcon' />
							</div>
						</Animator>
						<Animator animation={batch(FadeIn(), Sticky(), MoveIn(0, -100))}>
							<div className='project-icons2'>
								<img src={metamaskIcon} alt='metamaskIcon' />
							</div>
						</Animator>
						<Animator animation={batch(FadeIn(), Sticky(), MoveIn(0, -700), MoveOut(0, 200))}>
							<div className='project-icons3'>
								<img src={kailashIcon} alt='kailashIcon' />
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
									Nftie is an online marketplace for NFTs. Here you can purchase listed items.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<a href='https://nftie.vercel.app/' target='_blank' rel='noreferrer'>
									<img src={nftie} alt='projectTwo' />
								</a>
							</div>
						</Animator>
						<Animator animation={batch(Sticky())}>
							<div className='project-icons'>
								<img src={reactIcon} alt='reactIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveOut(0, 1000))}>
							<div className='project-icons2'>
								<img src={metamaskIcon} alt='metamaskIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, -700), MoveOut(0, 200))}>
							<div className='project-icons3'>
								<img src={thirdwebIcon} alt='thirdwebIcon' />
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
								<a href='https://www.social.li/' target='_blank' rel='noreferrer'>
									<img style={{ height: isMobile && '25rem' }} src={social} alt='projectFour' />
								</a>
							</div>
						</Animator>
						<Animator animation={batch(Sticky())}>
							<div className='project-icons'>
								<img src={reactIcon} alt='reactIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, -800), MoveOut(0, 800))}>
							<div className='project-icons4'>
								<img src={socialliIcon} alt='socialliIcon' />
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
								<a href='https://dflipkart.herokuapp.com/' target='_blank' rel='noreferrer'>
									<img style={{ height: isMobile && '25rem' }} src={dflipkart} alt='projectTwo' />
								</a>
							</div>
						</Animator>
						<Animator animation={batch(Sticky())}>
							<div className='project-icons'>
								<img src={reactIcon} alt='reactIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, -800), MoveOut(0, 800))}>
							<div className='project-icons3'>
								<img src={nodeIcon} alt='nodeIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, -800))}>
							<div className='project-icons2'>
								<img src={reduxIcon} alt='reduxIcon' />
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
								<p>A Slack like application for connections people and community.</p>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
							<div className='project-image'>
								<a href='https://slackybysagar.web.app/' target='_blank' rel='noreferrer'>
									<img style={{ height: isMobile && '25rem' }} src={slacky} alt='projectFour' />
								</a>
							</div>
						</Animator>
						<Animator animation={batch(Sticky())}>
							<div className='project-icons'>
								<img src={reactIcon} alt='reactIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveOut(0, 200))}>
							<div className='project-icons2'>
								<img src={reduxIcon} alt='reduxIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, -800), MoveOut(0, 800))}>
							<div className='project-icons3'>
								<img src={firebaseIcon} alt='firebaseIcon' />
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
									A smart expense tracker to log transactions using voice enabled input method.
								</p>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -1000))}>
							<div className='project-image2'>
								<a href='https://expensely.netlify.app/' target='_blank' rel='noreferrer'>
									<img src={expensely} alt='projectTwo' />
								</a>
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveOut(0, 800))}>
							<div className='project-icons'>
								<img src={reactIcon} alt='reactIcon' />
							</div>
						</Animator>
						<Animator animation={batch(Sticky(), MoveIn(0, -700), MoveOut(0, 1200))}>
							<div className='project-icons3'>
								<img src={micIcon} alt='micIcon' />
							</div>
						</Animator>
					</div>
				</div>
			</ScrollPage>
		</>
	);
};

export default Projects;
