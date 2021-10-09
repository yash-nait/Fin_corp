import React from "react";
import InvestmentOption from "./InvestmentOption";

import CryptoBackground from "./BackgroundImages/crypto_background.jpg";
import StocksBackground from "./BackgroundImages/stocks_background.png";
import BankBackground from "./BackgroundImages/bank_background.png";
import MiscBackground from "./BackgroundImages/misc_background.png";

const Choices = () => {
	return (
		<>
			<InvestmentOption name='Crypto Currency' image={CryptoBackground} />
			<InvestmentOption name='Stock Market' image={StocksBackground} />
			<InvestmentOption
				name='Traditional Banking'
				image={BankBackground}
			/>
			<InvestmentOption name='Miscellaneous' image={MiscBackground} />
		</>
	);
};

export default Choices;
