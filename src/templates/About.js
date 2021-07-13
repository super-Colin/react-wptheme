import React from 'react'
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import WithConsumer from '../context/WithConsumer';

const About = ({context}) => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Footer />
    </div>
  )
}

export default WithConsumer(About);
