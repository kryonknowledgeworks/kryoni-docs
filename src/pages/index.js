import Layout from "@theme/Layout";
import { useLocation } from "react-router-dom";
import SearchBar from '@theme/SearchBar';
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

   useEffect(() => {
    const toggle = document.getElementsByClassName('toggle_vylO colorModeToggle_DEke');
    const SearchNavBar = document.getElementsByClassName('navbarSearchContainer_Bca1');    

    if (toggle.length > 0 && SearchNavBar.length > 0) {
      const element = toggle[0];

      if (location.pathname === "/") {
        element.classList.add('d-none');
        element.classList.remove('d-block');

        SearchNavBar[0].classList.add('d-none');
        SearchNavBar[0].classList.remove('d-block');

      } else {
        element.classList.remove('d-none');
        element.classList.add('d-block');

        SearchNavBar[0].classList.remove('d-none');
        SearchNavBar[0].classList.add('d-block');
                
      }
    }
    
    let intervalId;

    const applyShadow = () => {
      const input = document.querySelector('.navbar__search-input.searchInput_YFbd');
      if (input) {
        if (location.pathname === '/') {         
          input.style.boxShadow = '0px 13px 61px 0px rgba(0, 0, 0, 0.15)';
        } else {
          input.style.boxShadow = 'none';
        }
        clearInterval(intervalId); // Element found, stop checking
      }
    };

    intervalId = setInterval(applyShadow, 200); // Check every 200ms

    return () => clearInterval(intervalId); // Cleanup if component unmounts

  }, []);

  return (
    <Layout>
      <main>
        <section id="home">
          <div className="container-fluid container-lg">
            <div className="row w-100 m-auto">
              <div className="col-6 col-md-3 order-0 order-md-0 d-flex justify-content-center align-items-center">
                <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/web-left.png" alt="group image" className="d-none d-md-block"/>
                <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/mobile-left.png" alt="group image" className="d-block d-md-none"/>
              </div>
              <div className="col-12 col-md-6 order-2 order-md-1">
                <div className="mt-3">
                   <div className="section-one px-4 px-lg-3">
                    <div className="section-one-wrapper">
                      <div className="text-center">
                        <div className="mb-3">
                          <span className="badge badge-blue text-uppercase">Easy to find your queries</span>
                        </div>
                        <div className="heading">
                          <h1 className="font-40-700">
                            <span>Get a technical documentation </span>that's easy to find answers in
                          </h1>                        
                        </div>
                      </div>
                    </div>                    
                  </div>
                </div>
                <div className="mb-3">                  
                  <SearchBar/>             
                </div>                
              </div>
              <div className="col-6 col-md-3 order-1 order-md-2">
                <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/web-right.png" alt="group image" className="d-none d-md-block"/>
                <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/mobile-right.png" alt="group image" className="d-block d-md-none"/>
              </div>
            </div>
          </div>
        </section>

        <section id="products">
          <div className="container-fluid container-lg">
             <div className="row g-4 mt-4 w-100 m-auto">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="custom-card p-4 exploreThemesCard">
                  <div><img src="https://cdn.kryoni.com/kryoni-docs/images/landing/max.png" className="img-fluid" alt="image representes analytics"/></div>
                  <div className="d-flex align-items-center justify-content-start pt-4">                                        
                      <img
                        className="img-fluid jmsimg me-4"
                        src="https://cdn.kryoni.com/kryoni/images/version-1/journal-management.webp"
                        alt="Icon representing the JournalManagement System (JMS) for streamlined publication processes"
                      />
                      <a href="/journal-management-system/get-started/introduction" className="font-28-700 text-decoration-none" target="_self">Journal Management System (JMS)</a>                                      
                  </div>
                  <div className="mt-4">
                    <p className="font-17-400">
                      Our Journal Management System offers an integrated solution to manage the entire editorial process—from manuscript submission and peer review to publication. Designed for easy collaboration among authors, reviewers, and editors, it ensures a streamlined, efficient, and transparent workflow. 
                    </p>
                  </div>                  
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="custom-card p-4 exploreThemesCard">
                  <div><img src="https://cdn.kryoni.com/kryoni-docs/images/landing/min.png" className="img-fluid" alt="image represents laptop cloud"/></div>
                  <div className="d-flex align-items-center justify-content-start pt-4">                                        
                    <img
                      className="img-fluid jmsimg me-4"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/stream-space.webp"
                      alt="Icon symbolizing Stream Space for secure content hosting and global research sharing"
                    />
                      <div className="font-28-700">Stream Space</div>                                       
                  </div>
                  <div className="mt-4">
                    <p className="font-17-400">
                      Stream Space offers a robust content-hosting platform with reliable infrastructure, top-tier security, and customizable templates, making it easy to launch your journal without technical complexity 
                    </p>
                  </div>                 
                </div>
              </div>
            </div>
          </div>
        </section> 

        <section id="quicklinks" className="pb-5"> 
          <div className="container-fluid container-lg">            
            <div className="row w-100 m-auto chips mt-5">
              <div className="col-12">
                <h3 className="font-28-700">Quick Links </h3>
              </div>            
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="/journal-management-system/onboarding/registering-publishing-house" className="font-16-500 ms-2">How to Create a Publishing House</a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="/journal-management-system/settings/journal-settings/user-role-and-settings" className="font-16-500 ms-2">User Roles & Settings</a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="/journal-management-system/editorial-workflow/create-journal/overview" className="font-16-500 ms-2">Journal Creation</a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="journal-management-system/authoring/author-submission" className="font-16-500 ms-2">Author Submission</a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="journal-management-system/reviewing/overview" className="font-16-500 ms-2">Peer Review</a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="/" className="font-16-500 ms-2">Production Configuration</a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="journal-management-system/settings/global-organizations-settings/roles#supplier-management" className="font-16-500 ms-2"> Supplier Management </a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="/journal-management-system/settings/global-organizations-settings/billing-management" className="font-16-500 ms-2"> Billing Management </a>
                  </div>
                </div>
                <div className="custom-card py-2 px-3 col-12 col-sm-10 col-md-5 col-xl-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid done-ring-img"
                      src="https://cdn.kryoni.com/kryoni/images/version-1/jms/done-ring-round.webp"
                      alt="Blue checkmark icon"
                    />
                    <a href="/" className="font-16-500 ms-2">Production Jobs</a>
                  </div>
                </div>              
            </div>
          </div>
        </section>

        <section id="help" className="pb-4 pb-lg-0">
          <div className="container-fluid">
            <div className="row w-100 m-auto">
              <div className="col-12 pb-3">
                <p className="font-38-700 text-center">Still need help?</p>
              </div>
              <div className="section-wrapper row justify-content-between align-items-start flex-column flex-md-row w-100 m-auto">
                <div className="box-content col-12 col-sm-10 col-md-6 col-lg-4 d-flex align-items-start justify-content-center flex-column flex-md-row px-2 py-3">
                  <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/comment-perspective.png" className="img-fluid helpicons" alt="Raise a support ticket"/>
                  <div className="px-3">
                    <h5 className="font-20-700">Raise a support ticket</h5>
                    <p className="font-17-500 text-white m-0">Our dedicated support team is available around the clock to assist you. </p>
                  </div>
                </div>
                <div className="box-content col-12 col-sm-10 col-md-6 col-lg-4 d-flex align-items-start justify-content-center flex-column flex-md-row px-2 py-3">
                  <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/faq-perspective.png" className="img-fluid helpicons" alt="Icon of Frequently Asked Questions"/>
                  <div className="px-3">
                    <h5 className="font-20-700">Frequently Asked Questions</h5>
                    <p className="font-17-500 text-white m-0">Have technical questions? Check out our FAQ section for quick answers and helpful information. </p>
                  </div>
                </div>
                <div className="box-content col-12 col-sm-10 col-md-6 col-lg-4 d-flex align-items-start justify-content-center flex-column flex-md-row px-2 py-3">
                  <img src="https://cdn.kryoni.com/kryoni-docs/images/landing/code-perspective.png" className="img-fluid helpicons" alt="Icon of API Reference Guide"/>
                  <div className="px-3">
                    <h5 className="font-20-700">API Reference Guide</h5>
                    <p className="font-17-500 text-white m-0">Our comprehensive documentation simplifies integration and maximizes functionality within your applications. </p>
                  </div>
                </div>                
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
