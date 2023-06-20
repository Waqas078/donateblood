import React from "react";
import Piechart from "../Charts/Pie";
// import Barchart from "../Charts/Bar";
import Annoucetables from "../Annoucenments/Annoucetables";
import "./Dash.css";
import { Card } from "antd";

function Dashboard() {
  return (
    <div>
      <div class="p-4">
        <div class="Adminh1">
          <div class="content rounded-3 p-3">
            <h1 class="fs-3" style={{ color: "white" }}>
              Dashboard
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          {/* <Row gutter={[24, 0]}> */}
          {/* <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24"> */}
          <div style={{ width: "80%", margin: "auto" }}>
            <Card bordered={false} className="criclebox">
              <h4 style={{ marginbottom: "-20px" }}>No of Users</h4>
              <Piechart />
            </Card>
          </div>
          {/* </Col> */}
          {/* <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
              <Card bordered={false} className="criclebox">
              <h4>Available Blood Stocks</h4>
                < Barchart />
              </Card>
            </Col> */}
          {/* </Row> */}
        </div>
        <div class="p-4">
          <div class="Adminh1">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3" style={{ color: "white" }}>
                Announcements
              </h1>
              <Annoucetables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
