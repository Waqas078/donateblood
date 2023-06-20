import React, { useState, useEffect } from "react";
import { getUserData } from "../../../../api";
// import { createRecord } from "../../../../api";
// import { getUserData } from "../../../../api";
import Footer from "../../Footer/Footer";
import Navbar from "../../Sidenav/Navbar";
function AddD({placeholder,data}) {

  const [group, setGroup] = useState("A+");
  const [number, setNumber] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState('');
  const [action, setAction] = useState('');
  const [info, setInfo] = useState('')

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [trigger, setTrigger] = useState(false);
  // const fetchUserData = async () => {
  //   const { list } = await getUserData();
  //   console.log(list);
  //   setInfo(list);
  // };
  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  const handleClick =(props) => {
    console.log(props);
    setPhone(props);
    setWordEntered(props);
    setTrigger(false);
  };


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.phoneNumber.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log({group, number, phone, name, action});
      // const { data } = await createRecord({group, number, phoneNumber, name, action});
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <body>
      <Navbar />
      <div className="Membermain">
        <div class="p-4">
          <div class="welcomeDonateblood ">
            <div class="content rounded-3 p-3">
              <h1 class="fs-3">Add Records</h1>
            </div>
          </div>
        </div>
        <h2 className="Book">Add Donations and Requests records</h2>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row">
              <div className="FormStyles">
                <div class="row">
                  <div class="booking-form">
                    <form onSubmit={handleSubmit} >
                      <div class="row">
                        <div class="col-md-12">
                          <span class="form-label">Blood Type</span>
                          {/* <form className="formm"> */}
                          <div style={{display:'flex'}} value={group} onChange={(e) => setGroup(e.target.value)}>
                              <label className="labeel">
                                <input
                                  className="check"
                                  type="radio"
                                  name="radio"
                                  value="A+"
                                  // checked
                                />
                                <span className="span">A+</span>
                              </label>
                              <label className="labeel">
                                <input
                                  className="check"
                                  type="radio"
                                  value="A-"
                                  name="radio"
                                />
                                <span className="span">A-</span>
                              </label>
                              <label className="labeel">
                                <input
                                  value="B+"
                                  className="check"
                                  type="radio"
                                  name="radio"
                                />
                                <span className="span">B+</span>
                              </label>
                              <label className="labeel">
                                <input
                                  value="B-"
                                  className="check"
                                  type="radio"
                                  name="radio"
                                  // checked
                                />
                                <span className="span">B-</span>
                              </label>
                              <label className="labeel">
                                <input
                                  value="O+"
                                  className="check"
                                  name="radio"
                                  type="radio"
                                />
                                <span className="span">O+</span>
                              </label>
                              <label className="labeel">
                                <input
                                  value="O-"
                                  className="check"
                                  type="radio"
                                  name="radio"
                                />
                                <span className="span">O-</span>
                              </label>
                              <label className="labeel">
                                <input
                                  value="AB+"
                                  className="check"
                                  type="radio"
                                  name="radio"
                                />
                                <span className="span">AB+</span>
                              </label>
                              <label className="labeel">
                                <input
                                  value="AB-"
                                  className="check"
                                  type="radio"
                                  name="radio"
                                />
                                <span className="span">AB-</span>
                              </label>
                            </div>
                          {/* </form> */}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Name</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Name"
                              value={name} onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Phone No (03xxxxxxxxx)</span>
                            <input
                              class="form-control"
                              type="text"
                              placeholder={placeholder}
                              onChange={handleFilter}
                              value={wordEntered}
                              name="search"
                              onClick={()=>{setTrigger(true)}}
                              required
                            />
                            {filteredData.length !== 0 && (
                              <div className="absolute top-[17rem] rounded-br-lg rounded-bl-lg right-[75px] h-auto my-1 mx-7 w-[74%] mb-1 border border-blue-300 bg-[#E8F6FE] ">
                                <div className="list">
                                { trigger === true ?  filteredData.slice(0, 15).map((user) => (
                                  <button key={user._id} onClick={()=>{handleClick(user._id)}}
                                  style={{width:"100%", color:"white", backgroundColor:'blue'}} 
                                  className=" text-lg py-2 pl-8 hover:bg-[#80808052] cursor-pointer"
                                  >
                                    {user.phoneNumber}
                                  </button>
                                )) : ''
                              }
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      {/* </div>
                      <div class="row"> */}
                        {/* <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">Date</span>
                            <input class="form-control" type="date" required />
                          </div>
                        </div> */}
                        <div class="col-md-5">
                          <div class="form-group">
                            <span class="form-label">
                              No of Bottles 
                            </span>
                            <input
                              class="form-control"
                              type="number"
                              value={number} onChange={(e) => setNumber(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        </div>
                        <div style={{marginLeft:"100px"}}class='row'>
                          <div class="col-md-5">
                            <div class="form-btn">
                              <button onClick={()=>{setAction("add")}} type='submit' class="submit-btn">Add Bottle</button>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="form-btn">
                              <button onClick={()=>{setAction("remove")}} type='submit' class="submit-btn">Remove Bottle</button>
                            </div>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </body>
  );
}

export default AddD;
