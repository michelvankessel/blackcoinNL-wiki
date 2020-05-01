import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Sidebar from './sidebar';
import Header from './header';

import '@progress/kendo-theme-default/dist/all.css';
import './layout.css';
import './layout-custom.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ShadowedSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container-flex">
          <Sidebar className="sidebar-flex" />
          <div className="content-flex">
            {children}
            <hr />
            <a href={`${githubPrefix}`}> Edit this page </a>
            <hr />            
            <footer>
              © {new Date().getFullYear()}
              {` `}
              <a href="https://www.blackcoin.nl">BlackcoinNL</a>
            </footer>
          </div>
        </div>
      </>
    )}
  />
);

const githubPrefix = 'https://github.com/danielclough/blackcoinNL-wiki/blob/master/src/gatsby-theme-wiki/pages/index.js'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
