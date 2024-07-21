import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export const navItems = [
	{ text: 'Main', id: 'features' },
	{ text: 'Education Video', id: 'info' },
	{ text: 'Awards', id: 'awards' },
	{ text: 'Cooperation of children and parents', id: 'challenges' },
	{ text: 'Join Us', id: 'footer' },
];

export const Navigation = () => {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section');
			let currentActive = null;

			sections.forEach(div => {
				const bounding = div.getBoundingClientRect();
				if (bounding.top <= 120 && bounding.bottom >= 120) {
					currentActive = div.id;
				}
			});

			setActiveSection(currentActive);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<ul className='flex items-center space-x-4 xl:space-x-8'>
			{navItems.map((item, index) => (
				<li key={index}>
					<Link
						className='duration-300 cursor-pointer hover:text-[#C0FF01]'
						smooth={true}
						offset={-120}
						duration={500}
						to={item.id}
					>
						{item.text}
					</Link>
				</li>
			))}
		</ul>
	);
};
