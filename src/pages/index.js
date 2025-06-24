import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             classNameName="button button--secondary button--lg"
//             to="/journal-management-system/introduction/Overview">
//             Step By Step Tutorial For Easy Working
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/journal-management-system/get-started-with-kryoni-jms/introduction");
  };

  return (
    <Layout>
      <main>
        <section id="query-content" className="pb-4 position-relative">
          <div className="center-content pt-5">
            <h5 className="pt-4 text-uppercase top-heading mb-3">
              Easy to find your queries
            </h5>
            <h1 className="text-capitalize fs-1 mb-4">
              Get a technical documentation that's easy to find answers in
            </h1>
            <div className="input-group search-design-input mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Enter keywords here...."
              />
              <span className="input-group-text">
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/search-big.png"
                  alt="search"
                />
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center justify-content-center content-btns">
              <button onClick={handleClick}>
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/eo.png"
                  alt="eo"
                  className="me-3"
                />
                JMS
              </button>
              {/* <button onclick="navigateTo('/products/docs/job-nest')">
                    <img src="https://cdn.kryoni.com/kryoni/images/icons/jn.png" alt="eo" className="me-3" />Job Nest
                </button> */}
              {/* <button>
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/ch.png"
                  alt="eo"
                  className="me-3"
                />
                Stream Space
              </button> */}
            </div>
          </div>
        </section>
        <section id="editorial-office" className="container py-1">
          <div className="row w-100 m-0 align-items-center pb-5">
            <div className="col-5">
              <img
                src="https://cdn.kryoni.com/kryoni/images/icons/article.png"
                alt="article"
                className="article-img"
              />
            </div>
            <div className="col-7">
              <img
                src="https://cdn.kryoni.com/kryoni/images/icons/eo-icon.png"
                alt="eo"
                className="icon-logo mb-3"
              />
              <h2 className="fw-bold fs-2">Journal Management System (JMS)</h2>
              <p className="p-content">
                Our Journal Management System is a one-stop software solution
                for all your editorial needs. Efficiently manages the entire
                lifecycle of journal publishing, from the initial submission of
                manuscripts to the peer review process, and our system ensures
                seamless coordination and communication among authors,
                reviewers, and editors, facilitating a smooth workflow. By
                incorporating our Journal Management System into your workflow,
                you can ensure an efficient, transparent editorial process,
                ultimately enhancing the quality and impact of your journal.
              </p>
              <div className="d-flex gap-4 flex-row">
                <div className="">
                  <ul>
                    <li>Easy Submission</li>
                    <li>Automated Acknowledgment</li>
                    <li>Reviewer Selection</li>
                    <li>Reviewer Assignment</li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li>Review Tracking</li>
                    <li>Confidential Reviews</li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                <button className="explore-btn" onClick={handleClick}>
                  Explore Now{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="job-nest">
        <div className="container py-5">
            <div className="row w-100 m-0 align-items-center py-5">
                <div className="col-7">
                    <img src="https://cdn.kryoni.com/kryoni/images/icons/jb-icon.png" alt="eo" className="icon-logo mb-3" />
                    <h2 className="fw-semibold fs-2 text-white">Job Nest</h2>
                    <p className="p-content text-white fw-normal">
                        Job Nest can be used as a standalone platform for smooth job posting and browsing or can
                        seamlessly integrate with our journal management systems. This integration simplifies project
                        acquisition and greatly improves task management and tracking. Job Nest offers a thorough and
                        effective solution for assigning, monitoring, and managing tasks across a range of publishing
                        vendors.
                    </p>
                    <div className="d-flex justify-content-between flex-row gap-4 w-75">
                        <div className="">
                            <ul>
 
 
                                <li>Seamless Job Posting</li>
                                <li>Comprehensive Job Browsing</li>
                                <li>Intuitive Interface</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li>Real-Time Tracking</li>
                                <li>Task Assignment</li>
                                <li>Reporting and Analytics</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button onclick="navigateTo('/products/docs/job-nest')" className="explore-btn">Explore Now</button>
                    </div>
                </div>
                <div className="col-5 text-end">
                    <img src="https://cdn.kryoni.com/kryoni/images/icons/job-nest-vector.png" alt="article"
                        className="article-img" />
                </div>
            </div>
        </div>
    </section> */}
        <section id="content-hosting" className="container py-5">
          <div className="row w-100 m-0 align-items-center py-5">
            <div className="col-5">
              <img
                src="https://cdn.kryoni.com/kryoni/images/icons/ch-vector.png"
                alt="article"
                className="article-img"
              />
            </div>
            <div className="col-7">
              <img
                src="https://cdn.kryoni.com/kryoni/images/icons/ch-icon.png"
                alt="eo"
                className="icon-logo mb-3"
              />
              <h2 className="fw-bold fs-2">Stream Space</h2>
              <p className="p-content">
                Kickstart your journal effortlessly with Stream Space, our
                cutting-edge content-hosting platform. Stream Space delivers a
                perfect blend of dependable infrastructure, cutting-edge
                security, and versatile template options, designed to facilitate
                a seamless and journal launch. Our platform not only guarantees
                reliable performance but also provides the flexibility to tailor
                your setup, delivering a smooth, secure, and professional
                journal experience.
              </p>
              <div className="d-flex gap-4 flex-row">
                <div className="">
                  <ul>
                    <li>Dependable Infrastructure</li>
                    <li>Advanced Security</li>
                    <li>User-Friendly Interface</li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li>Comprehensive Support</li>
                    <li>Customizable Template Options</li>
                    <li>Flexible Setup</li>
                  </ul>
                </div>
              </div>
              {/* <div className="mt-2">
                <button className="explore-btn">Explore Now</button>
              </div> */}
            </div>
          </div>
        </section>
        <section id="properties" className="container pb-5">
          <div className="row">
            <div className="col-4">
              <div className="support p-4 px-5">
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/support.png"
                  alt="support"
                  className="mb-3"
                />
                <h5 className="fw-semibold text-capitalize">
                  24/7 Customer support
                </h5>
                <span className="span-content">
                  We offer round-the-clock support for prompt issue resolution
                  and uninterrupted workflow.
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="support p-4 px-5 api">
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/api.png"
                  alt="support"
                  className="mb-3"
                />
                <h5 className="fw-semibold text-capitalize">
                  API Reference Guide
                </h5>
                <span className="span-content">
                  Comprehensive documentation for easy integration and optimal
                  functionality in your applications.
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="support p-4 tools px-5">
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/tools.png"
                  alt="support"
                  className="mb-3"
                />
                <h5 className="fw-semibold text-capitalize">Developer Tools</h5>
                <span className="span-content">
                  Robust tools to enhance development efficiency, streamline
                  customization, and simplify workflows.
                </span>
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
