import React from "react";
import InvestmentOption from "./InvestmentOption";
import Details from "./ChoicesDetails";

import CryptoBackground from "./images/BackgroundImages/crypto_background.jpg";
import StocksBackground from "./images/BackgroundImages/stocks_background.png";
import BankBackground from "./images/BackgroundImages/bank_background.png";
import MiscBackground from "./images/BackgroundImages/misc_background.png";

const Choices = () => {
	return (
		<>
			<h4
				style={{
					textAlign: "center",
					marginRight: "12%",
					marginTop: "2rem",
					marginBottom: "4rem",
					cursor: "none"
				}}
			>
				Learn about
			</h4>
			<InvestmentOption
				name='Crypto Currency'
				image={CryptoBackground}
				message={Details.crypto.info}
				fact={Details.crypto.fact}
				glossary={Details.crypto.glossary}
			/>
			<InvestmentOption
				name='Stock Market'
				image={StocksBackground}
				message={Details.stock.info}
				fact={Details.stock.fact}
				glossary={Details.stock.glossary}
				/>
			<InvestmentOption
				name='Traditional Banking'
				image={BankBackground}
				message={Details.bank.info}
				fact={Details.bank.fact}
				glossary={Details.bank.glossary}
				/>
			<InvestmentOption name='Miscellaneous Investing' 
				image={MiscBackground} 
				message={Details.miscellaneous.info} 
				fact={Details.miscellaneous.fact}
				glossary={Details.miscellaneous.glossary}
			/>
		</>
	);
};

export default Choices;
