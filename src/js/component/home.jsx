import React from "react";
import Navbar from "./navbar"
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

const cards = [
	{
		image: "https://media.istockphoto.com/id/539271875/es/foto/bobinado-mountain-road-sin-coches.jpg?s=2048x2048&w=is&k=20&c=cMyidznZN8okQNW-oFdHWnm2U8Go4Z0iYEGIHUscxOA=",
		title: "Road",
		description: "Parque con lindo paisaje",
	},
	{
		image: "https://cdn.pixabay.com/photo/2020/03/15/13/15/desert-4933581_960_720.jpg",
		title: "Desert",
		description: "Rock in the desert",
	},
	{
		image: "https://cdn.pixabay.com/photo/2013/08/05/06/21/sunset-169925_1280.jpg",
		title: "Sunset",
		description: "Sunset over the sea",
	},
	{
		image: "https://cdn.pixabay.com/photo/2020/02/11/10/24/lake-4839058_1280.jpg",
		title: "Lake",
		description: "Reflections on the lake",
	}
];

//create your first component
const Home = () => {
	return (
		<div>
		  <Navbar/>
          <Jumbotron/>
		  <div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
