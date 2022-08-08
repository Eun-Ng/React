import React from 'react';
import Header from '../components/ui/Header';
import Layout from '../components/ui/Layout';
import Form from '../components/form/Form';
import List from '../components/list/List';

const Main = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Main;
