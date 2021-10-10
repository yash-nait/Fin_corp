import React, {useState} from "react";

import {Modal, Carousel} from "react-bootstrap";

import "./investment-options.css";

const InvestmentOption = ({name, image, message, fact, flag, glossary}) => {
	const [show, setShow] = useState(false);
	const [index, setIndex] = useState(0);

	const handleClose = () => {
		setShow(false);
		setIndex(0);
	};
	const handleShow = () => setShow(true);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<div
				className='investment-option-parent'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'
				onClick={handleShow}
				style={
					flag && {
						height: "400px",
						marginLeft: "4rem",
						marginTop: "1rem",
					}
				}
			>
				<img src={image} alt='background' />
				<h3>{name}</h3>
			</div>

			<Modal show={show} onHide={handleClose} centered size='xl'>
				<Modal.Header className='custom-modal'>
					<Modal.Title className='custom-modal-title'>
						<div>{name}</div>
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
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						className='custom-carousel'
						interval={null}
					>
						<Carousel.Item>
							<div className='custom-carousel-detail'>
								<h5>What is {name}?</h5>
								<br />
								<p>{message}</p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className='custom-carousel-detail'>
								<h5>
									{name === "Compounding"
										? "Formula"
										: "Facts"}
								</h5>
								<br />
								<p>{fact}</p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className='custom-carousel-detail'>
								<h5>
									{name === "Compounding"
										? "Defination"
										: "Glossary"}
								</h5>
								<br />
								<p>{glossary}</p>
							</div>
						</Carousel.Item>
					</Carousel>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default InvestmentOption;
