import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/WikiLayout';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet title={`Wiki - ${post.frontmatter.title}`} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ShadowedBlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
