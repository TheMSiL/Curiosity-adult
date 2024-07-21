import building from '../../assets/info/building.svg';
import brain from '../../assets/info/brain.svg';
import tree from '../../assets/info/tree.svg';
import space from '../../assets/info/space.svg';
import scroll from '../../assets/info/scroll.svg';
import ruler from '../../assets/info/ruler.svg';
import bg from '../../assets/info/info_bg.png';

const Info = () => {
	return (
		<section className='900:pt-20 800:pb-40 pb-20 relative'>
			<div className='container'>
				<h2 className='sui text-2xl 900:text-3xl text-center mb-[70px]' id='info'>
					Learning Campaigns
				</h2>
				<img src={bg} className='absolute top-[-200px] right-0' />
				<div className='hidden 1050:grid grid-cols-3 justify-center max-w-[1110px] mx-auto'>
					<div className='flex flex-col items-center gap-14 borderus'>
						<div className='info_item relative'>
							<img src={building} className='absolute top-3 left-4' />
							<h4 className='text-2xl mb-3'>Politics</h4>
							<p className='max-w-[260px] 1250:text-lg leading-[22px]'>
								Exploring the understanding of political processes through
								real-life cases and issues
							</p>
						</div>
						<div className='info_item relative'>
							<img src={scroll} className='absolute top-4 left-4' />
							<h4 className='text-2xl mb-3'>History</h4>
							<p className='max-w-[260px] 1250:text-lg leading-[22px]'>
								Studying the planet's history from a perspective of people and
								events, not just memorizing dates
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-14 borderus'>
						<div className='info_item relative'>
							<img src={tree} className='absolute top-3 left-4' />
							<h4 className=' text-2xl mb-3'>Ecology</h4>
							<p className='max-w-[260px] 1250:text-lg leading-[22px]'>
								Unraveling the concept of ecological discourse and pathways to
								tackle challenges through technology and innovation
							</p>
						</div>
						<div className='info_item relative'>
							<img src={ruler} className='absolute top-4 left-4' />
							<h4 className=' text-2xl mb-3'>Math</h4>
							<p className='max-w-[260px] 1250:text-lg leading-[22px]'>
								An interactive course on mathematics as the foundational science
								of learning
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-14'>
						<div className='info_item relative'>
							<img src={space} className='absolute top-3 left-4' />
							<h4 className='text-2xl mb-3'>Cosmos</h4>
							<p className='max-w-[260px] 1250:text-lg leading-[22px]'>
								Building knowledge about the near and distant cosmos using
								paradoxes, theories, and hypotheses
							</p>
						</div>
						<div className='info_item relative'>
							<img src={brain} className='absolute top-4 left-4' />
							<h4 className='text-2xl mb-3'>Philosophy</h4>
							<p className='max-w-[260px] 1250:text-lg leading-[22px]'>
								From ancient to classical German philosophy to shape individuals
								of the new enlightenment era
							</p>
						</div>
					</div>
				</div>
				<div className='grid 1050:hidden grid-cols-2'>
					<div className='flex flex-col items-center gap-4 borderus'>
						<div className='info_item relative'>
							<img src={building} className='absolute 900:top-7 800:left-6 left-3 w-8' />
							<h4 className='text-xl 800:mb-2 mb-1'>Politics</h4>
							<p className='800:max-w-[260px] max-w-[240px] 850:text-base text-sm leading[16px] 800:leading-[21px]'>
								Exploring the understanding of political processes through
								real-life cases and issues
							</p>
						</div>
						<div className='info_item relative'>
							<img src={space} className='absolute 900:top-7 800:left-6 left-3 w-8' />
							<h4 className='text-xl 800:mb-2 mb-1'>Cosmos</h4>
							<p className='900:max-w-[228px] 850:text-base text-sm leading[16px] 800:leading-[21px]'>
								Building knowledge about the near and distant cosmos using
								paradoxes, theories, and hypotheses
							</p>
						</div>
						<div className='info_item relative'>
							<img src={ruler} className='absolute 900:top-7 800:left-6 left-3 w-8' />
							<h4 className='text-xl 800:mb-2 mb-1'>Math</h4>
							<p className='1150:max-w-[175px] 900:max-w-[245px] 850:text-base text-sm leading[16px] 800:leading-[21px]'>
								An interactive course on mathematics as the foundational science
								of learning
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center gap-4'>
						<div className='info_item relative'>
							<img src={tree} className='absolute 900:top-7 800:left-6 left-3 w-8' />
							<h4 className='text-xl 800:mb-2 mb-1'>Ecology</h4>
							<p className='max-w-[292px] 850:text-base text-sm leading[16px] 800:leading-[21px]'>
								Unraveling the concept of ecological discourse and pathways to
								tackle challenges through technology and innovation
							</p>
						</div>
						<div className='info_item relative'>
							<img src={scroll} className='absolute 900:top-7 800:left-6 left-3 w-8' />
							<h4 className='text-xl 800:mb-2 mb-1'>History</h4>
							<p className='900:max-w-[228px] max-w-[251px] 850:text-base text-sm leading[16px] 800:leading-[21px]'>
								Studying the planet's history from a perspective of people and
								events, not just memorizing dates
							</p>
						</div>
						<div className='info_item relative'>
							<img src={brain} className='absolute 900:top-7 800:left-6 left-3 w-8' />
							<h4 className='text-xl 800:mb-2 mb-1'>Philosophy</h4>
							<p className='900:max-w-[212px] 850:text-base text-sm leading[16px] 800:leading-[21px]'>
								From ancient to classical German philosophy to shape individuals
								of the new enlightenment era
							</p>
						</div>
					</div>
				</div>
				<p className='1050:block hidden text-2xl text-center mt-12 sui'>
					And much more…
				</p>
			</div>
		</section>
	);
};

export default Info;
