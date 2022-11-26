import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({webformatURL, largeImageURL, tags, onClick}) => {
       return (
        <li className={css.ImageGalleryItem}>
                <img 
                    className={css.ImageGalleryItemImage}
                    src={webformatURL} 
                    alt={tags}
                    data-larg={largeImageURL}
                    onClick={onClick} 
                />
        </li>
       ) 
}

