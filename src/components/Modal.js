import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Modal = (props) => {
    const [input, setInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = input;
        const score = props.gameTime.toFixed(1);
        setIsModalOpen(false);
        await addDoc(collection(db, `lb-${props.scene}`), {
            name,
            score,
        });
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
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Modal;
