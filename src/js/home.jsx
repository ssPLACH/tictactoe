import React from "react";
import Card from "./card"


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div className="bg-success text-white text-center">
				<h1 className="text-center mt-5">Let's Play Tic Tac Toe!</h1>
				<h3 className="text-center mt-5">Pick A Weapon</h3>
				<Card />
			</div>
		</>
	);
};

export default Home;
