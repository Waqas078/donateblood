import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

import Posts from './Posts/Posts';
import './styles.css';

import {viewRecordOrganisation} from '../../../../../api/index';
  
function ViewDonationTables() {
    const [allData, setallData] = useState([]);
    const fetchallData = async () => {
        const { data } = await viewRecordOrganisation();
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
                <th>No of Bottles </th>
                <th>Action-Type</th>
                <th>Blood-Type</th>
                <th>Action</th>
            </tr>
            {allData.map((post) => (
                <tr>
                    <Posts 
                    name={post.name}
                    phoneNumber={post.phoneNumber}
                    time={post.timestamp}
                    bottles={post.bottlesNumber}
                    action={post.action}
                    bloodGroup={post.bloodGroup}
                    />
                </tr>
            ))}
    </table>
    </div>
  )
}

export default ViewDonationTables;