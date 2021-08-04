
import React from 'react';
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
import { motion } from 'framer-motion';

const FrontPageListingSingle = ({context}) => {
  const posts = context.posts;
  console.log('frontPageListing SINGLE CONTEXT: ', context);
  const pageTransitions={
    in:{
      // backgroundColor: "red",
      x: 0,
    },
    out:{
      // backgroundColor: "green",
      x: "100vw",
    },
    transition:{
      duration: 0.66,
      // timingFunction: "ease-in",
      timingFunction: "anticipate",
    },
  };
  return (
    // <div>
    <motion.div
      id="content"
      className="listingSingle_container"
      key="listingSingle"
      initial={pageTransitions.out}
      animate={pageTransitions.in}
      exit={pageTransitions.out}
      transition={pageTransitions.transition}
    >

      <Link to="/" style={{fontSize:"50px"}}>Home</Link>

      {posts.map((post, i) => {
        console.log(post.slug, context.slug);
        {/* if(post.slug === context.slug) { */}
          return(<div key={i}>
            <h2>{post.title.rendered}</h2>
            {/* <p>{post.content.rendered}</p> */}
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
          </div>)
        {/* } */}
      })}

    {/* </div> */}
    </motion.div>
  )
}

export default WithConsumer(FrontPageListingSingle)