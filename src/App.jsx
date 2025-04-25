import { useState } from "react";
import dalosimg from "../src/design/assets/hero/dalosnetwork.svg";
import daloslogo from "../src/design/assets/hero/logo.svg";
import cryptoimg from "../src/design/assets/aboutUs/Cryptocurrency.svg";
import securityimg from "../src/design/assets/aboutUs/security.svg";
import wingsimg from "../src/design/assets/aboutUs/wings.svg";

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
              <div className="row">
                <div className="col">
                  Unlocking Tomorrow, Today - Where Blockchain Meets <br />
                  <span className="df jc">Infinite Possibility</span>
                </div>
                <div className="col-12">
                  <button className="btn1 f24 fw500 brownf ">About Us</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="about-us">
          <div className="row">
            <div className="col-12 aboutUst"></div>
            <div className="col-12 about aboutbg">
              <div className="aboutsection playfair f57 whitef ">About Us</div>
              <div className="row aboutlayout df aic ">
                <div className="col-sm-12 col-md-12 col-lg-4 df jc">
                  <div className="row">
                    <div className="col-12 df jc">
                      <img src={cryptoimg} alt="" />
                    </div>
                    <div className="col-12 df jc f18 blackf robotof">
                      At Dalos Network, we are dedicated to revolutionizing
                      industries through innovative blockchain solutions. With a
                      focus on decentralization, security, and accessibility, we
                      transcend boundaries across various blockchain networks.
                      Our mission is to create a more equitable and accessible
                      digital world for all.
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 df jc">
                  <div className="row">
                    <div className="col-12 df jc">
                      <img src={securityimg} alt="" />
                    </div>
                    <div className="col-12 df jc f18 blackf robotof">
                      We prioritize security, privacy, and accessibility,
                      ensuring our applications uphold the highest standards
                      across multiple blockchain networks. Our goal is to
                      leverage blockchain technology to its fullest potential,
                      fostering inclusivity and empowering individuals globally.
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 df jc">
                  <div className="row">
                    <div className="col-12 df jc">
                      <img src={wingsimg} alt="" />
                    </div>
                    <div className="col-12 df jc f18 blackf robotof">
                      Join us at Dalos Network as we lead the charge in
                      pioneering decentralized solutions. Together, we'll shape
                      a future where blockchain transforms industries and
                      creates opportunities for everyone.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 grad3"></div>
          </div>
        </div>
        <div className="services">services</div>
        <div className="contact">contact</div>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
