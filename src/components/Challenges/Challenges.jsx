import { ChallengD } from './ChallengD';
import { ChallengM } from './ChallengM';

const Challenges = () => {
	return (
		<section className='relative pt-10 1150:pt-0 1150:pb-40'>
			<div
				className='1150:max-w-full container mx-auto'
				id='challenges'
			>
				<h2 className='sui text-2xl 900:text-3xl text-center mb-16'>Challenges and goals</h2>
				<ChallengD />
				<ChallengM />
			</div>
		</section>
	);
};

export default Challenges;
