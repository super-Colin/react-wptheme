import React from 'react'; 
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
import PostMeta from './PostMeta';

const CodeThePost = ({index,context}) => {

    const posts = () => context.posts;
    // console.log( 'ThePost posts: ', posts());
    const item = posts()[index];  
    console.log('item is: ', item);
    let theContent = ''; 
    
    switch(context.route){
        case '/code/': //if overview archive
            theContent = context.htmlDecode(item.excerpt.rendered); //show excerpt only
        break;
        default: //for single, pages - show entire content
        console.log('ThePost full content rendered');
            theContent = context.htmlDecode(item.content.rendered);
        break;
    }   

    return (
        <div id={'post-id-' + item.id} className={'post-item'}>
            <h1>
                <Link to={ '/code' + context.pageUrlToPath(item.link)} >{context.htmlDecode(item.title.rendered)}</Link>
            </h1>
            <PostMeta index={index}></PostMeta>
            {/* <div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div> */}
            {context.htmlDecode(theContent)}
        </div>);

};
export default WithConsumer(CodeThePost);