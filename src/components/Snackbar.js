import React from "react";

const Snackbar = (props) => {
    return (
        <div className="snackbar">
            <span className={props.snackbarColor === "error" ? "error" : "success"}>
                {props.snackbarText}
            </span>
        </div>
    );
};

export default Snackbar;
