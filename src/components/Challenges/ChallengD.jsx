import first from '../../assets/challenges/first.png';
import second from '../../assets/challenges/second.png';
import third from '../../assets/challenges/third.png';
import four from '../../assets/challenges/four.png';
import five from '../../assets/challenges/five.png';
import six from '../../assets/challenges/six.png';
import firstS from '../../assets/challenges/first.svg';
import secondS from '../../assets/challenges/second.svg';
import thirdS from '../../assets/challenges/third.svg';
import fourS from '../../assets/challenges/four.svg';
import fiveS from '../../assets/challenges/five.svg';
import sixS from '../../assets/challenges/six.svg';

export const ChallengD = () => {
	return (
		<>
			<div className='hidden 1150:grid grid-cols-3 grid-rows-2  max-w-[1110px] mx-auto challenges_grid'>
				<div className='col-span-1 row-span-2 relative w-[350px] h-[432px] rew_item'>
					<img className='absolute top-0 left-0 rew_item-img' src={first} />
					<div className='absolute z-10'>
						<div className='flex items-start gap-3'>
							<img src={firstS} />
							<h4 className='text-2xl leading-5 mb-3 text-[#C0FF01]'>
								Puzzles
							</h4>
						</div>
						<p className='text-lg leading-[22px] max-w-[313px] pl-[46px]'>
							through puzzles and educational games, we develop a child's
							logical thinking, memory, and attention.
						</p>
					</div>
				</div>
				<div className='col-span-1 row-span-1 w-[350px] h-[158px] relative rew_item'>
					<img className='absolute top-0 left-0 rew_item-img' src={second} />
					<div className='absolute z-10'>
						<div className='flex items-start gap-3'>
							<img src={secondS} />
							<h4 className='text-2xl leading-5 mb-3 text-[#C0FF01]'>
								Quizzes
							</h4>
						</div>
						<p className='text-lg leading-[22px] max-w-[313px] pl-[46px]'>
							We create various additional tasks, like quizzes, for a deeper
							understanding of the material.
						</p>
					</div>
				</div>
				<div className='col-span-1 row-span-1 w-[350px] h-[158px] relative rew_item'>
					<img className='absolute top-0 left-0 rew_item-img' src={third} />
					<div className='absolute z-10'>
						<div className='flex items-start gap-3'>
							<img src={thirdS} />
							<h4 className='text-2xl mb-3 leading-5 text-[#C0FF01]'>Tests</h4>
						</div>
						<p className='text-lg leading-[22px] max-w-[313px] pl-[46px]'>
							We assess a child's knowledge within the platform using various
							tools, from interactive test forms to AI assessments.
						</p>
					</div>
				</div>
				<div className='col-span-2 row-span-1 1250:w-[730px] w-[715px] h-[244px] top-[-60px] relative rew_item'>
					<img className='absolute top-0 left-0 rew_item-img' src={four} />
					<div className='absolute z-10'>
						<div className='flex items-start gap-3'>
							<img src={fourS} />
							<h4 className='text-2xl mb-3 leading-5 text-[#C0FF01]'>
								Creative tasks
							</h4>
						</div>
						<p className='text-lg leading-[22px] max-w-[630px] pl-[46px]'>
							We nurture a child's creative skills through the creation of their
							own tasks, essays, and participation in innovative programs.
						</p>
					</div>
				</div>
			</div>
			<div className='hidden 1150:grid grid-cols-2 relative top-[-40px] gap-4 max-w-[1110px] mx-auto'>
				<div className='rew_item relative'>
					<img className='absolute top-0 left-0 rew_item-img' src={five} />
					<div className='absolute z-10'>
						<div className='flex items-start gap-3'>
							<img src={fiveS} />
							<h4 className='text-2xl mb-3 leading-5 text-[#C0FF01]'>
								Real-life
							</h4>
						</div>
						<p className='text-lg leading-[22px] max-w-[460px] pl-[46px]'>
							We encourage offline achievements and motivate children to spend
							time away from devices.
						</p>
					</div>
				</div>
				<div className=' rew_item relative'>
					<img className='absolute top-0 left-0 rew_item-img' src={six} />
					<div className='absolute z-10'>
						<div className='flex items-start gap-3'>
							<img src={sixS} />
							<h4 className='text-2xl mb-3 leading-5 text-[#C0FF01]'>
								Tasks from parents
							</h4>
						</div>
						<p className='text-lg leading-[22px] max-w-[490px] pl-[46px]'>
							We build a bridge between parents and their children within the
							digital space. Parents now have a new tool for effective
							interaction.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
