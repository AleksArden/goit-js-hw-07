import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGalleryRef = document.querySelector(".gallery");

function createElement(preview, original, description) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    li.classList.add("gallery__item");
    a.classList.add("gallery__item");
    a.href = `${original}`;
    img.classList.add("gallery__image");
    img.src = `${preview}`;
    img.alt = `${description}`;
    a.append(img);
    li.append(a);
    return li;
}

const galleryMarkupRef = galleryItems.map(
    ({ preview, original, description }) => {
        return createElement(preview, original, description);
    }
);
listGalleryRef.append(...galleryMarkupRef);

listGalleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
}

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

