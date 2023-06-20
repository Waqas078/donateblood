import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { DonationData } from '../../../../../api';

import Posts from './Posts/Posts';
import './styles.css';

  
function ViewRecordHTables() {
    const [allData, setallData] = useState([]);
    const fetchallData = async () => {
        const { data } = await DonationData();
        console.log(data);
        setallData(data);
    };

    useEffect(() => {
        fetchallData();
    }, []);

  return (
    <div>
         <table className="Customers">
            <tr >
                <th>Title</th>
                <th>Date</th>
                <th>No of Bottles </th>
                <th>Blood-Type</th>
                <th>Time</th>
            </tr>
            {allData.map((post) => (
                <tr>
                    <Posts
                    title={post.reqTitle}
                    date={post.reqDate}
                    number={post.reqNumber}
                    bottles={post.bloodGroup}
                    time={post.timestamp}
                    />
                </tr>
            ))}
    </table>
    </div>
  )
}

export default ViewRecordHTables;