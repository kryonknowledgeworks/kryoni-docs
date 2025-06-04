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
//             to="/journal-management-system/Introduction/Overview">
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
    history.push("/journal-management-system/started/introduction");
  };

  return (
    <Layout>
      <main>
        <section className="section-one py-5">test</section>
      </main>
    </Layout>
  );
}
