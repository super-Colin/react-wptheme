import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import DesignThePost from './DesignThePost';

const DesignTheLoop = ({ context }) => {

  console.log('THE LOOP CONTEXT: ', context);
    const posts = () => context.posts;
    const pos = posts();
  
    let results = '';
    
    if(context.appError){
      results = <div className="app-error">{context.appError}</div>;      
    }else{
      if(pos.length === 0){
        results = <div className="no-results">Working on it.</div>;
      }else{
        results = pos.map(function(item,i){
            return <DesignThePost key={i} index={i}></DesignThePost>
          })
      }
    }
    return ( results);

};
export default WithConsumer(DesignTheLoop);