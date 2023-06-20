import React from 'react';
import Hospitals from '../Hospitals/Hospitals';
const Hospitallay = () => {
  return (
    <>
      <div>
        <div class="p-4">
          <div class="Adminh1">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3" style={{color:'white'}}>Hospitals</h1>
              <Hospitals/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hospitallay;