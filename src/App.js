import Home from './Pages/Home';

window.addEventListener('load', function () {
	setTimeout(function () {
		// This hides the address bar:
		console.log('event', window);
		window.scrollTo(0, 1);
	}, 0);
});

function App() {
	return (
		<div className='App'>
			<Home />
		</div>
	);
}

export default App;
