import React from 'react';
import DisplayMessages from '../components/api';
import Layout from '../components/layout';
import SEO from '../components/seo';
const Msg = ()=> {
    return <Layout page="msg">
        <SEO title="הודעות" />
    <div className="container">
        <DisplayMessages />
    </div>
  </Layout>
}
export default Msg;
