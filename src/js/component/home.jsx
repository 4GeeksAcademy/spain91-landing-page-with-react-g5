import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { CardList } from "./CardList.jsx";
import Navbar from "./Navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 justify-content-center">
			<Navbar />
			<Jumbotron />
			<CardList />
			<Footer />
		</div>
	);
};

export default Home;
