/** @format */

// MovieDetails.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function MovieDetails() {
	const { id } = useParams(); // Get the movie ID from the URL
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		// Fetch movie details using the ID from the URL
		fetch(`http://localhost:4000/movies/${id}`)
			.then((response) => response.json())
			.then((movie) => setMovie(movie))
			.catch((error) =>
				console.error("Error fetching movie details:", error)
			);
	}, [id]); // Fetch details whenever the ID changes

	if (!movie) {
		return <p>Loading...</p>; // Display a loading message while fetching
	}

	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<article>
					<h1>{movie.title}</h1>
					<p>Time: {movie.time}</p>
					<p>Genres:</p>
					<ul>
						{movie.genres.map((genre, index) => (
							<li key={index}>
								<span>{genre}</span>
							</li>
						))}
					</ul>
				</article>
			</main>
		</>
	);
}

export default MovieDetails;
