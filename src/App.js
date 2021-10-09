import "./App.css";
import Choices from "./Choices";
import Game from "./Game";

function App() {
	return (
		<div className='App bkg'>
			<div>
				<div class='row'>
					<div class='col-8'>
						<Game />
					</div>
					<div class='col-4'>
						<Choices />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
