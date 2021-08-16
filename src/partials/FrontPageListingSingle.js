
import React from 'react';
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
import { motion } from 'framer-motion';
import Header from './Header';

const FrontPageListingSingle = ({context}) => {
  const posts = context.posts;
  // console.log('frontPageListing SINGLE CONTEXT: ', context);
  const pageTransitions={
    in:{x: 0},
    out:{x: "100vw"},
    transition:{
      duration: 0.66,
      timingFunction: "anticipate",
    },
  };
  return (
    // <div>
    <motion.div
      id="content"
      // className="listingSingle_container"
      key="listingSingle"
      initial={pageTransitions.out}
      animate={pageTransitions.in}
      exit={pageTransitions.out}
      transition={pageTransitions.transition}
    >

      <Header />
      <div className="listingSingle_container">
        {posts.map((post, i) => {
          {/* console.log(post.slug, context.slug); */}
          {/* if(post.slug === context.slug) { */}
            return(<div key={i}>
              <h2 className="listingSingle_title">{post.title.rendered}</h2>
              {/* <p>{post.content.rendered}</p> */}
              <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
            </div>)
          {/* } */}
        })}
      </div>
    </motion.div>
  )
}

export default WithConsumer(FrontPageListingSingle)