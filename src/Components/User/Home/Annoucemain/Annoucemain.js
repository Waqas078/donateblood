import React from "react";
import Annoucetables from "../Annoucemain/Annoucetables";
import './Dash.css';

function Annoucemain() {
  return (
    <>
    <section class="contoact" id="contact">
        <div class="overolay">      
        <div class="p-4">
          <div class="Admnh1">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3" style={{ color: 'white' }}>Annoucemnets</h1>
            </div>
          </div>
          <Annoucetables/>
        </div>
    </div>
    </section>
    </>
  );
}

export default Annoucemain;
