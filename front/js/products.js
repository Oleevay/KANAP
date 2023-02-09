const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let id = params.get("id");

// On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
fetch(`http://localhost:3000/api/products/${id}`)
  // Quand tu as la réponse donne le résultat en json.
  .then((reponse) =>
    reponse
      .json()
      // Ce que tu as reçu et qui a été traité en json sera appelé data
      .then((data) => {
        //Sort moi les informations en console sur ce qui ta été demandé
        handleAllProducts(data);
      })
  );

function handleAllProducts(resultatApi) {
  let addSofa = resultatApi;
  image(addSofa);
  title(addSofa);
  price(addSofa);
  description(addSofa);
 color(addSofa);

}

function image(addSofa) {
  let parentElement = document.querySelector(".item__img");
  let imageElement = document.createElement("img");
  imageElement.src = addSofa.imageUrl;
  imageElement.alt = addSofa.altTxt;
parentElement.appendChild(imageElement);
}

function title(addSofa) {
  let nameElement = document.querySelector("#title");
  nameElement.innerText = addSofa.name;
}

function price(addSofa) {
  let spanElement = document.querySelector("#price");
  spanElement.innerText = addSofa.price;
}

function description(addSofa) {
  let pElement = document.querySelector("#description");
  pElement.innerText = addSofa.description;
}

function color(addSofa) {
  let colorSelect = document.getElementById("colors");
  for (let i = 0; i <addSofa.colors.length;i++) {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = addSofa.colors[i];
    colorSelect.appendChild(option);
  }
}

function addToCart() {
  const btn = document.querySelector("#addToCart");
  btn.addEventListener("click", (event) => console.log("click!"));
}
