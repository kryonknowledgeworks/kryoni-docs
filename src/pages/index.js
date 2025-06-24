import Layout from "@theme/Layout";
import { useHistory } from "react-router-dom";
import SearchBar from '@theme/SearchBar';

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/journal-management-system/get-started-with-kryoni-jms/introduction");
  };

  return (
    <Layout>
      <main>
        <section id="home">
          <div className="container-fluid container-lg">
            <div className="row w-100 m-auto">
              <div className="col-3">
                {/* <img src="/assets/images/landing/web-left.png" alt="group image"/> */}
              </div>
              <div className="col-6">
                <div class="mb-3">                  
                  <SearchBar/>             
                </div>                
              </div>
              <div className="col-3">
                {/* <img src="/assets/images/landing/web-right.png" alt="group image"/> */}
              </div>
            </div>
          </div>
        </section>   

        <section id="quicklinks"> 
          <div class="chips mt-5">
            <div class="custom-card py-2 px-3">
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid done-ring-img"
                  src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                  alt="Blue checkmark icon"
                />
                <div class="font-16-600 ms-2">Pay-As-You-Use</div>
              </div>
            </div>
            <div class="custom-card py-2 px-3">
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid done-ring-img"
                  src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                  alt="Blue checkmark icon"
                />
                <div class="font-16-600 ms-2">Zero Setup Time</div>
              </div>
            </div>
            <div class="custom-card py-2 px-3">
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid done-ring-img"
                  src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                  alt="Blue checkmark icon"
                />
                <div class="font-16-600 ms-2">Cloud-Based & Secure</div>
              </div>
            </div>
            <div class="custom-card py-2 px-3">
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid done-ring-img"
                  src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                  alt="Blue checkmark icon"
                />
                <div class="font-16-600 ms-2">
                  Scalable for any Journal Size
                </div>
              </div>
            </div>
            <div class="custom-card py-2 px-3">
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid done-ring-img"
                  src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                  alt="Blue checkmark icon"
                />
                <div class="font-16-600 ms-2">Complete Editorial Control</div>
              </div>
            </div>
            <div class="custom-card py-2 px-3">
              <div class="d-flex align-items-center">
                <img
                  class="img-fluid done-ring-img"
                  src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                  alt="Blue checkmark icon"
                />
                <div class="font-16-600 ms-2">Enhanced Workflow Automation</div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" className="pt-xl-5 pt-lg-5 pt-md-5 pt-2">
            <div className="container-fluid container-lg">
                <div className="row g-4 w-100 m-auto">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-0 mt-xl-0 mt-lg-0 mt-md-2">
                        <div className="ms-lg-5 ps-lg-4 mt-0">
                            <a href="/"> <img className="img-fluid footerlogoimg" src="https://cdn.kryoni.com/kryoni/images/version-1/kryoni-website-footer.webp" alt="Kryoni Logo" loading="lazy" /> </a>
                            <div className="mt-0">
                                <p className="font-17-500 footerparagraph"> Kryoni’s advanced editorial management and content hosting solutions offer end-to-end support for all your publishing needs.  </p>
                            </div>
                            <div className="mt-3">
                                <div className="d-flex">
                                    <a href="https://www.facebook.com/profile.php?id=61557829957560" target="_blank" rel="noopener noreferrer"> <img className="me-2 footerImgConnect" src="https://cdn.kryoni.com/kryoni/images/version-1/facebook.webp" alt="Facebook logo icon" loading="lazy" /></a>
                                    <a href="https://x.com/Kryoni_" target="_blank" rel="noopener noreferrer"> <img className="me-2 footerImgConnect" src="https://cdn.kryoni.com/kryoni/images/version-1/x.webp" alt="Twitter logo icon"  loading="lazy"/></a>
                                    <a href="https://www.instagram.com/kryoni_/" target="_blank" rel="noopener noreferrer"> <img className="me-2 footerImgConnect" src="https://cdn.kryoni.com/kryoni/images/version-1/instagram.webp" alt="Instagram logo icon"  loading="lazy"/> </a>
                                    <a href="https://www.linkedin.com/company/kryoni/" target="_blank" rel="noopener noreferrer"> <img className="me-2 footerImgConnect" src="https://cdn.kryoni.com/kryoni/images/version-1/linkedin.webp" alt="LinkedIn logo icon" loading="lazy"/> </a>
                                    <a href="https://www.youtube.com/@Kryoni-kkw" target="_blank" rel="noopener noreferrer"> <img className="me-2 footerImgConnect" src="https://cdn.kryoni.com/kryoni/images/version-1/youtube.webp" alt="Youtube logo icon" loading="lazy"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 mt-0 mt-xl-3 mt-lg-3 mt-md-2">
                        <div className="footer-menu-wrapper d-none d-md-flex flex-md-column flex-lg-row">
                            <div className="footer-menu-group">
                                <div className="footer-menu-heading mb-1 font-18-700">Products</div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/products/journal-management-system" >Kryoni JMS</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/products/stream-space" > Kryoni Stream Space </a>
                                </div>
                            </div>
                            <div className="footer-menu-group">
                                <div className="footer-menu-heading mb-1 font-18-700">Main Links</div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/about-us">About Us</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/why-kryoni">Why Kryoni</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://docs.kryoni.com">Learning</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://support.kryoni.com">Support</a>
                                </div>
                            </div>
                            <div className="footer-menu-group">
                                <div className="footer-menu-heading mb-1 font-18-700">Info Links</div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/blogs">Blogs</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/contact-us">Contact Us</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/legal/terms">Terms of Use</a>
                                </div>
                                <div>
                                    <a className="footer-menu font-17-500 mb-1" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/legal/privacy-policy">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- mobile and tablet --> */}
                        <div className="trynew d-block d-md-none">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid container-xxl px-0">
                                    <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentfooter" aria-controls="navbarSupportedContentfooter" aria-expanded="true" aria-label="Toggle navigation" >
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                    className="navbar-collapse collapse show" id="navbarSupportedContentfooter" >
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu-wrapper">
                                        <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle font-17-500 d-flex align-items-center gap-1 footer-links" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Products <span
                                            ><img  src="https://cdn.kryoni.com/kryoni/images/version-1/dropdown-down-arrow.webp" alt="dropdown-down-arrow"  loading="lazy"  className="header-down-arrow"/></span>
                                        </a>
                                        <ul className="dropdown-menu border-0 pt-0 mt-0">
                                            <li> <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/products/journal-management-system" >Kryoni JMS</a> </li>
                                            <li> <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/products/stream-space">Kryoni Stream Space</a> </li>
                                        </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- main --> */}
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu-wrapper">
                                        <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle font-17-500 d-flex align-items-center gap-1 footer-links"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Main Links
                                            <span>
                                                <img src="https://cdn.kryoni.com/kryoni/images/version-1/dropdown-down-arrow.webp" alt="dropdown-down-arrow" loading="lazy" className="header-down-arrow"/>
                                            </span> </a>
                                            <ul className="dropdown-menu border-0 pt-0 mt-0">
                                                <li>  <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/about-us">About Us</a> </li>
                                                <li>  <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/why-kryoni" >Why Kryoni</a> </li>
                                                <li>  <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://docs.kryoni.com">Learning</a> </li>
                                                <li>  <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://support.kryoni.com">Support</a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- info --> */}
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu-wrapper">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle font-17-500 d-flex align-items-center gap-1 footer-links" href="#"  role="button"  data-bs-toggle="dropdown" aria-expanded="false" >  Info Links
                                                <span>
                                                    <img src="https://cdn.kryoni.com/kryoni/images/version-1/dropdown-down-arrow.webp" alt="dropdown-down-arrow" loading="lazy"  className="header-down-arrow" /> </span>
                                            </a>
                                            <ul className="dropdown-menu border-0 pt-0 mt-0">
                                                <li> <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/blogs" >Blogs</a> </li>
                                                <li> <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/contact-us" >Contact Us</a> </li>
                                                <li> <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/legal/terms">Terms of Use</a> </li>
                                                <li> <a className="font-17-500 dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.kryoni.com/legal/privacy-policy">Privacy Policy</a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {/* <!-- ------------------------------------  --> */}
                    </div>
                </div>               
            </div>
        </footer>
      </main>
    </Layout>
  );
}
