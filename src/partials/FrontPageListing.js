import React from 'react';
import WithConsumer from '../context/WithConsumer';
import { Link } from 'react-router-dom';


function getChaptersAndExcerpts(context){
  const posts = context.posts;
  let chapterResults = [];
  let excerptsResults = [];
  posts.map((item, i)=>{
    chapterResults.push(<div key={i}>{item.title.rendered}</div>);
    excerptsResults.push(
    <div key={i} className="frontPageListing_excerpts-excerpt">
      <Link to={context.pageUrlToPath(item.link)} className="frontPageListing_excerpts-excerpt-title" >{item.title.rendered}</Link>
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

      <div className="frontPageListing_chaptersListing">
        <div>{
          chaptersAndPosts.chapters.map( (item) =>  item )
        }</div>
      </div>

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