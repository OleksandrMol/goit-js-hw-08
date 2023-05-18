// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const ulGallery = document.querySelector(".gallery");


const createImgPlate = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li>`
}).join('');
console.dir(ulGallery)

ulGallery.insertAdjacentHTML("afterbegin", createImgPlate)

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });

console.log(galleryItems);
