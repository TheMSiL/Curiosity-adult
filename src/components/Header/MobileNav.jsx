import { useState } from 'react';
import { navItems } from './Navigation';
import { Link } from 'react-scroll';
import avatar from '../../assets/Avatar.svg';

const MobileNav = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<div
				className='grid space-y-2 z-50 cursor-pointer'
				onClick={() => setShowMenu(!showMenu)}
			>
				<span
					className={`w-8 h-1 block rounded-md bg-[#C0FF01] relative duration-300 ${
						showMenu ? 'rotate-[145deg] ' : 'rotate-0 '
					}`}
				/>
				<span
					className={`w-8 h-1 block rounded-md bg-[#C0FF01] relative duration-300 ${
						showMenu ? 'hidden' : 'rotate-0 '
					}`}
				/>
				<span
					className={`w-8 h-1 block rounded-md bg-[#C0FF01] relative duration-300 ${
						showMenu ? 'rotate-[-145deg] top-[-11px]' : 'rotate-0 '
					}`}
				/>
			</div>
			<nav
				className={`pt-28 pl-10 flex justify-start items-start absolute w-screen h-[405px] top-0 burger_nav left-0  
${showMenu ? 'translate-x-0 z-20' : 'translate-x-[-100%]'}`}
			>
				<ul className='flex items-start justify-start flex-col space-y-4'>
					{navItems.map((item, index) => (
						<li key={index}>
							<Link
								className='duration-300 cursor-pointer text-lg hover:text-[#C0FF01]'
								smooth={true}
								offset={-120}
								duration={500}
								to={item.id}
								onClick={() => setShowMenu(false)}
							>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default MobileNav;
