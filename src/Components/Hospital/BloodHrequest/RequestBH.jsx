import React,{useState, useEffect} from "react";
import { createRequest, getBloodbankData, getHospitalData } from "../../../api";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
function Donate() {
  const [group, setGroup] = useState("A+");
  const [organisation, setOrganisation] = useState(0);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [choice, setChoice] = useState('hospital');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line
  const [placeholder, setPlaceholder] = useState('Placeholder');

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [trigger, setTrigger] = useState(false);


  const [hospitalInfo, setHospitalInfo] = useState("");
  const [bloodbankInfo, setBloodbankInfo] = useState("");
  
  const fetchOrganisationData = async () => {
    const {data} = await getHospitalData();
    console.log(data);
    setHospitalInfo(data);
  };
  useEffect(() => {
    fetchOrganisationData();
  }, []);
  const fetchBloodData = async () => {
    const {data} = await getBloodbankData();
    console.log(data);
    setBloodbankInfo(data);
  };
  useEffect(() => {
    fetchBloodData();
  }, []);


  const handleClick =(props) => {
    console.log(props._id);
    console.log(props.firstName);
    setOrganisation(props._id);
    setName(props.firstName);
    setWordEntered(props.firstName);
    setTrigger(false);
  };


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = choice === 'hospital' ? hospitalInfo.filter((value) => {
      return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
    }) : bloodbankInfo.filter((value) => {
      return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
    })

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log({group, name, organisation, number, description});
      const { data } = await createRequest({group, name, organisation, number, description});
      console.log(data);
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
              <h1 class="fs-3">Request-Blood</h1>
            </div>
          </div>
        </div>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
            <div class="row">
              <div className="FormStyles">
                <div class="row">
                  <div class="booking-form">
                    <form onSubmit={handleSubmit}>
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
                        {/* Select Bank or Hospital  */}
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Select organization Type</span>
                            <select value={choice} onChange={(e) => setChoice(e.target.value)} class="form-control" required>
                              <option value="hospital">Hospital</option>
                              <option value="bloodbank">Bloodbank</option>                              
                            </select>
                            <span class="select-arrow"></span>
                          </div>
                        </div>

                        {/* Search Blood bank  */}
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Search Organisation</span>
                            <input
                            class="form-control"
                            type="Search"
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
                                    <button key={user.firstName} onClick={()=>{handleClick(user)}}
                                    style={{width:"100%", color:"white", backgroundColor:'blue'}} 
                                    className=" text-lg py-2 pl-8 hover:bg-[#80808052] cursor-pointer"
                                    >
                                      {user.firstName}
                                    </button>
                                  )) : ''}
                                </div>
                              </div>
                            )}
                            </div>
                        </div>
                        {/* Search hospital 
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Hospital</span>
                            <input
                              class="form-control"
                              type="Search"
                              placeholder="Hospital"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row"> */}
                        <div class="col-md-3">
                          <div class="form-group">
                            <span class="form-label">No of Bottles</span>
                            <input
                              class="form-control"
                              type="number"
                              value={number} onChange={(e) => setNumber(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Descripition</span>
                            <textarea
                              className="Textareab"
                              id="w3review"
                              name="w3review"
                              rows="4"
                              cols="30"
                              type="text"
                              value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                            <button type="submit" class="submit-btn">Send Request</button>
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

export default Donate;
