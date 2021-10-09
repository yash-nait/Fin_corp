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
			<InvestmentOption
				name='Crypto Currency'
				image={CryptoBackground}
				message={Details.crypto.info}
				fact={Details.crypto.fact}
			/>
			<InvestmentOption
				name='Stock Market'
				image={StocksBackground}
				message={Details.stock.info}
				fact={Details.stock.fact}
			/>
			<InvestmentOption
				name='Traditional Banking'
				image={BankBackground}
			/>
			<InvestmentOption name='Miscellaneous' image={MiscBackground} />
		</>
	);
};

export default Choices;
