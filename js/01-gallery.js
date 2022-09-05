import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fatherDiv = document.querySelector('.gallery')


///////////  Функція додає елементи в дом 
function createImagesGalary() {

  const htmlMarcImgs = galleryItems.reduce((longString,objImg) => {
  const { preview, original, description } = objImg;
  const protoString = 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  return longString += protoString;

},'')

  fatherDiv.insertAdjacentHTML("beforeend", htmlMarcImgs);

}
createImagesGalary()   /// виклик функції

///////////////////


function clickEvent(event) {
  event.preventDefault()

  if (event.target.localName !== 'img') {
    return
  }
  const instance = basicLightbox.create(`
   <img src=${event.target.dataset.source}>
`)

  instance.show()

/////////// Видалення  по escape
function closeByEscpt (event){
 
  if (event.code === 'Escape') {
    instance.close()
 
  }
  document.removeEventListener("keydown", closeByEscpt)
   console.log('removeEventListener = true')
}
  document.addEventListener("keydown", closeByEscpt);
  
}


fatherDiv.addEventListener('click', clickEvent)



///////////////////////// Додаткове завдання
