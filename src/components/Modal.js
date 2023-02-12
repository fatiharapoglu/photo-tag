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
        e.preventDefault();
        if (input.length > 20) {
            return props.handleSnackbar('Nice try, "hacker".');
        }
        const name = filter.clean(input);
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

    return (
        <div className={isModalOpen ? "modal" : "modal hidden"}>
            <div>{props.gameTime.toFixed(1) + " seconds"}</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name please."
                    value={input}
                    maxLength="20"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Modal;
