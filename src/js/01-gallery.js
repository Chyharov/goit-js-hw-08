// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
  </a>`
  )
  .join("");

galleryListEl.insertAdjacentHTML("afterbegin", galleryEl);

 new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: "250",
    enableKeyboard: "true",
  });