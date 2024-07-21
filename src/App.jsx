import Info from './components/Info/Info';
import Main from './components/Main/Main';
import Join from './components/Join/Join';
import Interact from './components/Interact/Interact';
import Footer from './components/Footer/Footer';
import Challenges from './components/Challenges/Challenges';
import Rewards from './components/Rewards/Rewards';
import Orientation from './components/Orientation';
import Switcher from './components/Switcher';

const App = () => {
	return (
		<div className='wrapper'>
			<Orientation/>
			<Main />
			<Info />
			<Interact />
			<Join title='Join the limited platform testing!' />
			<div className='new_bg'>
				<Challenges />
				<Rewards />
				<Join title='Test the limited platform!' />
			</div>
			<Footer />
			<Switcher/>
		</div>
	);
};

export default App;
