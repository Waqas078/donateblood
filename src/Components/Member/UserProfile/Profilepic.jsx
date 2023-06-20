import React, { Component } from "react";
// import FileBase from "react-file-base64";
import "./UserProfile.css";
export class Profilepic extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="pages">
        <div className="contains">
          <div className="img-holders">
            <img src={profileImg} alt="" id="img" className="imgs" />
          </div>
          {/* <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          /> */}
          <div className="labuls">
            <label className="image-uploads" htmlFor="input">
              <i className="myicons fa fa-upload" aria-hidden="true"></i>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Profilepic;
