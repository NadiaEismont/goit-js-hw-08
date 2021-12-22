import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Add imports above this line


// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),

}

function createGallery() {
    return galleryItems.map(({ preview, original, description }) =>
    (`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)).join('');
}
refs.gallery.insertAdjacentHTML('afterbegin', createGallery())

let lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: "alt",
    captionDelay: 250
});

console.log(galleryItems);
