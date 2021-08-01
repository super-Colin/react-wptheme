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

    let restType = '';
    // let restType = this.getRestType(props.router.match.path);
    let route = props.router.match.path;
    let slug = props.router.match.params.slug ? props.router.match.params.slug : '';
    let term = props.router.match.params.term ? props.router.match.params.term : '';

    this.state = {
      PHP_VARS : window.PHP_VARS, //PHP VARS are set in the functions.php file in /public
      term : term,
      slug : slug,
      // restType : restType,
      restType : 'post',
      route : route,
      posts : [], 
      currentPage : 1,
      totalPages : 0,
      appError : '',

      //global methods
      pageUrlToPath : this.pageUrlToPath.bind(this),
      decodeHtmlText : this.decodeHtmlText.bind(this),
    };
  }

  
  
  // ~~~~~~~~~~~~~~~~~~~
  // ~~~ React State ~~~
  // ~~~~~~~~~~~~~~~~~~~
  componentDidMount(){
    console.log('[[[componentDidMount]]]');
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    this.getPosts(this.buildUrl(slug));
  }

  componentDidUpdate(prevProps){ 
    console.log('[[[componentDidUpdate]]] recieving: ', prevProps)
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    if(prevProps.router.location.pathname !== this.props.router.location.pathname){  
      let curProps = this.props.router.match;       
      this.setState({
        currentPage : 1,
        slug: slug,
        restType : this.getRestType(curProps.path),
      },
      function(){
        let url = this.buildUrl(slug);
        let results = this.getPosts(url);
        console.log('componentDidUpdate url: ', url, 'results: ', results );        
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
      console.log('getPosts url, response.data: ', url, response.data);
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
  decodeHtmlText(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  pageUrlToPath = (pageURL) => {
    let domainRelativePath = pageURL.split( this.getDomainPrefix() )[1];
    return domainRelativePath;
  }
  getDomainPrefix = ()=>{
    const { pathname } = useLocation();
    let  domainPrefix = "";
    if(pathname === "/"){
      domainPrefix =  window.location.href.split('://')[1]; // ["http", "website.com/"]
    }else{
      let domainPrefixMinusHttp = window.location.href.split('://')[1]; // ["http", "website.com/some"]
      domainPrefix = domainPrefixMinusHttp.split(pathname)[0]; // ["website.com"]
    }
    return domainPrefix;
  }


  render() {
    return (
      <storeContext.Provider value={this.state}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}