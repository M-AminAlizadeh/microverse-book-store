import React from 'react';
import Form from '../components/Form';
import Books from '../components/Books';
import UniqueId from '../components/UniqueId';

const Home = () => (
  <div className="home-page-container">
    <Form />
    <Books />
    <UniqueId />
  </div>
);

export default Home;
