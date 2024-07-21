import { Navigation } from './Navigation';
import LoginBtn from './LoginBtn';
import MobileNav from './MobileNav';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/Avatar.svg';

const Header = () => {
	return (
		<header
			className='container flex items-center justify-between pt-8'
			id='header'
		>
			<div className='1100:hidden grid'>
				<MobileNav />
			</div>
			<img className='ml-[65px] 1050:ml-0' src={logo} alt='logo' />
			<nav className='1100:block hidden'>
				<Navigation />
			</nav>
			<div className='flex items-start 2xl:gap-10 gap-4 cursor-pointer'>
				<img className='1100:block hidden' src={avatar} />
				<LoginBtn />
			</div>
		</header>
	);
};

export default Header;
