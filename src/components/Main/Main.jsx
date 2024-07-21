import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import Header from '../Header/Header';
import MainBtn from './MainBtn';
import phone from '../../assets/main/iPhone 12 Mini.png';
import l1 from '../../assets/main/l1.png';
import l2 from '../../assets/main/l2.png';
import l3 from '../../assets/main/l3.png';
import r1 from '../../assets/main/r1.png';
import r2 from '../../assets/main/r2.png';
import r3 from '../../assets/main/r3.png';

import Features from '../Features/Features';

const Main = () => {
	const element1Ref = useRef(null);
	const element2Ref = useRef(null);
	const element3Ref = useRef(null);
	const element4Ref = useRef(null);
	const element5Ref = useRef(null);
	const element6Ref = useRef(null);

	useEffect(() => {
		const mainTimeline = gsap.timeline({ repeat: -1, yoyo: true });

		const animation1 = gsap.to(element1Ref.current, {
			duration: 1,
			x: -50,
			ease: 'power1.inOut',
			yoyo: true,
		});
		const animation2 = gsap.to(element2Ref.current, {
			duration: 1,
			x: -50,
			ease: 'power1.inOut',
			yoyo: true,
		});
		const animation3 = gsap.to(element3Ref.current, {
			duration: 1,
			x: -50,
			ease: 'power1.inOut',
			yoyo: true,
		});

		mainTimeline
			.add(animation1)
			.add(animation2, '-=0.5')
			.add(animation3, '-=0.5');

		mainTimeline.play();

		return () => {
			mainTimeline.pause();
		};
	}, []);

	useEffect(() => {
		const mainTimeline = gsap.timeline({ repeat: -1, yoyo: true });

		const animation1 = gsap.to(element4Ref.current, {
			duration: 1,
			x: 50,
			ease: 'power1.inOut',
			yoyo: true,
		});
		const animation2 = gsap.to(element5Ref.current, {
			duration: 1,
			x: 50,
			ease: 'power1.inOut',
			yoyo: true,
		});
		const animation3 = gsap.to(element6Ref.current, {
			duration: 1,
			x: 50,
			ease: 'power1.inOut',
			yoyo: true,
		});

		mainTimeline
			.add(animation1)
			.add(animation2, '-=0.5')
			.add(animation3, '-=0.5');

		mainTimeline.play();

		return () => {
			mainTimeline.pause();
		};
	}, []);

	return (
		<section className='main 900:pb-20'>
			<Header />
			<h1 className='900:mt-20 mt-10 mb-8 900:max-w-[541px] max-w-[390px] mx-auto sui title'>
				Welcome to Curiosity, where learning is an adventure!
			</h1>
			<MainBtn text='Dive in' className='btn_main' conClass='btn_con' />
			<div
				className='flex items-center relative max-w-[800px] 850:max-w-[1000px] 
			mx-auto justify-center pt-10 1050:pt-0 pb-20'
			>
				<img
					className='absolute left-[8%] 750::left-[10%]'
					ref={element3Ref}
					src={l1}
				/>
				<img
					className='absolute left-[12%] 750::left-[14%]'
					ref={element2Ref}
					src={l2}
				/>
				<img
					className='absolute left-[16%] 750::left-[18%]'
					ref={element1Ref}
					src={l3}
				/>
				<img className='main_phone' src={phone} />
				<img
					className='absolute right-[14%] 750::right-[20%]'
					ref={element4Ref}
					src={r3}
				/>
				<img
					className='absolute right-[10%] 750::right-[16%]'
					ref={element5Ref}
					src={r2}
				/>
				<img
					className='absolute right-[6%] 750::right-[13%]'
					src={r1}
					ref={element6Ref}
				/>
			</div>

			<Features />
		</section>
	);
};

export default Main;
