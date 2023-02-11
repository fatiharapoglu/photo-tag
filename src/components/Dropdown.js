import React from "react";

const Dropdown = (props) => {
    return (
        <div className="dropdown" style={props.dropdownCoordinates}>
            <ul>
                <li>Crash</li>
                <li>Option 2</li>
                <li>X</li>
            </ul>
        </div>
    );
};

export default Dropdown;
