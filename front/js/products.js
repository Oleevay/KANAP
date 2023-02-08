const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

// On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
 const allProduct = fetch(`http://localhost:3000/api/products/${id}`)
  // Quand tu as la réponse donne le résultat en json.
  .then((reponse) => reponse.json()
        // Ce que tu as reçu et qui a été traité en json sera appelé data
        .then((data) => { 
    //Sort moi les informations en console sur ce qui ta été demandé
    handleAllProducts(data)}));

function handleAllProducts(resultatApi){
  let addSofa = resultatApi;

  function image (imageUrl, altTxt){
    let parentElement = document.querySelector("#items_img");
    parentElement.appendChild(imageElement)
    let imageElement = document.querySelector("img");
    imageElement.src = addSofa.imageUrl;
    imageElement.alt = addSofa.altTxt;
  }

function title (name){
  let nameElement = document.querySelector("#title");
  nameElement.innerText = addSofa.name;
}
 
function description (p){
  let pElement = document.querySelector("#description");
  pElement.innerText = addSofa.description;
}

  function price (span){
  let spanElement = document.querySelector("#price");
  spanElement.innerText = addSofa.price;
  //let priceElement = document.querySelector("#price");
  }

  function color (colors){
  let colorSelect = document.getElementById("#colors");
  for (let i = 0; i < handleProducts.color; i++) {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = addSofa.color;
    colorSelect.appendChild(option);
  }
}
}

function addToCart(){
  const btn = document.querySelector("#addToCart");
 btn.addEventListener("click" , (event)  =>
console.log("click!"))};
 




