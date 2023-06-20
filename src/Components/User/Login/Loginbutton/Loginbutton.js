import React from "react";
import { useEffect , useState } from "react";
import jwt_decode from "jwt-decode";
function Loginbutton() {
    const[ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "979917410086-fr7s1m9jhgr69no63uqnv38r0ualaoua.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "larger",
    });
  }, []);

  return (
    <>
      <div id="signInDiv"></div>
    </>
  );
}

export default Loginbutton;
