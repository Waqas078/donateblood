
import { Col, Row } from 'antd';
import React from 'react';

import Post from './Post/Post.js'

import { useEffect } from "react";
import { useState } from "react";

import {getDonationData} from '../../../api/index';

function DonateBlood (setCurrentId) {
  const [allData, setallData] = useState([]);
  const fetchallData = async () => {
    const { data } = await getDonationData();
    console.log(data);
    setallData(data);
  };

  useEffect(() => {
    fetchallData();
  }, []);

  return (
    <>
        {/* <Divider orientation="left">Responsive</Divider> */}
      <Row style={{marginBottom:"10px"}}>
          
      
        {allData.map((post) => (
            <Col key= {post._id} span={6} xs={{ order: 4, }} sm={{ order: 3, }} md={{ order: 1, }} lg={{ order: 2, }} >
                <Post 
                postTitle={post.reqTitle}
                postDescription={post.reqDescription}
                postId={post.reqCreator}
                setCurrentId={ setCurrentId } 
                />
            </Col>
        ))}
        </Row>
      </>
    );
};
export default DonateBlood;
