import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import CodeThePost from './CodeThePost';

const CodeTheLoop = ({ context }) => {

  // console.log('THE LOOP CONTEXT: ', context);
    const posts = () => context.posts;
    const pos = posts();
  
    let results = '';
    
    if(context.appError){
      results = <div className="app-error">{context.appError}</div>;      
    }else{
      if(pos.length === 0){
        results = <div className="no-results">no results</div>;
      }else{
        results = pos.map(function(item,i){
            return <CodeThePost key={i} index={i}></CodeThePost>
          })
      }
    }

    return (results);

};
export default WithConsumer(CodeTheLoop);