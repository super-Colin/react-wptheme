import React from 'react';
import WithConsumer from '../context/WithConsumer';
import { Link } from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';


function getChaptersAndExcerpts(context){
  const posts = context.posts;
  let chapterResults = [];
  let excerptsResults = [];
  posts.map((item, i)=>{
    const itemTitle = context.decodeHtmlText(item.title.rendered);
    // chapterResults.push(<li key={i}>{item.title.rendered}</li>);
    // chapterResults.push(<Link to={{hash:itemTitle}} key={i}>{itemTitle}</Link>);
    chapterResults.push(<li><HashLink smooth to={'/#' + itemTitle} key={i}>{itemTitle}</HashLink></li>);
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
  const chaptersAndPosts = getChaptersAndExcerpts(context);
  return (
    <div className="frontPageListing_container">

      <div className="frontPageListing_heading">
        <h2 className="frontPageListing_title">Some Stuff To Read</h2>
      </div>

      {/* <div className="frontPageListing_chaptersListing"> */}
        <ul className="frontPageListing_chaptersListing">{
          chaptersAndPosts.chapters.map( (item) =>  item )
        }</ul>
      {/* </div> */}

      <div className="frontPageListing_excerptsListing">
        <div>{
          chaptersAndPosts.excerpts.map( (item) =>  item )
        }</div>
      </div>
    </div>
  )
}

export default WithConsumer(FrontPageListing);



    // <div className="frontPageListing_container">
    //   <div className="frontPageListing_header">
    //     <h2 className="frontPageListing_title">
    //       {context.get('frontPageListingTitle')}
    //     </h2>
    //     <p className="frontPageListing_subtitle">
    //       {context.get('frontPageListingSubtitle')}
    //     </p>
    //   </div>
    //   <div className="frontPageListing_list">
    //     {context.get('frontPageListingItems').map((item, index) => {
    //       return (
    //         <div className="frontPageListing_item" key={index}>
    //           <div className="frontPageListing_item_title">
    //             {item.title}
    //           </div>
    //           <div className="frontPageListing_item_description">
    //             {item.description}
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>