import React from "react";
import Axios from "axios";
import { useLocation } from 'react-router-dom';
//context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props); 

    let restType = 'page';
    let route = props.router.match.path;
    let slug = props.router.match.params.slug ? props.router.match.params.slug : '';
    let term = props.router.match.params.term ? props.router.match.params.term : '';
    let catid = props.router.match.params.catid ? props.router.match.params.catid : ''; 
    // let currentPagePostType = ;

    this.state = {
      term : term,
      slug : slug,
      restType : restType,
      catid : catid,
      route : route,
      // currentPagePostType : currentPagePostType,
      posts : [], 
      comments : [],
      currentPage : 1, 
      totalPages : 0,      
      commentFields : { 
        fullName : '', 
        email : '', 
        website : '', 
        comment : ''
      },
      appError : '',
      commentErrors : [],
      //global methods      
      nextClicked : this.nextClicked.bind(this), 
      previousClicked : this.previousClicked.bind(this), 
      submitSearch : this.submitSearch.bind(this), 
      updateTerm : this.updateTerm.bind(this), 
      submitComment : this.submitComment.bind(this), 
      updateCommentFields : this.updateCommentFields.bind(this),
      updateCommentErrors : this.updateCommentErrors.bind(this),

      setRestType : this.setRestType.bind(this),
      pageUrlToPath : this.pageUrlToPath.bind(this),

    };

  }


  pageUrlToPath = (pageURL) => {
    // let domainRelativePath = pageURL.split(domainPrefix)[1];
    let domainRelativePath = pageURL.split( this.getDomainPrefix() )[1];
    return domainRelativePath;
  }
  getDomainPrefix = ()=>{
    const { pathname } = useLocation();
    let  domainPrefix = "";
    if(pathname == "/"){
      domainPrefix =  window.location.href.split('://')[1]; // ["http", "website.com/"]
    }else{
      let domainPrefixMinusHttp = window.location.href.split('://')[1]; // ["http", "website.com/some"]
      domainPrefix = domainPrefixMinusHttp.split(pathname)[0]; // ["website.com"]
    }
    return domainPrefix;
  }

  
  setRestType(type=false){
    // let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    // console.log('setRestType: ', type, 'slug: ', slug);
    console.log('setRestType: ', type);
    this.setState({
      restType : type,
      // slug : slug
    })
  }



  componentDidMount(){
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    console.log('componentDidMount: ', this.buildUrl(slug) );
    this.getPosts(this.buildUrl(slug));
  }

  componentDidUpdate(prevProps){ 
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    if(prevProps.router.location.pathname !== this.props.router.location.pathname){  
      let curProps = this.props.router.match;       
      this.setState({
        currentPage : 1, 
        slug: slug,
        catid : curProps.params.catid ? curProps.params.catid : ''
      },
      function(){
        let url = this.buildUrl(slug)
        let results = this.getPosts(url);
        // console.log('componentDidUpdate url: ', this.buildUrl() );
        console.log('componentDidUpdate results: ', results, 'url: ', url );
        // this.getPosts(this.buildUrl()); 
        
        return results
      })
      
    } 
  }

  buildUrl(slug){
    // let url = '/wp-json/wp/v2/'; // PRODUCTION
    let url = '/wtp' + '/wp-json/wp/v2/'; // DEV ENV ONLY
    switch(this.state.restType){      
      case 'page':
        console.log('buildUrl SWITCH: page');
        url += 'pages/?slug=';
        url += this.state.slug
      break;
      case 'search': 
        console.log('buildUrl SWITCH: search');
        url += 'search/?s=';
        url += this.state.term;
        url += '&page=' + this.state.currentPage;
      break;
      case 'category': 
        console.log('buildUrl SWITCH: category');
        url += 'posts?categories=';
        url += this.state.catid;
        url += '&page=' + this.state.currentPage;
      break;
      case 'post':
      default:
        console.log('buildUrl SWITCH: default');
        // url += this.state.slug ? 'posts/?slug=' + this.state.slug : 'posts/?page=' + this.state.currentPage;
        url += slug ? 'posts/?slug=' + slug : 'posts/?page=' + this.state.currentPage;
        // url += this.state.restType + 's/' +
        break;
    }
    return url;
  }


  getPosts (url){
    let self = this;
    
    Axios.get(url).then((response)=>{
      console.log('getPosts url, response.data: ', url, response.data);
      self.setState({
        posts : response.data, 
        totalPages : response.headers['x-wp-totalpages']
      },
      // function(){          
      //   //get comments if post, and post array is not empty       
      //   if(self.state.route === '/:slug' 
      //     && self.state.posts[0]){           
      //     self.getComments(self.state.posts[0].id);
      //   }  
      // }
      )
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
    }).catch(function(error){
      console.log(error);
      self.appError = 'An unexpected error occurred';
    });  
  }


  updateTerm (term){
    this.setState({
      term : term
    })
  }

  updateCommentErrors (errors){
    this.setState({
      commentErrors : errors
    })
  }

  submitSearch(){      
    this.setState({
      restType : 'search',  
      currentPage : 1
    });

    this.props.router.history.push('/search/'+this.state.term);
  }

  updateCommentFields (key,val){
    //TO UPDATE NESTED STATE:
    //https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
    var commentFields = {...this.state.commentFields}
    commentFields[key] = val;
    this.setState({commentFields})   
  }

  submitComment(){
    // console.log(this.state);
    let postdata = {
      'post' : this.state.posts[0].id,
      'author_name' : this.state.commentFields.fullName, 
      'author_email' : this.state.commentFields.email,
      'author_url' : this.state.commentFields.website, 
      'content' : this.state.commentFields.comment
    }

    let self = this;

    Axios.post('/wp-json/wp/v2/comments',postdata).then((response)=>{     

      let cmnt = response.data; 
      cmnt.waiting = 'Your comment is waiting approval';
      let cmnts = self.state.comments;
      cmnts.push(cmnt);
      self.setState({
        comments : cmnts 
      })      
    }).catch(function(error){  
      let err = [];
      err.push(error.message);
      self.setState({
        commentErrors : err
      })
    }); 

  }

  // getComments(id){
  //   let url = '/wp-json/wp/v2/comments?post=' + id;
  //   let self = this;
  //   Axios.get(url).then((response)=>{       
  //     self.setState({
  //       comments : response.data 
  //     })      
  //   }).catch(function(error){
  //     console.log(error);
  //   }); 
  // }

  nextClicked (){ 
    let newPage = this.state.currentPage + 1;    
    this.setState({
      currentPage : newPage
    },function(){
      this.getPosts(this.buildUrl());
    })   
  }


  previousClicked (){
    let newPage = this.state.currentPage - 1;    
    this.setState({
      currentPage : newPage
    },function(){
      this.getPosts(this.buildUrl());
    })
  }


  render() {
    return (
      <storeContext.Provider value={this.state}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}