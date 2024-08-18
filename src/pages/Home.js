/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// Fetch the movies data from the API
		fetch("http://localhost:4000/movies")
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>Home Page</h1>
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<h2>{movie.title}</h2>
							<Link to={`/movie/${movie.id}`}>View Info</Link>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export default Home;
