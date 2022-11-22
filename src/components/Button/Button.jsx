import css from './Button.module.css';

function Button({loadMoreFetch}) {
    return (
        <button className={css.Button} type="submit" onClick={loadMoreFetch}>
            Load More
        </button>
    )
}

export default Button;