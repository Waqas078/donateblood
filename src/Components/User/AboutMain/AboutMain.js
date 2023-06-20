import React from "react";
import "./AboutMain.css";
function AboutMain() {
  return (
    <div className="aboutimg">
      <div class="overlay">
        <section className="abou-section">
          <div className="container">
            <div className="row clearfix">
              {/*Content Column*/}
              <div className="content-column col-md-6 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="title">Donateblood.pk</div>
                    <h1>Who we are?</h1>
                  </div>
                  <div className="tet">
                    Donateblood.pk is an online blood banking system where users
                    can register to donate and request blood from other users,
                    Hospitals, and blood banks, and can interact with them to
                    resolve issues of blood need. Also, the site has a system
                    for Events in formation from where users get updates about
                    trending Donation campaigns.Donateblood.pk helps
                    organizations maintain and store their data and manage
                    records of their users and also can request blood from users
                    and other organizations. A person’s blood type is determined
                    by the antigens on the red blood cells. Antigens are protein
                    molecules on the surface of these cells. Antibodies are
                    proteins in plasma that alert the immune system to the
                    presence of potentially harmful foreign substances. The
                    immune system protects the body from the threat of disease
                    or infection. Knowing a person’s blood type is essential if
                    they are receiving an organ donation or blood transfusion.
                    Antibodies will attack new blood cells if the blood is the
                    wrong type, leading to life threatening complications. For
                    example, anti-A antibodies will attack cells that have A
                    antigens. Red blood cells sometimes contain another antigen
                    called RhD. Doctors also note this as part of the blood
                    group. A positive blood group means that RhD is present.
                    Humans can have one of four main blood groups. Each of these
                    groups can be Rhd-positive or -negative, forming eight main
                    categories.
                  </div>
                  <div className="email">
                    Motive:{" "}
                    <span className="theme_color">
                      Be the eason for someones happniess
                    </span>
                  </div>
                </div>
              </div>

              {/*Image Column*/}
              <div className="image-column col-md-6 col-sm-12 col-xs-12">
                <div
                  className="inner-column "
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img className="img" src={require("./imgg3.jpg")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMain;
