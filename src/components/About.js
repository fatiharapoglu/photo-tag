import React from "react";

const About = () => {
    return (
        <div className="information">
            <h1 className="text-shadow">About the Project</h1>
            <p>
                This project was made by{" "}
                <a href="https://github.com/fatiharapoglu">Fatih Arapoğlu</a>. The logic is created
                with React and used Firebase for a back-end database. Players select a level and
                must find 3 hidden characters which are pre-defined. Your score is the time passed
                and saved when you find all 3 characters.
            </p>
            <h3>Features</h3>
            <ul>
                <li>4 unique PlayStation levels.</li>
                <li>Leaderboards for all levels that updates in realtime.</li>
                <li>
                    <a href="https://www.npmjs.com/package/bad-words">Bad-Words</a> library is used
                    for censoring... bad-words when player input includes bad words.
                </li>
                <li>
                    Snackbar alerts with color based on error or success, giving information about
                    certain situations.
                </li>
                <li>Responsive design.</li>
                <li>Audio feedback when guessed correct or incorrect.</li>
            </ul>

            <h2>
                Level images provided by{" "}
                <a href="https://www.artstation.com/pierreroussel">Pierre Roussel.</a>
            </h2>
        </div>
    );
};

export default About;
