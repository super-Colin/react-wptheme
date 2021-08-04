import React from "react";
import Axios from "axios";
import { useLocation, useParams } from 'react-router-dom';
//context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props); 

    let restType = '';
    // let restType = this.getRestType(props.router.match.path);
    let route = props.router.match.path;
    let slug = props.router.match.params.slug ? props.router.match.params.slug : '';
    let term = props.router.match.params.term ? props.router.match.params.term : '';
    let categoryIds = this.getCategoryIdsAsDictionary();
    

    this.state = {
      PHP_VARS : window.PHP_VARS, //PHP VARS are set in the functions.php file in /public
      term : term,
      slug : slug,
      heroSeen : false,
      // restType : restType,
      restType : 'post',
      route : route,
      posts : [], 
      currentPage : 1,
      totalPages : 0,
      appError : '',
      categoryIds : categoryIds,

      //global methods
      pageUrlToPath : this.pageUrlToPath.bind(this),
      decodeHtmlText : this.decodeHtmlText.bind(this),
      getCategoryIdsAsDictionary: this.getCategoryIdsAsDictionary.bind(this),
    };
  }

  
  
  // ~~~~~~~~~~~~~~~~~~~
  // ~~~ React State ~~~
  // ~~~~~~~~~~~~~~~~~~~
  componentDidMount(){
    // window.scrollTo(0, 0)
//     window.scroll({
// 	top: 0,
// 	behavior: "smooth"
// });
    // document.getElementById("content").scrollIntoView(true);
    console.log('[[[componentDidMount]]]');
    console.log('[[[componentDidMount]]] ROUTER state: ', this.props.router);
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    if(this.props.router.location.pathname !== '/'){
      slug = this.props.router.location.pathname;
      this.setState({slug: slug});
    }
    this.getPosts(this.buildUrl(slug));
    this.getCategoryIdsAsDictionary()
  }

  componentDidUpdate(prevProps){ 
//     window.scroll({
// 	top: 0,
// 	behavior: "smooth"
// });
// document.getElementById("content").scrollIntoView(true);

    console.log('[[[componentDidUpdate]]] prevProps: ', prevProps)
    console.log('[[[componentDidUpdate]]] router log: ', this.props.router.match)
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    if(this.props.router.location.pathname !== '/'){
      slug = this.props.router.location.pathname;
    }
    if(prevProps.router.location.pathname !== this.props.router.location.pathname){  
      this.setState({
        currentPage : 1,
        slug: slug,
        heroSeen: true
      },
      function(){
        let url = this.buildUrl(slug);
        let results = this.getPosts(url);
        console.log('[[[componentDidUpdate url]]]: Slug',slug ,'url', url, 'results: ', results );        
        return results;
      })
      
    } 
  }


  // ~~~~~~~~~~~~
  // ~~~ AJAX ~~~
  // ~~~~~~~~~~~~
  getPosts(url){
    let self = this;
    
    Axios.get(url).then((response)=>{
      // console.log('getPosts url, response.data: ', url, response.data);
      self.setState({
        posts : response.data, 
        totalPages : response.headers['x-wp-totalpages']
      });
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
    }).catch(function(error){
      console.log(error);
      self.appError = 'An unexpected error occurred';
    });
  }

  buildUrl(slug){
    // let url = '/wp-json/wp/v2/'; // PRODUCTION
    let url = '/scwp/wp-json/wp/v2/'; // DEV ENV ONLY
    url += slug ? 'posts/?slug=' + slug : 'posts/';
    // console.log('BuilUrl : ', url);
    return url;
  }




  // ~~~~~~~~~~~
  // ~~ UTILS ~~
  // ~~~~~~~~~~~
  decodeHtmlText(input) { // decode html entities out of text
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  pageUrlToPath = (pageURL) => {
    let domainRelativePath = pageURL.split( this.getDomainPrefix() )[1];
    // console.log('pageUrlToPath domainRelativePath: ', domainRelativePath, 'from: ', pageURL);
    if( ! domainRelativePath ){
      return '/';
    }
    return domainRelativePath;
  }
  getDomainPrefix = ()=>{ //should I move this to state? to reduce calls to this function??
    const { pathname } = useLocation();
    // console.log('ROUTER PARAMS: ', useParams());
    let locationMinusHttp = window.location.href.split('://')[1]; // ["http://",  "website.com/some/#hash-link"]
    let locationMinusHashLink = locationMinusHttp.split('#')[0]; // ["website.com/some/", "#hash-link"]
    if(pathname === "/"){ 
      return locationMinusHashLink; 
    }else{ 
      return locationMinusHashLink.split(pathname)[0]; // ["website.com/", "some/"]
    }
  }

  getCategoryIdsAsDictionary(){
    let categoryIds = {};
    window.PHP_VARS.categories.map((item)=>{
      let idNumber = item.term_id;
      // console.log('getCategoryIdsAsDictionary LOOPING: ', categoryIds[idNumber], item.name);
      if(! categoryIds[idNumber]){
        categoryIds[idNumber] = item.name;
      }
    });
    return categoryIds;
  }



  // ~~~~~~~~~~~~
  // ~~ RENDER ~~
  // ~~~~~~~~~~~~
  render() {
    return (
      <storeContext.Provider value={this.state}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}