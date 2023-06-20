import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Modalform.css";
function UserProfile() {
  return (
    <div className="back-colo container rounded mt-5">
      <div className="row">
        <div className="col-md-6">
          <form>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="p-2 py-10">
                <div className="row mt-2">
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Title"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Name"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="E-mail"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="City"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Address"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="No of Bottles Required"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Descrption"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Reason"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Emergency"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="outlined-number"
                      label="no of Bottles you want to Donate?"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <TextField
                      required
                      id="outlined-required"
                      label="What time you want to donate?"
                      type="time"
                      defaultValue="Hello World"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      required
                      id="outlined-required"
                      label="What date you preferred?"
                      type="date"
                      defaultValue="Hello World"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5 text-right">
                  <button className="ProfileButto" type="submit" value="Submit">
                    Save Profile Changes
                  </button>
                </div>
              </div>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
