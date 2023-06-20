import React from "react";
//import { postAnnounce } from '../../../api/index';
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { postAnnounce } from "../../../api";
const { TextArea } = Input;

function AdminProfile() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async () => {
    try {
      const { data } = await postAnnounce({ title, description });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="p-4">
        <div class="Adminh1">
          <div class="content rounded-3 p-3">
            <h1 class="fs-3" style={{ color: "white" }}>
              Upload Events
            </h1>
          </div>
        </div>

        <div style={{ width: "90%", marginLeft: "auto", marginTop: "50px" }}>
          <Form
            style={{ margin: "auto" }}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            onFinish={handleSubmit}
            layout="horizontal"
          >
            <Form.Item label="Title Of Announcement: ">
              <Input
                className=" m-1 p-2 px-8 w-full mb-1 rounded  border border-blue-300  bg-[#E8F6FE]"
                type="title"
                placeholder="Title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Description: ">
              <TextArea
                rows={4}
                type="description"
                placeholder="Description"
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form.Item>
                <button
                  type="submit"
                  style={{
                    width: "100px",
                    height: "35px",
                    border: "2px solid darkred",
                    borderRadius: "10px",
                    background: "Darkred",
                    color: "white",
                  }}
                >
                  Submit
                </button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
