import {Component} from "react";
import { ToastContainer, toast } from 'react-toastify';
import {Loader} from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

import * as API from './api/articlesApi';
import Searchbar from "./Searchbar";
import {ImageGallery} from "./ImageGallery";


class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
  } 


  hendleSubmitForm = async ({query: keyword}) => {
    const {query, page} = this.state;
      
    if(keyword === '') {
      toast("You have not entered anything, please enter!");
            return
      }
    
    this.setState({  page: 1, query: keyword, images: [] });
    if(query === keyword && page === 1) {
      try {
        
        this.setState({ isLoading: true });

        const images = await API.fetchImages(query, page);

        this.setState({
          images: [...images.hits], 
          isLoading: false,
        })
      } catch (error) {
        this.setState({error: true, isLoading: false});
      }
    }
  }

  
  
  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    
    if(prevPage !== nextPage || prevQuery !== nextQuery) {
      
      try {
        this.satState({ isLoading: true});
        
        const images = await API.fetchImages(nextQuery, nextPage);
        // if(images.totalHits > API.perPage) {
        //   показать больше 
        // }

        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          isLoading: false,
        }))
        console.log(images);
      } catch (error) {
        this.setState({
          error: false, 
          isLoading: false,
        });
      }
    }
  }
  
  
  render () {
    const submitForm = this.hendleSubmitForm;
    const {isLoading, images, } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={submitForm}/>
        <Loader isLoading={isLoading} />
        <ImageGallery  images={images}/>
        <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        
        
      </div>
      
    )
    
    // const images =  this.query;
    
    // {/* */} return console.log(images)
  }
};

export default App;