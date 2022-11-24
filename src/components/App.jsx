import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import * as API from './api/articlesApi';
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import Button from "./Button";


class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    currPage: 0,
    totalImages: 0,
    isLoading: false,
    error: false,
  } 

 
    

  async componentDidUpdate(_, prevState) {
    const {query, page} = this.state;
    console.log('предыдущий', prevState.page);
    console.log('обновилось', this.state.page);
    console.log('предыдущий', prevState.query);
    console.log('обновилось', this.state.query);
    
    if(prevState.page !== page || prevState.query !== query) {
      try {
        
        this.setState({isLoading: true});
        
          const images = await API.fetchImages(query, this.state.page)

            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
              isLoading: false,
            }))
          
        } catch (error) {
          this.setState({isLoading: false, error: true})
      }
  }
  }
   hendleSubmitForm = async (query) => {
    
    this.setState({ page: 1, query: query, images: []})
    const {query, page} = this.state;
  try{
        this.setState({isLoading: true});

        const images = await API.fetchImages(query, page);

        this.setState({
          images: [...images.hits],
          isLoading: false,
        })
      } catch (error) {
        this.setState({error: true, isLoading: false});
      }
    }

  loadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  };

  

 
  
 


  render () {
    const submitForm = this.hendleSubmitForm;
    const {isLoading, images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={submitForm}/>
        <ImageGallery  images={images}/>
        <Button onClick={this.loadMore} />
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