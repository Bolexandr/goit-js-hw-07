import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fatherDiv = document.querySelector('.gallery')

///////////  Функція додає елементи в дом 
function createImagesGalary() {

  const htmlMarcImgs = galleryItems.reduce((longString,objImg) => {
  const { preview, original, description } = objImg;
    const protoString = 
`<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  return longString += protoString;

  }, '')
  
  fatherDiv.insertAdjacentHTML("beforeend", htmlMarcImgs);

  const bigPhoto = new SimpleLightbox('.gallery__item', {

    captionsData : 'alt',
    captionDelay : 250,
    

  })
  console.dir(bigPhoto)
}
createImagesGalary()   /// виклик функції

console.dir(SimpleLightbox)
