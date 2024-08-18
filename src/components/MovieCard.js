/** @format */

import { Link } from "react-router-dom";

function MovieCard({ id, title, poster, description, rating, genre }) {
	return (
		<article>
			<h2>{title}</h2>
			<img src={poster} alt={`${title} Poster`} />
			<p>{description}</p>
			<p>Rating: {rating}</p>
			<p>Genre: {genre}</p>
			<Link to={`/movie/${id}`}>View Details</Link>
			<button>Add to Favorites</button>
			<button>Watch Trailer</button>
		</article>
	);
}

export default MovieCard;
