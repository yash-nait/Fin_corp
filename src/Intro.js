import React from "react";
import "./Intro.css";

import gsap from "gsap";

function Intro({setIntro}) {
	const tl = gsap.timeline({defaults: {ease: "power1.out"}});

	const animate = () => {
		tl.to(".intro", {y: "-100vh", duration: 3});
		setIntro(false);
	};

	return (
		<div className='intro'>
			<button className='button1' onClick={animate}>
				Start Game!
			</button>
		</div>
	);
}

export default Intro;
