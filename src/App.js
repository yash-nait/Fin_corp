import React, {useState} from "react";
import "./App.css";
import Intro from "./Intro";
import Choices from "./Choices";
import Game from "./Game";
import InvestmentOption from "./InvestmentOption";
import TaxBackground from "./images/BackgroundImages/tax-background.jpg";
import CompoudingBackground from "./images/BackgroundImages/compounding_background.jpg";
import Details from "./ChoicesDetails";

function App() {
	const [intro, setIntro] = useState(true);

	return (
		<div className='App bkg'>
			<Intro setIntro={setIntro} />
			{!intro && (
				<>
					<div className='row'>
						<div className='col-md-8'>
							<Game />
						</div>
						<div className='col-md-4' style={{
							padding:"0 0 0 2%"
						}}>
							<Choices />
						</div>
					</div>
					<div>
						<h3
							style={{
								textAlign: "center",
								marginTop: "4rem",
							}}
						>
							Also learn about
						</h3>
						<div className='row'>
							<div className='col-md-6'>
								<InvestmentOption
									name='Tax'
									image={TaxBackground}
									flag={true}
									message={Details.tax.info}
									fact={Details.tax.fact}
									glossary={Details.tax.glossary}
								/>
							</div>
							<div className='col-md-6'>
								<InvestmentOption
									name='Compounding'
									image={CompoudingBackground}
									flag={true}
									message={Details.compounding.info}
									fact={Details.compounding.fact}
									glossary={Details.compounding.glossary}
								/>
							</div>
						</div>
					</div>
					<div className='footer'>
						Made by team HFS
					</div>
				</>
			)}
		</div>
	);
}

export default App;
