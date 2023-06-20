import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserType } from "../../../api";
import Hospital from "../../Hospital/Hospital";
import Member from "../../Member/Member";
import { Skeleton } from "antd";

function Dash() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [get, setGet] = useState("false");

  const fetchProfile = async () => {
    const { data } = await getUserType();
    console.log(data);
    setUser(data);
    setGet("true");
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={{ backgroundColor: "#3c3f58", height: "100%" }}>
      {/* {user.type === "member" ? <Member /> : null} */}
      {user.type === "member" ? navigate("/Member") : null}
      <div style={{ margin: "auto" }}>
        {get === "false" ? <Skeleton /> : null}
      </div>
      {user.type === "hospital" ? navigate("/Hospital") : null}
      {/* {user.type === "hospital" ? <Hospital /> : null} */}
      {user.type === "bloodbank" ? navigate("/Hospital") : null}
    </div>
  );
}

export default Dash;
