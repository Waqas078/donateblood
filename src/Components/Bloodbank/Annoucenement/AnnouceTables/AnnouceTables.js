import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

import Posts from './Posts/Posts';
import './styles.css';

import {viewRecords} from '../../../../api/index';
  
function AnnouceTables() {
    const [allData, setallData] = useState([]);
    const fetchallData = async () => {
        const { data } = await viewRecords();
        console.log(data);
        setallData(data);
    };

    useEffect(() => {
        fetchallData();
    }, []);

  return (
    <div>
         <table className="customers">
            <tr >
                {/* <th>Donor Name</th> */}
                <th>Tittle</th>
                <th>Acoucenents</th>
                <th>Time</th>
            </tr>
            {allData.map((post) => (
                <tr>
                    <Posts 
                    bloodGroup={post.bloodGroup}
                    bottlesDonated={post.bottlesDonated}
                    phoneNumber={post.phoneNumber}
                    />
                </tr>
            ))}
    </table>
    </div>
  )
}

export default AnnouceTables;