import React from 'react';
import WithConsumer from '../context/WithConsumer';
import { Link } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';

import FrontPageHero from './FrontPageHero';
import { motion } from 'framer-motion';




function getChaptersAndExcerpts(context){

  // console.log('getChaptersAndExcerpts', context);
  const posts = context.posts;
  // posts.sort( (a,b) => { // sort posts array by category
  //   if (a.categories[0] < b.categories[0]) {
  //     return -1;
  //   } else if (a.categories[0] > b.categories[0]) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  let chapterResults = [];
  let excerptsResults = [];

  const postsAsSortedObject = {};
  posts.map((item)=>{
    let category = item.categories[0];
    if (! postsAsSortedObject[category]) {
      postsAsSortedObject[category] = [];
    }
    postsAsSortedObject[category].push(item);
  })
  console.log('getChaptersAndExcerpts SORTED', postsAsSortedObject);



  Object.keys(postsAsSortedObject).map((categoryId, i)=>{
    console.log(`${context.categoryNamesbyId[categoryId]}: ${postsAsSortedObject[categoryId]}`);

    let categoryChapterLinksUl = postsAsSortedObject[categoryId].map((item, i)=>{
      const itemTitle = context.decodeHtmlText(item.title.rendered); //remove html entitites
      return <li key={i} ><HashLink smooth to={'/#' + itemTitle}>{itemTitle}</HashLink></li>
    });
    chapterResults.push(<ul key={i + 11} className="chapter-listing">
      <li><h4>{context.categoryNamesbyId[categoryId]}</h4></li>
      {categoryChapterLinksUl.map((item)=>item)}
    </ul>);

    excerptsResults.push(<div key={i + 111} id={context.categoryNamesbyId[categoryId]} className="chapter-listing">
      <li><h4>{context.categoryNamesbyId[categoryId]}</h4></li>
      {postsAsSortedObject[categoryId].map((item, i)=>{
        const itemTitle = context.decodeHtmlText(item.title.rendered); //remove html entitites
        return <li key={i} ><HashLink smooth to={'/#' + itemTitle}>{itemTitle}</HashLink></li>
      })}
    </div>);

  })

  console.log('results so far:', {chapters:chapterResults, excerpts:excerptsResults});


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