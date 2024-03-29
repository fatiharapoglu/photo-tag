import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import Filter from "bad-words";

import { db } from "../firebase";
import { trBadWords } from "../badwordlist";
import Loading from "./Loading";

const Modal = (props) => {
    const [input, setInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const filter = new Filter();
    filter.addWords(...trBadWords);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let name;
        if (input.length > 20) {
            return props.handleSnackbar('Nice try, "hacker".', "error");
        }
        if (
            input.at(0) === ":" ||
            input.at(0) === "(" ||
            input.at(0) === ")" ||
            input.at(0) === "[" ||
            input.at(0) === "]"
        ) {
            return props.handleSnackbar(
                'Please provide an input which does not start with ":" or parentheses.',
                "error"
            );
        }
        name = filter.clean(input);
        const score = Number(props.gameTime.toFixed(1));
        setIsLoading(true);
        await addDoc(collection(db, `lb-${props.selectedScene}`), {
            name,
            score,
        });
        setIsLoading(false);
        setIsModalOpen(false);
        navigate("/leaderboard");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleCloseBtn = () => {
        setIsModalOpen(false);
        navigate("/");
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
                {isLoading ? (
                    <Loading />
                ) : (
                    <button className="btn" type="submit">
                        Submit your score.
                    </button>
                )}
            </form>
            <button onClick={handleCloseBtn} className="close-btn btn"></button>
        </div>
    );
};

export default Modal;
