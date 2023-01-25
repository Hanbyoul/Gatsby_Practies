import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Aboutus = () => {
  return (
    <Layout title="About us">
      <div>
        <p>We are the happies sticker store</p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About us" />;
export default Aboutus;
