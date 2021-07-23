import React from 'react'; 
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';
import PostMeta from './PostMeta';

const CodeThePost = ({index,context}) => {

    const posts = () => context.posts;
    const item = posts()[index];  
    let theContent = ''; 
    
    switch(context.route){
        case '/code/': // if overview archive
            // theContent = context.htmlDecode(item.excerpt.rendered); //show excerpt only
            theContent = item.excerpt.rendered; //show excerpt only
        break;
        default: //for single, pages - show entire content
        // console.log('ThePost full content rendered', item.content);
            // theContent = context.htmlDecode(item.content.rendered);
            theContent = item.content.rendered;
        break;
    }   

    return (
        <div id={'post-id-' + item.id} className={'post-item'}>
            <h1>
                Code <Link to={ '/code' + context.pageUrlToPath(item.link)} >{context.htmlDecode(item.title.rendered)}</Link>
            </h1>
            <PostMeta index={index}></PostMeta>
            <div className="post-content sc_gutters" dangerouslySetInnerHTML={{__html:theContent}}></div>
        </div>);

};
export default WithConsumer(CodeThePost);