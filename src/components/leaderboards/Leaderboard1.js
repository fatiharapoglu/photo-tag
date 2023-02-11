import React from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Leaderboard1 = () => {
    const test = async () => {
        const querySnapshot = await getDocs(collection(db, "lb-ps1"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    };
    test();

    return (
        <div>
            <div>leaderboard 1</div>
        </div>
    );
};

export default Leaderboard1;
