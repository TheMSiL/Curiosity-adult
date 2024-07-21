import first_mob from '../../assets/challenges/first_mob.png';
import second_mob from '../../assets/challenges/second_mob.png';
import third_mob from '../../assets/challenges/third_mob.png';
import four_mob from '../../assets/challenges/four_mob.png';
import five_mob from '../../assets/challenges/five_mob.png';
import six_mob from '../../assets/challenges/six_mob.png';
import firstS from '../../assets/challenges/first.svg';
import secondS from '../../assets/challenges/second.svg';
import thirdS from '../../assets/challenges/third.svg';
import fourS from '../../assets/challenges/four.svg';
import fiveS from '../../assets/challenges/five.svg';
import sixS from '../../assets/challenges/six.svg';

export const ChallengM = () => {
	return (
		<div className='1150:hidden grid grid-cols-2 grid-rows-2 max-w-[750px] challeng_gap mx-auto justify-items-center'>
			<div className='col-span-1 row-span-1 relative w-full  750:h-[160px] min-h-full h-[150px] rew_item'>
				<img
					className='absolute top-0 left-0 750:h-[160px] min-h-full h-[150px] rew_item-img'
					src={first_mob}
				/>
				<div className='absolute z-10'>
					<div className='flex items-start gap-3'>
						<img className='750:w-8 750:h-8 w-6 h-6' src={firstS} />
						<h4 className='text-xl leading-6 text-[#C0FF01] 750:mb-0 mb-2'>
							Puzzles
						</h4>
					</div>
					<p className='800:leading-[20px] 800:text-[15px] 900:text-base 900:leading[24px] 750:pl-[46px] text-sm pl-[35px] max-w-[295px] 800:max-w-[330px]'>
						Through puzzles and educational games, we develop a child's logical
						thinking, memory, and attention.
					</p>
				</div>
			</div>

			<div className='col-span-1 row-span-2 w-full relative rew_item'>
				<img
					className='absolute top-0 left-0 h-[340px] 750:h-[360px] rew_item-img'
					src={third_mob}
				/>
				<div className='absolute z-10'>
					<div className='flex items-start gap-3'>
						<img className='750:w-8 750:h-8 w-6 h-6' src={fourS} />
						<h4 className='text-xl leading-6 750:mb-0 mb-2 text-[#C0FF01]'>
							Creative tasks
						</h4>
					</div>
					<p className='800:leading-[20px]  800:text-[15px] 900:text-base 900:leading[24px]  text-sm max-w-[290px] 800:max-w-[300px] 750:pl-[46px] pl-[35px]'>
						We nurture a child's creative skills through the creation of their
						own tasks, essays, and participation in innovative programs.
					</p>
				</div>
			</div>

			<div className='col-span-1 row-span-2 w-full h-[152px] 750:h-[163px] relative rew_item min-h-full'>
				<img
					className='absolute top-0 left-0 h-[152px] 750:h-[163px] min-h-full rew_item-img'
					src={second_mob}
				/>
				<div className='absolute z-10'>
					<div className='flex items-start gap-3'>
						<img className='750:w-8 750:h-8 w-6 h-6' src={thirdS} />
						<h4 className='text-xl leading-6 text-[#C0FF01] 750:mb-0 mb-2'>
							Tests
						</h4>
					</div>
					<p className='800:leading-[20px]  800:text-[15px] 900:text-base 900:leading[24px]  text-sm max-w-[266px] 750:max-w-[290px] 800:max-w-[310px] 750:pl-[46px] pl-[35px]'>
						We assess a child's knowledge within the platform using various
						tools, from interactive test forms to AI assessments.
					</p>
				</div>
			</div>

			<div className='col-span-2 row-span-1 rew_item relative w-full h-[130px] min-h-full'>
				<img
					className='absolute top-0 left-0 h-[130px] min-h-full rew_item-img'
					src={four_mob}
				/>
				<div className='absolute z-10'>
					<div className='flex items-start gap-3'>
						<img className='750:w-8 750:h-8 w-6 h-6' src={sixS} />
						<h4 className='text-xl leading-6 text-[#C0FF01] 750:mb-0 mb-2'>
							Tasks from parents
						</h4>
					</div>
					<p className='800:leading-[20px]  800:text-[15px] 900:text-base 900:leading[24px]  text-sm max-w-[570px] 750:max-w-[635px] 800:max-w-[630px] 750:pl-[46px] pl-[35px]'>
						We build a bridge between parents and their children within the
						digital space. Parents now have a new tool for effective
						interaction.
					</p>
				</div>
			</div>

			<div className='col-span-1 row-span-1 w-full 850:w-[365px] 750:h-[165px] h-[150px] min-h-full relative rew_item'>
				<img
					className='absolute top-0 left-0 750:h-[165px] h-[150px] min-h-full rew_item-img'
					src={five_mob}
				/>
				<div className='absolute z-10'>
					<div className='flex items-start gap-3'>
						<img className='750:w-8 750:h-8 w-6 h-6' src={secondS} />
						<h4 className='text-xl leading-6 750:mb-0 mb-2 text-[#C0FF01]'>
							Quizzes
						</h4>
					</div>
					<p className='800:leading-[20px]  800:text-[15px] 900:text-base 900:leading[24px]  text-sm max-w-[285px] 750:max-w-[313px] 750:pl-[46px] pl-[35px]'>
						We create various additional tasks, like quizzes, for a deeper
						understanding of the material.
					</p>
				</div>
			</div>

			<div className='col-span-1 row-span-1 w-full  850:w-[365px] min-h-full 750:h-[165px] h-[150px] rew_item relative'>
				<img
					className='absolute top-0 left-0 750:h-[165px] h-[150px] min-h-full rew_item-img'
					src={six_mob}
				/>
				<div className='absolute z-10'>
					<div className='flex items-start gap-3'>
						<img className='750:w-8 750:h-8 w-6 h-6' src={fiveS} />
						<h4 className='text-xl leading-6 750:mb-0 mb-2 text-[#C0FF01]'>
							Real-life
						</h4>
					</div>
					<p className='800:leading-[20px]  800:text-[15px] 900:text-base 900:leading[24px]  text-sm max-w-[285px] 800:max-w-[320px] 750:pl-[46px] pl-[35px]'>
						We encourage offline achievements and motivate children to spend
						time away from devices.
					</p>
				</div>
			</div>
		</div>
	);
};
