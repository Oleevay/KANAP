const cart = [];

function retrieveProductCache() {
const numberProduct = localStorage.length;
for (let i = 0; i < numberProduct; i++) {
const addSofa = localStorage.getItem(localStorage.key(i));
const objet = JSON.parse(addSofa);
 cart.push(objet);
  }
}

function displayaddSofa (addSofa){
let article = articleElement(addSofa)
displayArticle(article)
let imageDiv = imageElementDiv(addSofa)
article.appendChild(imageDiv)

let cartItemContent = cartContentElement(addSofa)
articleElement.appendChild(cartItemContent)
}

function cartContentElement(addSofa){
descriptionElement ()  
settingsElemen()
 let divElement = document.createElement("div") 
 divElement.classList.add("cart__item__content")

 let descriptionElement = document.createElement("div")
 descriptionElement.classList.add("cart__item__content__description")

 let h2 = document.createElement("h2")
 h2.textContent = addSofa.name 

 let pElement = document.createElement("p");
pElement.innerText = addSofa.color;

let pElement2 = document.createElement("p");
pElement2.innerText = addSofa.price + "€ ";

descriptionElement.appendChild(h2)
descriptionElement.appendChild(p)
descriptionElement.appendChild(p2)
div.appendChild(description)
return div
}

function displayArticle(article)
document.querySelector("#cart__items").appendChild(article)

function articleElement(addSofa){
let articleElement = document.createElement("article");
articleElement.classList.add("#cart__items")
articleElement.dataset.id = addSofa.id
articleElement.dataset.color = addSofa.color
return article
}

function imageElementDiv(addSofa) {
let div = document.createElement("div")
div.classList.add("cart__item__img")
let imageElement = document.createElement("img");
imageElement.src = addSofa.imageUrl;
imageElement.alt = addSofa.altTxt;
//on ajoute
div.appendChild(imageElement);
return div

}

