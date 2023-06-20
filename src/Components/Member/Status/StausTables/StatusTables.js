import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Posts from "./Posts/StausPosts";
import "./styles.css";

import { viewAppointments } from "../../../../api/index";

function AnnouceTables() {
  const [allData, setallData] = useState([]);
  const fetchallData = async () => {
    const { data } = await viewAppointments();
    console.log(data);
    setallData(data);
  };

  useEffect(() => {
    fetchallData();
  }, []);

  return (
    <div>
      <table className="customers">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number of Bottles</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
        {allData.map((post) => (
          <tr>
            <Posts
              name={post.name}
              email={post.email}
              bottles={post.numberOfBottles}
              time={post.timestamp}
            />
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AnnouceTables;
