/** @format */

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
	const [directors, setDirectors] = useState([]);

	useEffect(() => {
		// Fetch the directors data from the API
		fetch("http://localhost:4000/directors")
			.then((response) => response.json())
			.then((data) => setDirectors(data));
	}, []);

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Directors Page</h1>
				<div>
					{directors.map((director) => (
						<div key={director.name}>
							<h2>{director.name}</h2>
							<ul>
								{director.movies.map((movie, index) => (
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

export default Directors;
