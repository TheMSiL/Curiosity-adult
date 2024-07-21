import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import stars from '../../assets/rewards/stars.png';
import consoles from '../../assets/rewards/consoles.png';
import diamonds from '../../assets/rewards/diamonds.png';
import clock from '../../assets/rewards/clock.png';
import left from '../../assets/interact/left.png';
import right from '../../assets/interact/right.png';

const CustomArrow = ({ onClick, src, className }) => (
	<img src={src} onClick={onClick} alt='Arrow' className={className} />
);

const Rewards = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <CustomArrow src={left} className='slick-prev' />,
		nextArrow: <CustomArrow src={right} className='slick-next' />,
	};
	return (
		<section className='py-32'>
			<div className='mx-auto 1250:max-w-[1150px] 1050:max-w-[1000px] container'>
				<h2 className='sui text-2xl 900:text-3xl text-center mb-4'>Rewards</h2>
				<Slider {...settings}>
					<div className='max-w-[1110px] mx-auto rewards_item'>
						<img className='img_bg' src={stars} />
						<h4 className='sui text-xl 900:text-2xl 1150:mt-16 mt-8 mb-4'>
							Knowledge coins
						</h4>
						<p className='text-center text-lg leading-[22px] max-w-[451px] 1150:mb-14 mb-7'>
							Every accomplished task deserves a reward. That's why, on our
							platform, children earn 'Knowledge Coins' for their learning
							achievements. These coins can be exchanged for exciting prizes at
							the Curiosity Store. The harder they work and the more tasks they
							complete, the bigger the rewards—encouraging a healthy work ethic.
						</p>
					</div>
					<div className='max-w-[1110px] mx-auto rewards_item'>
						<img className='img_bg' src={clock} />
						<h4 className='sui text-xl 900:text-2xl 1150:mt-16 mt-8  mb-4'>
							Gaming time PS/Xbox/Mobile
						</h4>
						<p className='text-center text-lg leading-[22px] max-w-[451px] 1150:mb-14 mb-7'>
							We all worry about excessive gaming, don't we? At Curiosity, we
							believe gaming is an integral part of modern life, but balance is
							key to happiness. Kids can earn extra gaming time by completing
							educational modules and tasks set by you. It's learning and play
							hand in hand.
						</p>
					</div>
					<div className='max-w-[1110px] mx-auto rewards_item'>
						<img className='img_bg' src={consoles} />
						<h4 className='sui text-xl 900:text-2xl 1150:mt-16 mt-8 mb-4'>
							Games PS/Xbox
						</h4>
						<p className='text-center text-lg leading-[22px] max-w-[451px] 1150:mb-14 mb-7'>
							The anticipation of a new game release can be overwhelming. What
							if we channel that excitement towards self-improvement? In
							collaboration with top gaming studios, Curiosity offers free games
							to the most diligent learners. You can also use this as a
							motivational tool for your child's development.
						</p>
					</div>
					<div className='max-w-[1110px] mx-auto rewards_item'>
						<img className='img_bg' src={diamonds} />
						<h4 className='sui text-xl 900:text-2xl 1150:mt-16 mt-8 mb-4'>
							Exclusive in-game bonuses
						</h4>
						<p className='text-center text-lg leading-[22px] max-w-[451px] 1150:mb-14 mb-7'>
							Diverse tasks lead to diverse rewards. Skins, in-game currency,
							special gaming tools—these are all part of our reward pool for
							task completion. It's a way to add excitement and value to the
							learning journey.
						</p>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default Rewards;
