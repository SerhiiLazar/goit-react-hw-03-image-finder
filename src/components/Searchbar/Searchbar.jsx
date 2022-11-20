import {Component} from "react";
// import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: '',
    }
    hendleSubmit = event => {
      event.preventDefault();
      
      this.props.onSubmit(this.state);
    
    }

    hendleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value.trim() });
        
    };

    reset = () => {
        this.setState({ query: '' })
        
    }
  render() {
    const hendleChange = this.hendleChange;
    // const searchValue = this.state.query;
    const hendleSubmit = this.hendleSubmit;
    
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={hendleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            {/* <span className={css.SearchFormButtonLabel}></span> */}
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // value={searchValue}
            onChange={hendleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;