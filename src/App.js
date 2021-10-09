import "./App.css";
import Choices from "./Choices";
import Game from "./Game";
import InvestmentOption from "./InvestmentOption";
import TaxBackground from "./images/BackgroundImages/tax-background.jpg";
import CompoudingBackground from "./images/BackgroundImages/compounding_background.jpg";

function App() {
	return (
		<div className='App bkg'>
			<div className='row'>
				<div className='col-8'>
					<Game />
				</div>
				<div className='col-4'>
					<Choices />
				</div>
			</div>
			<div>
				<h4
					style={{
						textAlign: "center",
						marginTop: "4rem",
					}}
				>
					Also learn about
				</h4>
				<div className='row'>
					<div className='col-6'>
						<InvestmentOption
							name='Tax'
							image={TaxBackground}
							flag={true}
						/>
					</div>
					<div className='col-6'>
						<InvestmentOption
							name='Compounding'
							image={CompoudingBackground}
							flag={true}
						/>
					</div>
				</div>
			</div>
			<div className='footer'></div>
		</div>
	);
}

export default App;
