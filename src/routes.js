/** @format */

import { Route, Routes } from "react-router-dom";
import Actors from "./pages/Actors";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import MovieCard from "./components/MovieCard";
import NotFound from "./components/NotFound";
import MovieDetails from "./pages/MovieDetails";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/movies",
		element: <Movie />,
	},
	{
		path: "/movie/:id",
		element: <MovieCard />,
	},
	{
		path: "/actors",
		element: <Actors />,
	},
	{
		path: "/directors",
		element: <Directors />,
	},
	{
		path: "*", // Catch-all route for 404
		element: <NotFound />,
	},
	{
		path: "/movies/:id",
		element: <MovieDetails />, // Route to movie details
	},
];

export default routes;
