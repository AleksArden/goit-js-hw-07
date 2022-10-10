import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector(".gallery");

const makeGalleryMarkup = (images) =>
  images
    .map(
      ({
        preview,
        original,
        description,
      }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`
    )
    .join("");
const elements = makeGalleryMarkup(galleryItems);
listGalleryRef.insertAdjacentHTML("afterbegin", elements);
listGalleryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);
  instance.show();

  const visible = instance.visible();
  if (visible) {
    window.addEventListener("keydown", onEscape);

    function onEscape(event) {
      const isEscape = event.code === "Escape";
      if (isEscape) {
        instance.close();
        window.removeEventListener("keydown", onEscape);
      }
    }
  }
}
