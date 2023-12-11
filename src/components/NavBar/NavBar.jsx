import { NavLink } from 'react-router-dom';
import './NavBar.css';



export default function NavBar() {
    return (
        <nav>
            <NavLink to="/movies" activeClassName="active-link">
                Movies
            </NavLink>
            <span className="nav-separator">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/actors" activeClassName="active-link">
                Actors
            </NavLink>     
        </nav>
    )
}