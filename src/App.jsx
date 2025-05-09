import { useEffect, useState } from "react";
import dalosimg from "../src/design/assets/hero/dalosnetwork.svg";
import daloslogo from "../src/design/assets/hero/logo.svg";
import herobgimg from "../src/design/assets/hero/herobg.png";
import cryptoimg from "../src/design/assets/aboutUs/Cryptocurrency.svg";
import securityimg from "../src/design/assets/aboutUs/security.svg";
import wingsimg from "../src/design/assets/aboutUs/wings.svg";
import servicesUstimg from "../src/design/assets/services/servicesUst.png";
import linkedinimg from "../src/design/assets/footer/linkedin.svg";
import twitterimg from "../src/design/assets/footer/twitter.svg";
import hamburgerIcon from "../src/design/assets/hero/hamburgericon.svg";
import mobilSky from "../src/design/assets/mobil/mblHeroMaviGecis.png";

function App() {
  const [form, setForm] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMdm, setIsMdm] = useState(window.innerWidth <= 991.98);

  useEffect(() => {
    const handleResize = () => {
      setIsMdm(window.innerWidth <= 991.98);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MyComponent = (
    <div className="hero-content df jc">
      <div className="container">
        <div className="row hero-text">
          <div className="col-12">
            Unlocking Tomorrow, Today - Where Blockchain Meets <br />
            <span className="df jc">Infinite Possibility</span>
          </div>
          <div className="col-12 mt-2">
            <button className="btn1 ">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <main>
        <header className={isScrolled ? "header scrolled" : "header"}>
          <div className="container">
            <div className={`row ${isMobile ? "py-3" : "py-4"}`}>
              <div className="col-auto">
                <div>
                  <span className="pointer">
                    <img src={daloslogo} alt="Dalos Network" />
                  </span>
                  <span className="pointer ms-2">
                    <img src={dalosimg} alt="Dalos Network" />
                  </span>
                </div>
              </div>
              <div className="col df aic je">
                <div className="row df je whitef f24 robotof web-menu">
                  <div className="col-auto pointer">About Us</div>
                  <div className="col-auto pointer">Services</div>
                  <div className="col-auto pointer">Contact Us</div>
                </div>

                {/* Mobil menü ikonu */}
                <div className="mobile-menu-icon pointer" onClick={toggleMenu}>
                  <img src={hamburgerIcon} alt="Menu" />
                </div>
              </div>
              {/* Mobil menü */}
              {menuOpen && (
                <div className="mobile-menu">
                  <div className="pointer">About Us</div>
                  <div className="pointer">Services</div>
                  <div className="pointer">Contact Us</div>
                </div>
              )}
            </div>
          </div>
        </header>
        <section className="header-hero">
          <div className="hero-section df jc ">
            <div className="hero-bg-ust" />
            <div className="hero-bg-orta">{isMobile && MyComponent}</div>
            <div className="hero-bg-alt" />
            {!isMobile && MyComponent}
          </div>
        </section>
        <section id="about">
          <div className="about-cloud" />
          <div className="about-transition"></div>
          <div className="about-grad">
            <div className="aboutbg">
              <div className="about-title">About Us</div>
              <div className="container about-wrapper df jc">
                <div className="row aboutlayout">
                  <div className="col-12 col-md-12 col-lg-4 df jc">
                    <div className="row df jc">
                      <div className="col-12 df jc icon-wrapper">
                        <img src={cryptoimg} alt="" />
                      </div>
                      <div className="col-12 info-text">
                        At Dalos Network, we are dedicated to revolutionizing
                        industries through innovative blockchain solutions. With
                        a focus on decentralization, security, and
                        accessibility, we transcend boundaries across various
                        blockchain networks. Our mission is to create a more
                        equitable and accessible digital world for all.
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 df jc">
                    <div className="row df jc">
                      <div className="col-12 df jc icon-wrapper">
                        <img src={securityimg} alt="" />
                      </div>
                      <div class="vertical-line-up" />
                      <div className="col-12 info-text">
                        We prioritize security, privacy, and accessibility,
                        ensuring our applications uphold the highest standards
                        across multiple blockchain networks. Our goal is to
                        leverage blockchain technology to its fullest potential,
                        fostering inclusivity and empowering individuals
                        globally.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-4 df jc">
                    <div className="row df jc">
                      <div className="col-12 df jc icon-wrapper">
                        <img src={wingsimg} alt="" />
                      </div>
                      <div class="vertical-line-up" />
                      <div className="col-12 info-text ">
                        Join us at Dalos Network as we lead the charge in
                        pioneering decentralized solutions. Together, we'll
                        shape a future where blockchain transforms industries
                        and creates opportunities for everyone.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bottom" />
        </section>
        <section id="services">
          <div className="services-ust" />
          <div className="servicesbg df jc">
            <div className="container df jc position-relative">
              <div className="row services-mrgn">
                <div className="col-12 df jc">
                  <div className="playfair f57 whitef">Services</div>
                </div>
                <div className="col-12">
                  <div className="row df jc">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row services-text">
                        <div className="col-12">
                          <div className="whitef f38 playfair df jc">
                            Software
                          </div>
                        </div>
                        <div className="col">
                          <div className="whitef f17 robotof">
                            Dalos Network specializes in developing
                            decentralized solutions and applications across
                            various blockchains, with a particular focus on
                            EVM-based networks.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="row services-text">
                        <div className={`col-12 ${isMdm ? "mt-3" : "mt-0"}`}>
                          <div className="whitef f38 playfair df jc">
                            Consultancy
                          </div>
                        </div>
                        <div className="col">
                          <div className="whitef f17 robotof">
                            Consultancy: As a trusted advisor, Dalos Network
                            offers consultancy services to support the
                            implementation of your blockchain-oriented technical
                            and business processes.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-alt"></div>
        </section>
        <section className="contact">
          <div className="contact-bg df aic">
            <div className="container df jc">
              <div className="contact-form df jc">
                <div className="contact-bg-ust"></div>
                <div className="contact-bg-orta"></div>
                <div className="contact-bg-alt"></div>
                <div className="contact-box">
                  <form action="">
                    <div className="container df jc mt-4">
                      <div
                        className="row contact-row df jc"
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12 col-md-12 col-lg-5">
                          <div className="input-border-out">
                            <div className="input-border-in df jc aic">
                              <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3">
                          <div className="input-border-out">
                            <div className="input-border-in df jc aic">
                              <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Name Surname"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                          <div className="input-border-out">
                            <div className="input-border-in df jc aic">
                              <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="E-Mail Address"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 mt-3">
                          <div className="input-border-out">
                            <div className="input-border-text df jc aic">
                              <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="4"
                                required
                                placeholder="Your message"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 df jc mt-3">
                          <button type="submit" className="contact-send">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-bg">
            <div className="container">
              <div className="row df jc">
                <div className="col-12">
                  <div className="footer-logo" />
                </div>
                <div className="col-12">
                  <div className="footer-logo2" />
                </div>
                <div className="col-12 ">
                  <div className="contact-adress df aic jc">
                    <a
                      href="https://dalosnetwork.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedinimg} alt="LinkedIn" />
                    </a>
                    <a
                      href="https://dalosnetwork.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitterimg} alt="Twitter" />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="dalos-info f18 whitef robotof df jc">
                    info@dalosnetwork.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
