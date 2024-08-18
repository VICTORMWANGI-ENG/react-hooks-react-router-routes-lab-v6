/** @format */

import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={createBrowserRouter(routes)}>
			<routes />
		</RouterProvider>
	</React.StrictMode>
);
