import React, { useEffect, useState } from 'react'
import { getBloodbankData, getHospitalData, getUserData } from '../../../../api';
import AddH from './AddH'

function AddRecords() {
  const [info, setInfo] = useState([]);

  const fetchUserData = async () => {
    const { data } = await getUserData();
    const { data1 } = await getHospitalData();
    const { data2 } = await getBloodbankData();
    console.log(data);
    console.log(data1);
    console.log(data2);
    setInfo(data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <AddH 
      placeholder="Search User Here"
      data={info}
      />
    </div>
  )
}

export default AddRecords