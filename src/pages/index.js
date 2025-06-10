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
              <button>
                <img
                  src="https://cdn.kryoni.com/kryoni/images/icons/ch.png"
                  alt="eo"
                  className="me-3"
                />
                Stream Space
              </button>
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
              <div className="mt-2">
                <button className="explore-btn">Explore Now</button>
              </div>
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
      </main>
    </Layout>
  );
}
