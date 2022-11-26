import {Component} from "react";
import { ToastContainer, toast } from 'react-toastify';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        query: '',
    }
    
    hendleSubmit = event => {
      event.preventDefault();
    
      
      const {onSubmit} = this.props;
      

      if(this.state.query.trim() === '') {
        toast("You have not entered anything, please enter!");
          return
        }
      
      onSubmit(this.state);
      event.target.reset();  
    }

    hendleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
       
    };

  
  render() {
    // const {query} = this.state.query;
    const hendleChange = this.hendleChange;
    const hendleSubmit = this.hendleSubmit;
    
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={hendleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}></span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // value={query}
            onChange={hendleChange}
          />
        </form>
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
      </header>
    );
  }
}

