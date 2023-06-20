import React from "react";
import "./WhyUs.css";
function WhyUs() {
  return (
    <div>
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4>
                <span>Why Choose</span> Us?
              </h4>
              <p>
                Donateblood.pk is an online blood banking site where user can donate and request blood and can help blood banks and hospitlas to save peoples lives.   
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="iconn featuree_box_col_one">
                  <i class="ico fa fa-tint" aria-hidden="true"></i>
                </span>
                <h6>Blood Donations</h6>
                <p>
                  In our Platfrom finding blood is far more easier than others.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="iconn featuree_box_col_two">
                  <i class="ico fa fa-wheelchair"></i>
                </span>
                <h6>Blood Requisition</h6>
                <p>
                  User can make blood request and will recieve blood as soon as
                  possible.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="iconn featuree_box_col_three">
                  <i className="ico fa fa-hourglass-half"></i>
                </span>
                <h6>24 x 7 Customer Service</h6>
                <p>
                  If our customer has any problem and any query we are always
                  happy to help then.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="iconn featuree_box_col_four">
                  <i class="ico fa fa-tasks" aria-hidden="true"></i>
                </span>
                <h6>Rercords Management</h6>
                <p>
                  Bloodbanks and Hospitals can manage records of Users and other
                  activities performed.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="iconn featuree_box_col_five">
                  <i class="ico fa fa-plus-square"></i>
                </span>
                <h6>Blood Banks</h6>
                <p>Bloodbanks can register and can help member and other bloodbanks to find blood. </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="iconn featuree_box_col_six">
                  <i class="ico fas fa-hospital"></i>
                </span>
                <h6>Hospitals</h6>
                <p>Hospitals can register and can help member and other Hospitals to find blood. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
