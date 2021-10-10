import React, {useState, useRef} from "react";
import {Modal, Overlay, Tooltip} from "react-bootstrap";

import "./Game.css";
import logo from "./images/logoCoin.gif";
import info from "./images/info-icon.png";

const data = [
	{
		options: ["Stock Market", "Recurring Deposit", "Gold"],
		roi: [17.9, 5, 4],
		msg: [
			"Bulls were on the run (What are bulls? Check the info section)",
			"Always a Safe Investment but low return",
			"Indian's favourite Investment",
		],
		tips: [
			"2009 saw a GDP growth of +7.86%",
			"Low risk, low yeild investment",
			"A safe investment",
		],
	},
	{
		options: ["Stock Market", "Fixed Deposit", "High Risk Assets"],
		roi: [-24.62, 6, -50],
		msg: [
			"It's a Crash! It's a Crash!",
			"Always a Safe Investment but low return",
			"Well , sometimes you win all and sometimes you lose all, this time you lost.",
		],
		tips: [
			"Last year market were on a bull run, will it continue?",
			"Low risk, low yeild investment",
			"Invest in a new startup",
		],
	},
	{
		options: ["Stock Market", "IPOs", "Recurring Deposit"],
		roi: [27.7, 12, 5],
		msg: [
			"One of the best year for Indian investors.Bulls were soaring high.",
			"What is an IPO ? (Check the info section)",
			"Always a Safe Investment but low return",
		],
		tips: [
			"Market crashed last year !",
			"Company is not profitable but has high potential",
			"Low risk, low yeild investment",
		],
	},
	{
		options: ["Stock Market", "Laxmi Chit Fund", "Fixed Deposits"],
		roi: [6.76, -99, 6],
		msg: [
			"Lukewarm year for the market",
			"It's a SCAM!",
			"Always a Safe Investment but low return",
		],
		tips: [
			"Last year was very good for investors",
			"Money double in 25 days ?",
			"Low risk, low yeild investment",
		],
	},
	{
		options: ["Stock Market", "Invest in Art", "IPO"],
		roi: [31.39, 10, 5],
		msg: [
			"Highest Yearly return in a decade",
			"One of the Unconventional form of Investment",
			"You have an eye for the right company",
		],
		tips: [
			"Last year market was stagnent",
			"Artist has high potential",
			"A new SAAS company, another one !",
		],
	},
	{
		options: ["Stock Market", "Cryptocurrency", "Recurring Deposits"],
		roi: [-4.0, 0, 5],
		msg: [
			"It's a bearish market. (What are bears ? Check the info section)",
			"What is Cryptocurrency?(Check the info section)",
			"Always a Safe Investment but low return",
		],
		tips: [
			"Last year saw the highest return in a decade",
			"Crypto?",
			"Low risk, low yeild investment",
		],
	},
	{
		options: ["Stock Market", "Cryptocurrency", "Fixed Deposits"],
		roi: [3.01, 1318, 6],
		msg: [
			"It's a stagnant market",
			"Just WOW! Risk Paid off!",
			"Always a Safe Investment but low return",
		],
		tips: [
			"Last year was not so good",
			"I have heard about it (High Risk)",
			"Low risk, low yeild investment",
		],
	},
	{
		options: ["Stock Market", "Cryptocurrency", "Recurring Deposits"],
		roi: [28.65, -72.6, 5],
		msg: [
			"Bulls are back at it. Market's are on BOOM",
			"High Risks and High Rewards, unfortunately not this time",
			"Always a Safe Investment but low return",
		],
		tips: [
			"Last year was bearish",
			"Last years ROI was unbelievable",
			"Low risk, low yeild investment",
		],
	},
	{
		options: ["Stock Market", "Cryptocurrency", "Fixed Deposits"],
		roi: [3.15, 87.2, 6],
		msg: [
			"Nothing's happening this year",
			"You made the right choice",
			"Always a Safe Investment but low return",
		],
		tips: [
			"Last year was bull-ish but bears can come into picture this year",
			"It saw a BOOM two years back and a crash last year",
			"Low Risks , low yeild investment",
		],
	},
	{
		options: ["Stock Market", "Cryptocurrency", "IPO"],
		roi: [-12.02, 302.8, 70],
		msg: [
			"COVID hits the market HARD!",
			"Super High Returns! But what are cryptos(Check the info section for details.)",
			"Well done ! you trusted in an innovative company and it gave you humongous returns",
		],
		tips: [
			"COVID is in the news, will it impact the market",
			"Prominent guys like Elon Musk are interested in it.Are you?",
			"A profitable company wants public capital to expand",
		],
	},
	{
		options: ["Stock Market", "Cryptocurrency", "IPO"],
		roi: [-12.02, 302.8, 70],
		msg: [
			"COVID hits the market HARD!",
			"Super High Returns! But what are cryptos(Check the info section for details.)",
			"Well done ! you trusted in an innovative company and it gave you humongous returns",
		],
		tips: [
			"COVID is in the news, will it impact the market",
			"Prominent guys like Elon Musk are interested in it.Are you?",
			"A profitable company wants public capital to expand",
		],
	},
];

const InfoModal = ({show, handleClose}) => {
	return (
		<>
			<Modal show={show} onHide={handleClose} centered size='xl'>
				<Modal.Header className='custom-modal'>
					<Modal.Title className='custom-modal-title'>
						<div>How to play</div>
						<div>
							<img
								src='/img/cross_new.png'
								className='close-button-custom'
								onClick={handleClose}
								alt='close-icon'
							/>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='custom-modal custom-modal-body'>
					<ul>
						<li>
							This game is all about investing your capital
							wisely.
						</li>
						<li>The game starts with you having 200 coins.</li>
						<li>
							Every year, starting from 2010 (to 2020), you have 3
							choices to invest your capital.
						</li>
						<li>
							The objective of the game is to maximise your
							capital by making an optimal choice in every
							financial year.
						</li>
						<li>
							Hover on the options to get information about the
							investment and make an informed decision.
						</li>
						<li>
							After every investment, you will get your returns
							and feedback on your decision.
						</li>
						<li>
							This game is meant to be a medium to familiarise
							teenagers and young adults about various investments
							and their pros and cons.
						</li>
						<li>
							You can learn about every investment option in our
							learn about section.
						</li>
					</ul>
				</Modal.Body>
			</Modal>
		</>
	);
};

const Game = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [idx, setIdx] = useState(0);
	const [coin, setCoin] = useState(200);
	const [resultVis, setResultVis] = useState("none");
	const [finalResult, setFinalResult] = useState("none");
	const [result, setResult] = useState({
		delta: 0,
		message: "",
	});

	const [showTip1, setShowTip1] = useState(false);
	const targetTip1 = useRef(null);
	const [showTip2, setShowTip2] = useState(false);
	const targetTip2 = useRef(null);
	const [showTip3, setShowTip3] = useState(false);
	const targetTip3 = useRef(null);

	const handleClick = option => {
		if (resultVis !== "none" || finalResult !== "none") return;
		setResult({
			delta: data[idx].roi[option.target.value],
			message: data[idx].msg[option.target.value],
		});
		let temp = Math.floor(
			coin + (data[idx].roi[option.target.value] * coin) / 100
		);

		setCoin(temp);

		if (idx < 10) {
			setIdx(idx => idx + 1);
		} else {
			setFinalResult("block");
			return;
		}
		setResultVis("block");
	};

	const handleResultClose = () => {
		setIdx(0);
		setCoin(200);
		setResult({
			delta: 0,
			message: "",
		});
		setResultVis("none");
		setFinalResult("none");
	};

	return (
		<div>
			<div className='header'>
				<h4 style={{
					cursor: "none"	
				}}>Fin.Learn</h4>
				<div onClick={handleShow} className="topbar">
					How to play
					<img src={info} className='info-icon' alt='info-icon' />
				</div>
				<InfoModal show={show} handleClose={handleClose} />
			</div>
			<div className='score'>
				<h1 style={{color: "rgb(233, 178, 12)", fontSize: "5rem"}}>
					{coin}
				</h1>
				<img className='coin_gif' src={logo} alt='coin-icon' />
			</div>

			<div className='quiz'>
				<div className='year'>
					<h1 style={{margin: 0}}>Year: {2010 + idx}</h1>
				</div>
				<div>
					<h4>Make your financial choice for the year: </h4>
				</div>
				<div className='options'>
					<span style={{fontSize: "2rem"}}>1)</span>

					<button
						className='button'
						value={0}
						onClick={handleClick}
						ref={targetTip1}
						onMouseEnter={() => setShowTip1(true)}
						onMouseLeave={() => setShowTip1(false)}
					>
						{data[idx].options[0]}
					</button>
					<Overlay
						target={targetTip1.current}
						show={showTip1}
						placement='right'
					>
						{props => (
							<Tooltip id='tooltip1' {...props}>
								{data[idx].tips[0]}
							</Tooltip>
						)}
					</Overlay>

					<br></br>

					<span style={{fontSize: "2rem"}}>2)</span>
					<button
						className='button'
						value={1}
						onClick={handleClick}
						ref={targetTip2}
						onMouseEnter={() => setShowTip2(true)}
						onMouseLeave={() => setShowTip2(false)}
					>
						{data[idx].options[1]}
					</button>
					<Overlay
						target={targetTip2.current}
						show={showTip2}
						placement='right'
					>
						{props => (
							<Tooltip id='tooltip2' {...props}>
								{data[idx].tips[1]}
							</Tooltip>
						)}
					</Overlay>

					<br></br>

					<span style={{fontSize: "2rem"}}>3)</span>
					<button
						className='button'
						value={2}
						onClick={handleClick}
						ref={targetTip3}
						onMouseEnter={() => setShowTip3(true)}
						onMouseLeave={() => setShowTip3(false)}
					>
						{data[idx].options[2]}
					</button>
					<Overlay
						target={targetTip3.current}
						show={showTip3}
						placement='right'
					>
						{props => (
							<Tooltip id='tooltip3' {...props}>
								{data[idx].tips[2]}
							</Tooltip>
						)}
					</Overlay>
				</div>
			</div>

			<div
				className='fResult'
				style={{display: finalResult, zIndex: "3"}}
				onClick={handleResultClose}
			>
				<h1>Final Results : </h1>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div>
						<span
							style={{
								color: coin > 200 ? "green" : "red",
								fontSize: "150px",
							}}
						>
							{coin}
						</span>
					</div>
					<img
						className='coin_gif'
						style={{width: "180px"}}
						src={logo}
						alt='coin-icon'
					/>
				</div>

				<br />
				<h1>
					<u className='message-text'>{`You started with 200 coins and ended up with ${coin} coins. (${
						(coin - 200) / 2
					})% return!`}</u>
				</h1>
				<div style={{marginTop: "5rem"}}>
					Click anywhere to continue
				</div>
			</div>

			<div
				className='result'
				style={{display: resultVis}}
				onClick={() => setResultVis("none")}
			>
				<div style={{marginTop: "-10rem", marginBottom: "8rem"}}>
					Click anywhere to continue
				</div>
				<div>
					<span
						style={{
							color: result.delta > 0 ? "green" : "red",
							fontSize: "150px",
						}}
					>
						{result.delta > 0 ? "+" : ""}
						{result.delta} %
					</span>
					<br />
					<h1>
						<u className='message-text'>{result.message}</u>
					</h1>
					<p style={{margin: "5%"}}>
						Check your total coins at top of the game.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Game;
