/** @format */

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
	const [actors, setActors] = useState([]);

	useEffect(() => {
		// Fetch the actors data
		fetch("http://localhost:4000/actors")
			.then((response) => response.json())
			.then((data) => setActors(data));
	}, []);

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Actors Page</h1>
				<div>
					{actors.map((actor) => (
						<div key={actor.name}>
							<h2>{actor.name}</h2>
							<ul>
								{actor.movies.map((movie, index) => (
									<li key={index}>{movie}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export default Actors;
