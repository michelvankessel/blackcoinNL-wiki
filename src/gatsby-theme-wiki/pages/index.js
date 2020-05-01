import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Blackcoin`, `Cryptocurrency`, `Community`, 'wiki']} />
    <h1>
      Welcome{' '}
      <span role="img" aria-label="wave hello">
        👋
      </span>
    </h1>
    <h2>This is the "most official" Blackcoin Wiki.</h2>
    <p>
      Add some new pages by following the instructions at the{' '}
      <Link to="/how-to-use">How To</Link> page!
    </p>
  </Layout>
);

export default IndexPage;
