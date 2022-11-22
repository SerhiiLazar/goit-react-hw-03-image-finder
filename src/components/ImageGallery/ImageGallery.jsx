import {ImageGalleryItem}  from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
export const ImageGallery = ({images}) => {
    return (
        <ul className={css.ImageGallery}>
            {images && images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    tags={image.tags}
                    webformatURL={image.webformatURL}
                    largeImageURL={image.largeImageURL}
                />
                ))
            }
        </ul>
    )
}