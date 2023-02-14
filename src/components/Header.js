import React from "react";
import { Link, NavLink } from "react-router-dom";
import ps from "../assets/ps.png";

const Header = () => {
    return (
        <nav className="header">
            <div className="logo">
                <Link to="/photoTag/">
                    <span className="word">find</span>This
                    <img src={ps} alt="logo" />
                </Link>
            </div>
            <div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/photoTag/"> Scenes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photoTag/leaderboard"> Leaderboards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photoTag/about"> About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
