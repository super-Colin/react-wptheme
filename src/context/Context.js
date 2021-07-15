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

    // let restType = 'code';
    let restType = this.getRestType(props.router.match.path);
    let codeCatId = this.getCategoryIdFromName('code');
    let designCatId = this.getCategoryIdFromName('design');
    let route = props.router.match.path;
    let slug = props.router.match.params.slug ? props.router.match.params.slug : '';
    let term = props.router.match.params.term ? props.router.match.params.term : '';
    let catid = props.router.match.params.catid ? props.router.match.params.catid : ''; 
    // let currentPagePostType = ;

    this.state = {
      PHP_VARS : window.PHP_VARS,
      term : term,
      slug : slug,
      restType : restType,
      codecatid : codeCatId,
      designcatid : designCatId,
      catid : catid,
      route : route,
      // currentPagePostType : currentPagePostType,
      posts : [], 
      currentPage : 1, 
      totalPages : 0,      
      appError : '',
      //global methods      
      nextClicked : this.nextClicked.bind(this), 
      previousClicked : this.previousClicked.bind(this), 
      submitSearch : this.submitSearch.bind(this), 
      updateTerm : this.updateTerm.bind(this),

      setRestType : this.setRestType.bind(this),
      pageUrlToPath : this.pageUrlToPath.bind(this),
      htmlDecode : this.htmlDecode.bind(this),
    };

  }

  getCategoryIdFromName(name){
    let catid = 0;
    const categories = window.PHP_VARS.categories;
    // console.log('getCategories ', categories);
    categories.map(function(category){
      if(category.slug === name){
        // console.log('getCategory found: ', category.name);
        catid = category.term_id;
      }
    })
    console.log('getCategoryIdFromName: ', name, catid);
    return catid;
  }

  pageUrlToPath = (pageURL) => {
    // let domainRelativePath = pageURL.split(domainPrefix)[1];
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

  
  setRestType(type=false){
    // let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    // console.log('setRestType: ', type, 'slug: ', slug);
    console.log('setRestType: ', type);
    this.setState({
      restType : type,
      // slug : slug
    })
  }

  htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  componentDidMount(){
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    console.log('componentDidMount: ', this.buildUrl(slug) );
    this.getPosts(this.buildUrl(slug));
  }

  componentDidUpdate(prevProps){ 
    let slug = this.props.router.match.params.slug ? this.props.router.match.params.slug : '';
    let catid = this.props.router.match.params.catid ? this.props.router.match.params.catid : '';
    if(prevProps.router.location.pathname !== this.props.router.location.pathname){  
      let curProps = this.props.router.match;       
      this.setState({
        currentPage : 1, 
        slug: slug,
        catid: catid,
        restType : this.getRestType(curProps.path),
        catid : curProps.params.catid ? curProps.params.catid : ''
      },
      function(){
        let url = this.buildUrl(slug);
        let results = this.getPosts(url);
        // console.log('componentDidUpdate url: ', this.buildUrl() );
        console.log('componentDidUpdate results: ', results, 'url: ', url );
        // this.getPosts(this.buildUrl()); 
        
        return results
      })
      
    } 
  }

  buildUrl(slug){
    console.log('buildUrl slug, restType: ', slug, this.state.restType);
    // let url = '/wp-json/wp/v2/'; // PRODUCTION
    let url = '/wtp/wp-json/wp/v2/'; // DEV ENV ONLY
    switch(this.state.restType){      
      case 'page':
        // console.log('buildUrl SWITCH: page');
        url += 'pages/?slug=';
        url += this.state.slug
      break;
      case 'design':
      case 'code': 
        console.log('buildUrl SWITCH: category code');
        // url += 'posts?categories=' + this.state.codecatid;
        url += 'posts?categories=' + this.state[ this.state.restType + 'catid'];
      break;
      // case 'design': 
      //   // console.log('buildUrl SWITCH: category design');
      //   url += 'posts?categories=' + this.state.designcatid;
      // break;
      case 'post':
      default:
        // console.log('buildUrl SWITCH: default');
        // url += this.state.slug ? 'posts/?slug=' + this.state.slug : 'posts/?page=' + this.state.currentPage;
        url += slug ? 'posts/?slug=' + slug : 'posts/?page=' + this.state.currentPage;
        // url += this.state.restType + 's/' +
        break;
    }
    // console.log('BuilUrl : ', url);
    return url;
  }




  getRestType (path){
    let restType = 'post';     
    switch(path){
      case '/page/:slug' :
        restType = 'page';
        break;
      case '/search/:term':
        restType = 'search';
        break;
      case '/code/':
        restType = 'code';
        break;
      case '/design/':
        restType = 'design';
        break;
      case '/post/:slug' || '/code/:slug' || '/design/:slug':
      default:
        restType = 'post';
        break;
    }
    return restType;
  }

  getPosts (url){
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


  updateTerm (term){
    this.setState({
      term : term
    })
  }


  submitSearch(){      
    this.setState({
      restType : 'search',  
      currentPage : 1
    });

    this.props.router.history.push('/search/'+this.state.term);
  }




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