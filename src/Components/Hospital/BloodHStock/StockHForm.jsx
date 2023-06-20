import React, {useState} from "react";
import { postStockData } from "../../../api";
import Footer from "../../Member/Footer/Footer";
import Navbar from "../Sidenav/Navbar";
import { useNavigate } from "react-router-dom";
import "./Stock.css";
function StockHform() {

  const navigate = useNavigate();

  const [Ap, setAp] = useState("");
  const [An, setAn] = useState("");
  const [Bp, setBp] = useState("");
  const [Bn, setBn] = useState("");
  const [Op, setOp] = useState("");
  const [On, setOn] = useState("");
  const [ABp, setABp] = useState("");
  const [ABn, setABn] = useState("");

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      console.log({Ap, An, Bp, Bn, Op, On, ABp, ABn});
      const { data } = await postStockData({Ap, An, Bp, Bn, Op, On, ABp, ABn});
      console.log(data);
      navigate('/hospital');
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
            <div class="content rounded-4 p-4">
              <h1 class="fs-4">Update Stocks</h1>
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
                        {/* A+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">A+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={Ap}
                              onChange={(e) => setAp(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* A- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">A-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={An}
                              onChange={(e) => setAn(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* B+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">B+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={Bp}
                              onChange={(e) => setBp(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* B- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">B-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={Bn}
                              onChange={(e) => setBn(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* O+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">O+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={Op}
                              onChange={(e) => setOp(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* O- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">O-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={On}
                              onChange={(e) => setOn(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* AB+ div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">AB+</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={ABp}
                              onChange={(e) => setABp(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        {/* AB- div */}
                        <div class="col-md-4">
                          <span class="form-label">Blood-type</span>
                          <label className="labeel">
                            <input className="check" type="checkbox" />
                            <span className="span">AB-</span>
                          </label>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Capacity</span>
                            <input
                              class="form-control"
                              type="text"
                              value="100"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <span class="form-label">Bottles Available</span>
                            <input
                              class="form-control"
                              type="number"
                              placeholder="Add"
                              value={ABn}
                              onChange={(e) => setABn(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-btn">
                          <button type='submit' class="submit-btn">Update</button>
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

export default StockHform;
