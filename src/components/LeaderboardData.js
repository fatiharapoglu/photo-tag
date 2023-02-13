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
            <div className="table">
                <div className="row">
                    <div className="cell table-header">RANK</div>
                    <div className="cell table-header">NAME</div>
                    <div className="cell table-header">TIME (seconds)</div>
                </div>
                {list.map((item) => {
                    return (
                        <div className="row" key={item.name + item.order}>
                            <div className="cell">{item.order}</div>
                            <div className="cell">{item.name}</div>
                            <div className="cell">{item.score}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LeaderboardData;
