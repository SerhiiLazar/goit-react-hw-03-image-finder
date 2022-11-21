import {Component} from "react";
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        query: '',
    }
    hendleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      if(this.state.query === '') {
        toast("You have not entered anything, please enter!");
          return
        }
      this.setState({ query: '' })
    }

    hendleChange = event => {
        
        this.setState({ query: event.currentTarget.value.trim() });
        
    };

  
  render() {
    const hendleChange = this.hendleChange;
    const searchValue = this.state.query;
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
            value={searchValue}
            onChange={hendleChange}
          />
        </form>
      </header>
    );
  }
}

