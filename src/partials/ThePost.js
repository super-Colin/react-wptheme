import React from 'react'; 
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
import PostMeta from './PostMeta';

const ThePost = ({index,context}) => {

    const posts = () => context.posts;
    // console.log( 'ThePost posts: ', posts());
    const item = posts()[index];  
    
    let linkPrefix = item.type === 'page' ? '/page/' : '/post/';
    let theContent = ''; 

    function setRestType(e){
        let restType = e.target.dataset['posttype'];
        context.setRestType(restType);
    }
    
    switch(context.route){
        case '/': //if homepage,
        case '/search/:term': //or if search
        case '/category/:catid': //or if search
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
                <Link to={context.pageUrlToPath(item.link)} onClick={setRestType} data-posttype={item.type} >{item.title.rendered}</Link>
            </h1>
            <PostMeta index={index}></PostMeta>
            <div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div>
        </div>);

};
export default WithConsumer(ThePost);