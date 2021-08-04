import React from 'react';
import WithConsumer from '../context/WithConsumer';
import { Link } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';

import FrontPageHero from '../partials/FrontPageHero';
import { motion } from 'framer-motion';




function getChaptersAndExcerpts(context){

  console.log('getChaptersAndExcerpts', context);
  const posts = context.posts;
  posts.sort( (a,b) => { // sort posts array by category
    if (a.categories[0] < b.categories[0]) {
      return -1;
    } else if (a.categories[0] > b.categories[0]) {
      return 1;
    } else {
      return 0;
    }
  });
  let chapterResults = [];
  let excerptsResults = [];

  posts.map((item, i)=>{
    const itemTitle = context.decodeHtmlText(item.title.rendered); //remove html entitites
    const itemCategoryId = item.categories[0];

    chapterResults.push(
    <li key={i} ><HashLink smooth to={'/#' + itemTitle}>{itemTitle}</HashLink></li>
    );


    excerptsResults.push(
    <div key={i} id={itemTitle} className="frontPageListing_excerpts-excerpt">
      <Link to={context.pageUrlToPath(item.link)} className="frontPageListing_excerpts-excerpt-title" >{itemTitle}</Link>
      <div dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}></div>
    </div>
    );
  });


  return {chapters:chapterResults, excerpts:excerptsResults};
}

const FrontPageListing = ( {context} ) => {
  const pageTransitions={
    in:{
      // backgroundColor: "blue",
      x: 0,
    },
    out:{
      // backgroundColor: "limegreen",
      x: "-100vw",
    },
    transition:{
      duration: 0.66,
      // timingFunction: "ease-in",
      timingFunction: "anticipate",
    },
  }
  const chaptersAndPosts = getChaptersAndExcerpts(context);
  return (
    // <div className="frontPageListing_container">
    <div >
      {context.heroSeen ? null : <FrontPageHero /> }
      
      <motion.div
        id="content"
        className="frontPageListing_container"
        key="frontPageListing_container"
        initial={pageTransitions.out}
        animate={pageTransitions.in}
        exit={pageTransitions.out}
        transition={pageTransitions.transition}
      >

        <div className="frontPageListing_heading">
          <h2 className="frontPageListing_title">Some Stuff To Read</h2>
        </div>

          <ul className="frontPageListing_chaptersListing">{
            chaptersAndPosts.chapters.map( (item) =>  item )
          }</ul>

        <div className="frontPageListing_excerptsListing">
          <div>{
            chaptersAndPosts.excerpts.map( (item) =>  item )
          }</div>
        </div>
      {/* </div> */}
      </motion.div>
    </div>
  )
}

export default WithConsumer(FrontPageListing);