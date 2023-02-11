import React from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Dropdown = (props) => {
    const checkDB = async (e) => {
        const clickedChar = e.target.innerText;

        if (props.found[clickedChar]) {
            props.setIsDropdownOpen(false);
            return console.log("already found");
        }

        const docRef = doc(db, "characters", "locations");
        const docSnap = await getDoc(docRef);
        const charList = docSnap.data();
        const charKey = Object.keys(charList).find((char) => char === clickedChar);
        const charValue = charList[charKey];
        const { x, y } = props.percentageCoordinates;
        const clickedCoordinates = [x, y];
        const tolerance = 2; // percentage

        if (
            clickedCoordinates[0] >= charValue[0] - tolerance &&
            clickedCoordinates[0] <= charValue[0] + tolerance &&
            clickedCoordinates[1] >= charValue[1] - tolerance &&
            clickedCoordinates[1] <= charValue[1] + tolerance
        ) {
            console.log("oldu");
            props.setFound({ ...props.found, [clickedChar]: true });
        } else {
            console.log("olmadı");
        }

        props.setIsDropdownOpen(false);
    };

    return (
        <div className="dropdown" style={props.dropdownCoordinates}>
            <ul>
                <li onClick={checkDB}>{props.characters[0]}</li>
                <li onClick={checkDB}>{props.characters[1]}</li>
                <li onClick={checkDB}>{props.characters[2]}</li>
            </ul>
        </div>
    );
};

export default Dropdown;
