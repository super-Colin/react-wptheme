
import React from 'react';
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';

const FrontPageListingSingle = ({context}) => {
  const posts = context.posts;
  return (
    <div >
      <Link to="/" style={{fontSize:"50px"}}>Home</Link>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title.rendered}</h2>
          {/* <p>{post.content.rendered}</p> */}
          <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
        </div>
      ))}
    </div>
  )
}

export default WithConsumer(FrontPageListingSingle)