/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav className='navbar'>
			<NavLink to='/'>Home</NavLink>

			<NavLink to='/movies'>Movies</NavLink>

			<NavLink to='/actors'>Actors</NavLink>

			<NavLink to='/directors'>Directors</NavLink>
		</nav>
	);
}

export default NavBar;
