const MainBtn = ({ text, className, conClass }) => {
	return (
		<div className={`${conClass}`}>
			<button className={`btn ${className}`}> {text}</button>
		</div>
	);
};

export default MainBtn;
