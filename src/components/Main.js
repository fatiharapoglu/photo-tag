import { Link } from "react-router-dom";

import ps1 from "../assets/scenes/pierre-roussel-ps1-phone2.jpg";
import ps2 from "../assets/scenes/pierre-roussel-ps2-phone2.jpg";
import ps3 from "../assets/scenes/pierre-roussel-ps3-phone2.jpg";
import ps4 from "../assets/scenes/pierre-roussel-ps4-phone2.jpg";

const Main = (props) => {
    const selectScene = (e) => {
        const selected = e.target.alt;
        props.setSelectedScene(selected);
    };

    return (
        <main className="main">
            <h1 className="text-shadow">CHOOSE A SCENE</h1>
            <div className="scenes">
                <Link onClick={selectScene} to="/game">
                    <img src={ps1} alt="ps1" />
                </Link>
                <Link onClick={selectScene} to="/game">
                    <img src={ps2} alt="ps2" />
                </Link>
                <Link onClick={selectScene} to="/game">
                    <img src={ps3} alt="ps3" />
                </Link>
                <Link onClick={selectScene} to="/game">
                    <img src={ps4} alt="ps4" />
                </Link>
            </div>
        </main>
    );
};

export default Main;
