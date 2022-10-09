import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector(".gallery");

const makeGalleryImages = (images) =>
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
const elements = makeGalleryImages(galleryItems);
listGalleryRef.insertAdjacentHTML("afterbegin", elements);
listGalleryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  event.target.src = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="assets/images/image.png">
`);
  instance.show();

  const elem = instance.element();
  const imgElemRef = elem.querySelector(" img");
  imgElemRef.src = event.target.src;

  const visible = instance.visible();
  if (visible) {
    window.addEventListener("keydown", onEscape);

    function onEscape(event) {
      if (event.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", onEscape);
      }
    }
  }
}
