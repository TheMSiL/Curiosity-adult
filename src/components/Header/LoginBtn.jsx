import log from '../../assets/log_btn.png'

const LoginBtn = () => {
	return (
		<div className='relative cursor-pointer hover:scale-105 duration-300'>
			<img src={log} />
			<p className='text-[#C0FF01] text-lg leading-[22px] absolute top-2 left-7'>
				Log In
			</p>
		</div>
	);
};

export default LoginBtn;
