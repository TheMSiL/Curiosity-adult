import MainBtn from '../Main/MainBtn';

import mob from '../../assets/join/phone.png';
import mobM from '../../assets/join/phone_mob.png';

const Join = ({ title }) => {
	return (
		<section className='1150:py-40 py-0 800:pt-20 pt-10 pb-28'>
			<div className='container'>
				<div className='max-w-[1130px] mx-auto relative' id='awards'>
					<div className='absolute 1150:bottom-[23.5%] bottom-0 1150:right-[10%] right-[4%] 800:right-[10%] 850:right-[9%] 1050:right-[16%] 950:right-[13%] 1250:right-[12%] z-10'>
						<input
							type='text'
							placeholder={`Your email`}
							className='1150:block hidden input_phone absolute top-44 right-16'
						/>
						<input
							type='text'
							placeholder={`Your phone`}
							className='1150:block hidden input_phone absolute top-64 right-16'
						/>
						<input
							type='text'
							placeholder={`Email`}
							className='1150:hidden block input_phone absolute 850:top-24 top-[25%] right-10 800:right-12'
						/>
						<input
							type='text'
							placeholder={`Phone`}
							className='1150:hidden block input_phone absolute  850:top-40 top-[50%] right-10 800:right-12'
						/>
						<div className='absolute top-[300px] right-40'>
							<MainBtn
								text='Dive in'
								className='mob_btn'
								conClass='mobBtn_con'
							/>
						</div>
						<img className='1150:block hidden' src={mob} />
						<img
							className='1150:hidden block 850:w-full w-[290px]'
							src={mobM}
						/>
					</div>
					<div className='join_wrapper relative'>
						<h2 className='sui 1150:text-3xl text-2xl text-black 1150px:max-w-[480px] max-w-[290px] mb-4'>
							{title}
						</h2>
						<p className='1150:text-lg text-base leading-5 text-black 1150:max-w-[400px] max-w-[275px] 950:max-w-[310px] '>
							Subscribe now and become one of the 100 early adopters to receive
							free access to the platform for 1 year, plus in-game rewards for
							your kids.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Join;
