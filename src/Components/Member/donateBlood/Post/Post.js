import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;


const Post = (props) => {
  
  return(
    <Card
      style={{
        width: 250,
        marginBottom: 1,
        hoverable:true
      }}
      cover={
        <img
          alt="example"
          // src="https://cdn-icons-png.flaticon.com/512/1297/1297136.png"
          // src='https://img.freepik.com/premium-psd/building-hospital-medic-front-view-3d-icon-rendering-illustration-transparent-background_557469-1197.jpg?w=2000'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png'
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        label={props.postCreator}
        title={props.postTitle}
        description={props.postDescription}
        />
    </Card>

    // <div className=" w-[26%] m-10 h-[392px] rounded-3xl border-[5px] border-white ">
    //     {/* <img
    //       className="h-[380px] w-full rounded-3xl"
    //       // src={groundimg}
    //       alt="groundimg"
    //     /> */}
    //     <div className="relative bottom-[10.5rem]  bg-[#544b4b73] text-white rounded-3xl">
    //       <p className="flex items-center text-[20px] mt-2 ml-5 pt-[11px] ">
    //         {postTitle}
    //         <img
    //           className="h-[16px] w-[16px] ml-3"
    //           src="/images/homeimg/star.png"
    //           alt=""
    //         />
    //         <img
    //           className="h-[16px] w-[16px] ml-1"
    //           src="/images/homeimg/star.png"
    //           alt=""
    //         />
    //         <img
    //           className="h-[16px] w-[16px] ml-1 "
    //           src="/images/homeimg/star.png"
    //           alt=""
    //         />
    //       </p>
    //       <p className="flex items-center ml-5">
    //         <img
    //           className="mr-2"
    //           height="20px"
    //           width="15px"
    //           src="/images/homeimg/locationlogo.png"
    //           alt=""
    //         />
    //         {postDescription}
    //       </p>
    //       <p className=" ml-5">
    //         5 side ground with booking of 2000 <br /> hour
    //       </p>
    //       <button className="mx-[5.5rem] mb-[11px] rounded-lg w-[134px] py-2 text-sm border border-white hover:bg-white hover:text-black text-white">
    //         Book Now
    //       </button>
    //     </div>
    //   </div>

  );
};
export default Post;