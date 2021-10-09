import React from "react";

import "./investment-options.css";

const InvestmentOption = ({name, image}) => {
	return (
		<>
			<div
				className='investment-option-parent'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'
				// style={{backgroundImage: `url(${image})`}}
			>
				<img src={image} />
				<h3>{name}</h3>
			</div>

			<div
				className='modal fade '
				id='exampleModal'
				tabindex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered modal-xl'>
					<div className='modal-content custom-modal'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{name}
							</h5>
							<div
								type='button'
								data-bs-dismiss='modal'
								aria-label='Close'
								className='close-button-custom'
							>
								<img src='/img/cross_new.png' width='32px' />
							</div>
						</div>
						<div className='modal-body'>...</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InvestmentOption;
