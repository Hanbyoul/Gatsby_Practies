import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  console.log(data);
  return (
    <Layout title="blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in : {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.data}</h6>

              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};
export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          category
          title
          author
          data(formatString: "YYYY.MM.DD")
        }
        excerpt(pruneLength: 20)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
export default blog;
