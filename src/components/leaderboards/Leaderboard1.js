import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Leaderboard1 = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "lb-ps1"));
        const newList = [];
        querySnapshot.forEach((doc) => {
            const newObj = doc.data();
            newList.push(newObj);
        });
        const orderedList = orderData(newList);
        setList(orderedList);
    };

    const orderData = (array) => {
        const orderedList = array;
        orderedList.sort((a, b) => a.score - b.score);
        for (let i = 0; i < orderedList.length; i++) {
            array[i].order = i + 1;
        }
        return orderedList;
    };

    return (
        <div>
            <ul>
                {list.map((item) => {
                    return (
                        <li key={item.name}>
                            {item.order} {item.name} {item.score}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Leaderboard1;
