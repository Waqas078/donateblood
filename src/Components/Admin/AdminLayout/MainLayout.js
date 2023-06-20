import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import "./Main.css";
// import "antd/dist/antd.css";
// import "antd/dist/reset.css";
import "antd/dist/reset.css";
import useAuth from "../../../hooks/useAuth";

const { Header, Content, Sider } = Layout;

function MainLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  useEffect(() => {
    if (code === "1") {
      navigate("/");
    }
  }, [navigate, code]);
  const handleLogout = async () => {
    await logout();
    setCode("1");
  };
  return (
    <Layout>
      <Header className="header" style={{ height: "65px" }}>
        <div>
          <h1
            style={{
              color: "white",
              float: "left",
              fontSize: "30px",
              marginLeft: "30px",
            }}
          >
            <img src={require("./droop.png")} style={{ width: "38px" }} />
          </h1>
          <h1 className="hui">Donateblood.pk</h1>
        </div>
      </Header>
      <Layout>
        <Sider
          style={{ height: "100vh" }}
          width={200}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            className="AdminMenu"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={[
              {
                key: "1",
                label: (
                  <Link
                    to="/admin/"
                    className="Linkss"
                    style={{ textDecoration: "none" }}
                  >
                    Dashboard
                  </Link>
                ),
              },
              {
                key: "2",
                label: (
                  <Link
                    to="/admin/Adminprofile"
                    style={{ textDecoration: "none" }}
                  >
                    Admin Profile
                  </Link>
                ),
              },

              {
                key: "3",
                label: (
                  <Link
                    to="/admin/AdminMembers"
                    style={{ textDecoration: "none" }}
                  >
                    Members
                  </Link>
                ),
              },
              {
                key: "4",
                label: (
                  <Link
                    to="/admin/AdminBloodbanks"
                    style={{ textDecoration: "none" }}
                  >
                    Blood banks
                  </Link>
                ),
              },
              {
                key: "5",
                label: (
                  <Link
                    to="/admin/AdminHospitals"
                    style={{ textDecoration: "none" }}
                  >
                    Hospitals
                  </Link>
                ),
              },
              {
                key: "6",
                label: (
                  <Link
                    to="/admin/AdminUploadAnnouncement"
                    style={{ textDecoration: "none" }}
                  >
                    Upload Announcement
                  </Link>
                ),
              },
              {
                key: "7",
                label: <Link onClick={handleLogout}>Logout</Link>,
              },
            ]}
          />
        </Sider>
        <Layout
          className="Layout"
          style={{
            padding: "0 24px 24px",
            background:
              "linear-gradient(to right, rgba(235, 169, 179, 0.58), rgba(152, 11, 33, 0.98))",
          }}
        >
          <Content
            className="Content-top"
            style={{
              padding: 24,
              minHeight: 280,
              background: "white",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
