import sand from '../../assets/features/sand.png';
import supernova from '../../assets/features/supernova.png';
import robot from '../../assets/features/robot.png';
import cristal from '../../assets/features/cristal.png';
import spell from '../../assets/features/spell.png';
import rocket from '../../assets/features/rocket.png';
import hat from '../../assets/features/witch.png';

const Features = () => {
	return (
		<section className='features relative z-10'>
			<div className='container'>
				<div className='poly mx-auto pt-32 1050:pt-36 1360:px-36 1150:px-24 1050:px-20 px-10'>
					<div className='flex items-center justify-center flex-wrap features_gap'>
						<div className='flex flex-col items-center'>
							<img className='850:w-[75px] w-[55px]' src={sand} />
							<p className='text-center mt-3 1050:text-lg 900:text-base 750:text-sm text-[13px]'>
								Real-time child<br></br> performance analysis
							</p>
						</div>
						<div className='flex flex-col items-center' id='features'>
							<img className='850:w-[101px] w-[75px]' src={supernova} />
							<p className='text-center mt-3 1050:text-lg 900:text-base 750:text-sm text-[13px] '>
								Combining education<br></br> and gaming
							</p>
						</div>
						<div className='flex flex-col items-center'>
							<img className='850:w-[75px] w-[55px]' src={cristal} />
							<p className='text-center mt-3 1050:text-lg 900:text-base 750:text-sm text-[13px] '>
								A new form of<br></br> digital interaction
							</p>
						</div>
						<div className='flex flex-col items-center'>
							<img className='850:w-[101px] w-[75px]' src={spell} />
							<p className='text-center mt-3 1050:text-lg 900:text-base 750:text-sm text-[13px] '>
								Flexible task<br></br> management system
							</p>
						</div>
						<div className='flex flex-col items-center '>
							<img className='850:w-[83px] w-[70px]' src={rocket} />
							<p className='text-center mt-3 1050:text-lg 900:text-base 750:text-sm text-[13px] '>
								Progressive educational<br></br> methodology
							</p>
						</div>
						<div className='flex flex-col items-center'>
							<img className='850:w-[88px] w-[75px]' src={hat} />
							<p className='text-center mt-3 1050:text-lg 900:text-base 750:text-sm text-[13px] '>
								Interactive career<br></br> counseling
							</p>
						</div>
						<div className='flex flex-col items-center h-[130px]'>
							<img src={robot} />
							<p className='text-center 800:mt-3 mt-4 1050:text-lg 900:text-base 750:text-sm text-[13px] '>
								Personal AI tutor
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
