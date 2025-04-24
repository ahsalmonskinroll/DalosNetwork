import { useState } from "react";
import dalosimg from "../src/design/assets/hero/dalosnetwork.svg";
import daloslogo from "../src/design/assets/hero/logo.svg";
import heroMountainimg from "../src/design/assets/hero/herobgGroup.png";
import heroCloudimg from "../src/design/assets/hero/heroCloud.png";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="page-wrapper">
          <div className="content">
            <header>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div>
                    <span className="pointer">
                      <img src={daloslogo} alt="Dalos Network" />
                    </span>
                    <span className="pointer ms-2">
                      <img src={dalosimg} alt="Dalos Network" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="row df je whitef f24 robotof ">
                    <div className="col-auto pointer">About Us</div>
                    <div className="col-auto pointer">Services</div>
                    <div className="col-auto pointer">Contact Us</div>
                  </div>
                </div>
              </div>
            </header>
            <section className="hero-section df jc whitef robotof brownf f32">
              <div>
                Unlocking Tomorrow, Today - Where Blockchain Meets <br />
                <span className="df jc">Infinite Possibility</span>
              </div>
            </section>
          </div>
        </div>
        <div className="about-us">about us</div>
        <div className="services">services</div>
        <div className="contact">contact</div>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
