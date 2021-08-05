import React from 'react';
import WithConsumer from '../context/WithConsumer';
import { Link } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';

import FrontPageHero from './FrontPageHero';
import { motion } from 'framer-motion';




function getChaptersAndExcerpts(context){

  console.log('getChaptersAndExcerpts context', context);
  const posts = context.posts;
  let finishedChapterResults = [];
  let finishedExcerptsResults = [];
  let postsAsSortedObject = {};

  posts.map((item)=>{ //set postsAsSortedObject
    let category = item.categories[0];
    if (! postsAsSortedObject[category]) {
      postsAsSortedObject[category] = [];
    }
    console.log(`pushing ${item} to $postsAsSortedObject[category]{}`);
    postsAsSortedObject[category].push(item);
  })
  console.log('postsAsSortedObject', postsAsSortedObject);
  let sortedJsx = {chapters: [], excerpts: []};

  Object.keys(postsAsSortedObject).map((categoryId)=>{
    console.log(`${context.categoryNamesbyId[categoryId]}: ${postsAsSortedObject[categoryId]}`);
    let innerChapterResults = [];
    let innerExcerptsResults = [];

    postsAsSortedObject[categoryId].map((item, i)=>{ // for each post in this category
      const itemTitle = context.decodeHtmlText(item.title.rendered); //remove html entitites from title

      innerChapterResults.push(<li key={i+22} ><HashLink smooth to={'/#' + itemTitle}>{itemTitle}</HashLink></li>);

      innerExcerptsResults.push(<div key={i+55} id={itemTitle} className="frontPageListing_excerpts-excerpt">
        <Link to={context.pageUrlToPath(item.link)} className="frontPageListing_excerpts-excerpt-title" >{itemTitle}</Link>
        <div dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}></div>
      </div>);
    });

    const finishedInnerChaptersResults = (<ul key={context.categoryNamesbyId[categoryId] + "chapters"} className="chapter-listing">
      <li className="chapter-listing_categoryTitle"><HashLink smooth to={'/#' + context.categoryNamesbyId[categoryId]+ 'excerpts'}>{context.categoryNamesbyId[categoryId]}</HashLink></li>
      {innerChapterResults.map((item)=>item)}
    </ul>);
    finishedChapterResults.push(finishedInnerChaptersResults);

    const finishedInnerExcerptsResults =(<div key={context.categoryNamesbyId[categoryId] + "excerpts"} id={context.categoryNamesbyId[categoryId] + 'excerpts'} className="excerpts-listing">
      <h2 className="excerpts-listing_categoryTitle">{context.categoryNamesbyId[categoryId]}</h2>
      {innerExcerptsResults.map((item)=> item)}
    </div>);
    finishedExcerptsResults.push(finishedInnerExcerptsResults);

    console.log('finsihed object: ', {chapters:finishedInnerChaptersResults, excerpts:finishedInnerExcerptsResults});
    sortedJsx.chapters.push(finishedInnerChaptersResults);
    sortedJsx.excerpts.push(finishedInnerExcerptsResults);
  })

  console.log('jsx: ',sortedJsx);
  return sortedJsx;
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

  console.log('chaptersAndPosts', chaptersAndPosts);
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


        {chaptersAndPosts.chapters ? (<ul className="frontPageListing_chaptersListing">{
          chaptersAndPosts.chapters.map( (item) =>  item )
        }</ul>) : <p>Chapters empty</p>}
        {/* {chaptersAndPosts.chapters ? <p>Chapters empty</p> : (<ul className="frontPageListing_chaptersListing">{
          chaptersAndPosts.chapters.map( (item) =>  item )
        }</ul>) } */}

        {chaptersAndPosts.excerpts ? (<div className="frontPageListing_excerptsListing">
          <div>{
            chaptersAndPosts.excerpts.map( (item) =>  item )
          }</div>
        </div>) : <p>Excerpts empty</p>}


        {/* <ul className="frontPageListing_chaptersListing">{
          chapters.map( (item) =>  item )
        }</ul>

        <div className="frontPageListing_excerptsListing">
          <div>{
            excerpts.map( (item) =>  item )
          }</div>
        </div> */}


      </motion.div>
    </div>
  )
}

export default WithConsumer(FrontPageListing);