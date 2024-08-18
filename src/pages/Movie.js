/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
	const [movie, setMovie] = useState(null);
	const { id: movieId } = useParams();

	useEffect(() => {
		fetch(`http://localhost:4000/movies/${movieId}`)
			.then((response) => response.json())
			.then((data) => setMovie(data))
			.catch((error) =>
				console.error("Error fetching movie data:", error)
			);
	}, [movieId]);

	if (!movie) {
		return <h1>Loading...</h1>;
	}

	const genres = movie.genres.map((genre) => (
		<span key={genre} style={{ marginRight: "8px" }}>
			{genre}
		</span>
	));

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>{movie.title}</h1>
				<p>{movie.time} minutes</p>
				<p>Genres: {genres}</p>
			</main>
		</>
	);
}

export default Movie;
