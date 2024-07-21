import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import first from '../../assets/interact/1.png';
import second from '../../assets/interact/2.png';
import third from '../../assets/interact/3.png';
import left from '../../assets/interact/left.png';
import right from '../../assets/interact/right.png';
import bg from '../../assets/interact/interact_bg.png';

const Interact = () => {
	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <img id='adult_arrows' src={right} />,
		prevArrow: <img id='adult_arrows' src={left} />,
	};

	return (
		<section className='1150:pb-40 pb-10 relative'>
			<div className='container'>
				<img src={bg} className='absolute left-0' />
				<h2 className='sui text-2xl 900:text-3xl text-center mb-[73px]'>
					Learning Campaigns
				</h2>
				<Slider
					ref={slider => {
						sliderRef = slider;
					}}
					{...settings}
				>
					<div className='flex 1250:flex-row flex-col 1250:items-start items-center gap-8 slide justify-center'>
						<img src={first} />
						<div className='pt-3 flex items-start justify-between'>
							<div>
								<h4 className='sui 950:text-2xl text-xl max-w-[350px] 1250:mb-7 mb-3'>
									Personal tutor for a child
								</h4>
								<div className='950:text-lg text-base 1360:max-w-[540px] 1250:max-w-[425px] max-w-[465px] 950:max-w-[525px] mx-auto'>
									<p className='1250:mb-6'>
										The AI tutor provides real-time feedback and support to help
										children understand concepts and complete assignments.
									</p>
									<p>
										Our tutor can be accessed from any internet-connected
										device, making it convenient for kids to learn at their own
										pace.
									</p>
								</div>
							</div>
							<div className='hidden 1250:flex items-center space-x-12'>
								<img className='cursor-pointer' onClick={previous} src={left} />
								<img className='cursor-pointer' onClick={next} src={right} />
							</div>
						</div>
					</div>
					<div className='flex 1250:flex-row flex-col 1250:items-start items-center gap-8 slide justify-center'>
						<img src={second} />
						<div className='pt-3 flex items-start justify-between'>
							<div>
								<h4 className='sui 950:text-2xl text-xl max-w-[350px] 1250:mb-7 mb-3'>
									Gamify your tasks
								</h4>
								<p className='950:text-lg text-base 1360:max-w-[550px] 1250:max-w-[425px] max-w-[465px] 950:max-w-[525px] mx-auto'>
									Curiosity offers gamification of tasks to make learning more
									engaging and fun for children. Parents can create and assign
									tasks to their children, such as house cleaning or homework,
									and set up rewards for successful completion. The platform
									allows parents to create customizable rewards, such as points,
									virtual badges, or even real-life prizes, for successful
									completion of tasks.
								</p>
							</div>
							<div className='hidden 1250:flex items-center space-x-12'>
								<img className='cursor-pointer' onClick={previous} src={left} />
								<img className='cursor-pointer' onClick={next} src={right} />
							</div>
						</div>
					</div>
					<div className='flex 1250:flex-row flex-col 1250:items-start items-center gap-8 slide justify-center'>
						<img src={third} />
						<div className='pt-3 flex items-start justify-between'>
							<div>
								<h4 className='sui 950:text-2xl text-xl max-w-[400px] 1250:mb-7 mb-3'>
									Track your child's progress
								</h4>
								<p className='950:text-lg text-base 1360:max-w-[540px] 1250:max-w-[425px] max-w-[475px] 950:max-w-[525px] mx-auto'>
									Overall, the gamification of tasks on the e-learning platform
									provides a fun and interactive way for children to learn and
									stay motivated, while also helping parents keep track of their
									children's progress and reward their work and achievements in
									learning and development.
								</p>
							</div>
							<div className='hidden 1250:flex items-center space-x-12'>
								<div className='flex items-center space-x-12'>
									<img
										className='cursor-pointer'
										onClick={previous}
										src={left}
									/>
									<img className='cursor-pointer' onClick={next} src={right} />
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default Interact;
