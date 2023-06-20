import React from "react";
import "./Annoucenment.css";
import AnnouceTables from "./AnnouceTables/AnnouceTables";
function Annoucenment() {
  return (
    <div>
      <div className="p-4 NNP">
        <div className="welcome">
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">Announcements</h1>
          </div>
        </div>
        <AnnouceTables/>
      </div>
    </div>
  );
}

export default Annoucenment;
