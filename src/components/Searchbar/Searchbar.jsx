import {Component} from "react";
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        query: '',
    }
    
    hendleSubmit = event => {
      event.preventDefault();
      const {onSubmit} = this.props;
      const {query} = this.state;

      if(query.trim() === '') {
        toast("You have not entered anything, please enter!");
          return
        }
        this.setState({ query: '' })  
      onSubmit(query);
      
    }

    hendleChange = event => {
        
        this.setState({ query: event.currentTarget.value });
        
    };

  
  render() {
    const {query} = this.state;
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
            value={query}
            onChange={hendleChange}
          />
        </form>
      </header>
    );
  }
}

