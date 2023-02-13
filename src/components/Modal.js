import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import Filter from "bad-words";
import { trBadWords } from "../badwordlist";

const Modal = (props) => {
    const [input, setInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();
    const filter = new Filter();
    filter.addWords(...trBadWords);

    const handleSubmit = async (e) => {
        let name;
        e.preventDefault();
        if (input.length > 20) {
            return props.handleSnackbar('Nice try, "hacker".');
        }
        if (input.at(0) === ":") {
            return props.handleSnackbar('Please provide an input which does not start with ":"');
        }
        name = filter.clean(input);
        const score = Number(props.gameTime.toFixed(1));
        await addDoc(collection(db, `lb-${props.selectedScene}`), {
            name,
            score,
        });
        setIsModalOpen(false);
        navigate(`/leaderboard`);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleCloseBtn = () => {
        setIsModalOpen(false);
        navigate(`/`);
    };

    return (
        <div className={isModalOpen ? "modal" : "modal hidden"}>
            <h1>GAME OVER</h1>
            <h2>
                You found all characters in <span>{props.gameTime.toFixed(1)}</span> seconds.
            </h2>
            <p>You can submit your score and see your rank in leaderboard.</p>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name please."
                    value={input}
                    maxLength="20"
                    required
                />
                <button className="btn" type="submit">
                    Submit your score.
                </button>
            </form>
            <button onClick={handleCloseBtn} className="close-btn btn"></button>
        </div>
    );
};

export default Modal;
