import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

import Posts from './Posts/Posts';
import './styles.css';

import {viewRecords} from '../../../../../../../api/index';
  
function ViewDonationTables() {
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
         <table className="Customers">
            <tr >
                {/* <th>Donor Name</th> */}
                <th>Name</th>
                <th>Phone no</th>
                <th>Date</th>
                <th>No of Bottels </th>
                <th>Action-Type</th>
                <th>Blood-Type</th>
                <th>Action</th>
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

export default ViewDonationTables;