import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase";
import trueSound from "../assets/sounds/true.wav";
import falseSound from "../assets/sounds/false.wav";

const Dropdown = (props) => {
    const checkDB = async (e) => {
        const clickedChar = e.target.innerText;
        props.setIsDropdownOpen(false);

        if (props.found[clickedChar]) {
            return props.handleSnackbar("You have already found this character.", "error");
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
            props.setFound({ ...props.found, [clickedChar]: true });
            new Audio(trueSound).play();
            const howManyLeft =
                Object.keys(props.found).filter((key) => props.found[key] !== true).length - 1;
            if (howManyLeft === 0) return;
            props.handleSnackbar(`Correct, ${howManyLeft} characters left.`);
        } else {
            new Audio(falseSound).play();
            props.handleSnackbar("Nope, try again.", "error");
        }
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
