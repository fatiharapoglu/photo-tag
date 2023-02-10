import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <div>
                <Link to="/">logo</Link>
            </div>
            <div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/"> Scenes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard"> Leaderboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"> About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
