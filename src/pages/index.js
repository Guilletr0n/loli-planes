import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import "./index.css";

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='home'>
      <div>
        <div
          style={{
            maxWidth: `340px`,
            margin: '0 auto',
          }}
        >
          <Image />
        </div>
      </div>
      <Link to='/siteposts/'>Ver todos los artículos</Link>
    </div>
  </Layout>
);

export default IndexPage;
