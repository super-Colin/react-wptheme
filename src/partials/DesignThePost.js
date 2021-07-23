import React from 'react'; 
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
import PostMeta from './PostMeta';

const DesignThePost = ({index,context}) => {

    const posts = () => context.posts;
    // console.log( 'ThePost posts: ', posts());
    const item = posts()[index];  
    
    let theContent = ''; 
    console.log('item is: ', item);
    switch(context.route){
        case '/design': //if homepage,
            theContent = item.excerpt.rendered; //show excerpt only
        break;
        default: //for single, pages - show entire content
            theContent = item.content.rendered;
        break;
    }

    return (
        <div id={'post-id-'+item.id} className={'post-item'}>
            <h1>
                {/* <Link to={linkPrefix+item.slug} onClick={setRestType} data-posttype={item.type} >{item.title.rendered}</Link> */}
                <Link to={ '/design' +context.pageUrlToPath(item.link)} >{item.title.rendered}</Link>
            </h1>
            <PostMeta index={index}></PostMeta>
            <div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div>
        </div>);

};
export default WithConsumer(DesignThePost);