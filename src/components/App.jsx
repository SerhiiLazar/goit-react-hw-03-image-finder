import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import * as API from './api/articlesApi';
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";


class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: false,
  } 

  // async componentDidMount() {
  //    const {query, page} = this.state;
    
    
  //   this.setState({ images: [] });
    
  //   if(query === '' && page === 1) {
  //     try {
        
  //       this.setState({ isLoading: true });

  //       const images = await API.fetchImages(query, page);
        
  //       this.setState({
  //         images: [...images.hits], 
  //         isLoading: false,
  //       })
  //       console.log("A:",images)
  //     } catch (error) {
  //       this.setState({error: true});
  //     }
  //   }
  // }
  async componentDidUpdate(prevState, prevState) {
    const {query, page} = this.state;
    
    
    
    // const prevQuery = prevState.query;
    // const nextQuery = this.state.query;

    

    // const prevPage = prevState.page;
    // const nextPage = this.state.page;

    // console.log("обновился");
    // console.log('prevQuery:', prevQuery);
    // console.log('nextQuery:', nextQuery);
    
    if(prevState.page !== page || prevState.query !== query) {
      
      try {
        this.satState({ isLoading: true});
        
        const images = await API.fetchImages(nextQuery, nextPage);
        // if(images.totalHits > API.perPage) {
        //   показать больше 
        // }

        this.setState(prevProps => ({
          images: [...prevProps.images, ...images.hits],
          isLoading: false,
        }))
        console.log("B:", images);
      } catch (error) {
        this.setState({
          error: true
        });
      }
    }
    
  }
  
  hendleSubmitForm = (query) => {
    this.setState({query: query, page: 1, images: []})
   
   
   
    
  }


  render () {
    const submitForm = this.hendleSubmitForm;
    const {isLoading, images, } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={submitForm}/>
        <ImageGallery  images={images}/>
        <Loader isLoading={isLoading} />
        
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