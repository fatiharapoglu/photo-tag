import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const LeaderboardData = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getData();
    }, [props.selectedScene]);

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, `lb-${props.selectedScene}`));
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
        <div className="leaderboard-data">
            <h1 className="text-shadow">{props.selectedScene}</h1>
            <table>
                <thead>
                    <tr>
                        <th>RANK</th>
                        <th>NAME</th>
                        <th>TIME (seconds)</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => {
                        return (
                            <tr key={item.name + item.order}>
                                <td>{item.order}</td>
                                <td>{item.name}</td>
                                <td>{item.score}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardData;
