import { useState, useEffect } from 'react';
import adult from '../assets/adult.png';
import child from '../assets/child.png';

const Switcher = () => {
	const [isAdult, setIsAdult] = useState(false);
	const [showSwitcher, setShowSwitcher] = useState(false);

	useEffect(() => {
		const hasVisited = localStorage.getItem('hasVisited');
		if (!hasVisited) {
			setShowSwitcher(true);
		}
	}, []);

	const handleChildClick = () => {
		setIsAdult(!isAdult);
		localStorage.setItem('hasVisited', 'true');
		setShowSwitcher(false);
	};

	return (
		<div
			className='overlay_cont relative px-[5%]'
			style={showSwitcher ? { display: 'flex' } : { display: 'none' }}
		>
			<div className='border p-5 sm:p-10 rounded-md duration-300 hover:border-[#C0FF01]'>
				<h2 className='sm:text-2xl text-center text-xl'>
					<span className='text-[#C0FF01] text-2xl sm:text-3xl block text-center'>
						Hi, there!
					</span>
					We have two websites for adults and children
				</h2>
				<p className='sm:text-xl text-lg text-center'>
					Please choose your age :
				</p>
				<div className='flex items-center justify-center gap-10 mt-5'>
					<a className='cursor-pointer' onClick={handleChildClick}>
						<img className='sm:w-[100px] w-[50px]' src={adult} />
					</a>
					<a
						href='https://curiosity-child.netlify.app/'
						className='cursor-pointer'
						onClick={handleChildClick}
					>
						<img className='sm:w-[100px] w-[50px]' src={child} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Switcher;
