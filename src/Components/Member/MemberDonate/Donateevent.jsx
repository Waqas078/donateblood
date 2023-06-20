import React, { useState, useEffect } from "react";
import { memberRequestsData } from "../../../api";
import Donatecard from "../DonateCards/Donatecard";

function Donateevent() {
  const [allData, setallData] = useState([]);
  const fetchallData = async () => {
    const { data } = await memberRequestsData();
    console.log(data);
    setallData(data);
  };
  useEffect(() => {
    fetchallData();
  }, []);

  return (
    <div className="wrapperr">
      {allData.map((post) => (
        <Donatecard
          postId={post._id}
          postTitle={post.reqTitle}
          postLocation={post.reqCity}
          postGroup={post.bloodGroup}
          postCreator={post.OrganisationName}
        />
      ))}
    </div>

    // <div>
    //     <div className='FormStyles'>
    // 			<div class="row">
    // 				<div class="booking-form">
    // 					<form>
    // 						<div class="row">
    // 							<div class="col-md-6">
    // 								<div class="form-group">
    // 									<span class="form-label">Flying from</span>
    // 									<input class="form-control" type="text" placeholder="City or airport"/>
    // 								</div>
    // 							</div>
    // 							<div class="col-md-6">
    // 								<div class="form-group">
    // 									<span class="form-label">Flyning to</span>
    // 									<input class="form-control" type="text" placeholder="City or airport"/>
    // 								</div>
    // 							</div>
    // 						</div>
    // 						<div class="row">
    // 							<div class="col-md-3">
    // 								<div class="form-group">
    // 									<span class="form-label">Departing</span>
    // 									<input class="form-control" type="date" required/>
    // 								</div>
    // 							</div>
    // 							<div class="col-md-3">
    // 								<div class="form-group">
    // 									<span class="form-label">Returning</span>
    // 									<input class="form-control" type="date" required/>
    // 								</div>
    // 							</div>
    // 							<div class="col-md-2">
    // 								<div class="form-group">
    // 									<span class="form-label">Adults (18+)</span>
    // 									<select class="form-control">
    // 										<option>1</option>
    // 										<option>2</option>
    // 										<option>3</option>
    // 									</select>
    // 									<span class="select-arrow"></span>
    // 								</div>
    // 							</div>
    // 							<div class="col-md-2">
    // 								<div class="form-group">
    // 									<span class="form-label">Children (0-17)</span>
    // 									<select class="form-control">
    // 										<option>0</option>
    // 										<option>1</option>
    // 										<option>2</option>
    // 									</select>
    // 									<span class="select-arrow"></span>
    // 								</div>
    // 							</div>
    // 						</div>
    // 						<div class="row">
    // 							<div class="col-md-3">
    // 								<div class="form-group">
    // 									<span class="form-label">Travel class</span>
    // 									<select class="form-control">
    // 										<option>Economy class</option>
    // 										<option>Business class</option>
    // 										<option>First class</option>
    // 									</select>
    // 									<span class="select-arrow"></span>
    // 								</div>
    // 							</div>
    // 							<div class="col-md-3">
    // 								<div class="form-btn">
    // 									<button class="submit-btn">Show flights</button>
    // 								</div>
    // 							</div>
    // 						</div>
    // 					</form>
    // 				</div>
    // 			</div>
    // 		</div>

    //         </div>
  );
}

export default Donateevent;
