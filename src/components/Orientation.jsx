import MobileNav from './Header/MobileNav';
import logo from '../assets/logo.svg';
import rotate from '../assets/rotate.png';

const Orientation = () => {
	return (
		<div className='fixed flex flex-col overlay top-0 left-0 right-0 bottom-0 w-screen h-full z-[99] bg-[#090e2d]'>
			<div className='flex items-center gap-24'>
				<MobileNav />
				<img className='block ml-auto' src={logo} alt='logo' />
			</div>
			<div className='mt-[50%] mx-auto flex items-center flex-col justify-center gap-3'>
				<img className='rotate_img' src={rotate} />
				<p className='text-[#C0FF01] text-lg'>Rotate your Phone</p>
			</div>
		</div>
	);
};

export default Orientation;
