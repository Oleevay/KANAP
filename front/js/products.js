//
const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let id = params.get("id");

// On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
fetch(`http://localhost:3000/api/products/${id}`)
  // Quand il aura la réponse donne le résultat en json.
  .then((reponse) =>
    reponse
      .json()
      // Ce que qu'il a reçu et qui a été traité en json sera appelé data
      .then((data) => {
        // On sort les informations en console sur ce qui ta été demandé
        handleAllProducts(data);
      })
  );

// On rattache les data reçues par l'api au bon endroit
function handleAllProducts(resultatApi) {
  let addSofa = resultatApi;
  image(addSofa);
  title(addSofa);
  price(addSofa);
  description(addSofa);
  color(addSofa);
  addToCart();
}
//On crait la function image
function image(addSofa) {
  //On selectionne l'id de item__img
  let parentElement = document.querySelector(".item__img");
  //On crée l'élément image
  let imageElement = document.createElement("img");
  imageElement.src = addSofa.imageUrl;
  imageElement.alt = addSofa.altTxt;
  //on ajoute
  parentElement.appendChild(imageElement);
}

//Création de la fonction  title
function title(addSofa) {
  let nameElement = document.querySelector("#title");
  nameElement.innerText = addSofa.name;
}

//Création de  la function pour afficher le prix
function price(addSofa) {
  let spanElement = document.querySelector("#price");
  spanElement.innerText = addSofa.price;
}

//Création de la fonction
function description(addSofa) {
  let pElement = document.querySelector("#description");
  pElement.innerText = addSofa.description;
}

//Création de la fonction
function color(addSofa) {
  let colorSelect = document.getElementById("colors");
  for (let i = 0; i < addSofa.colors.length; i++) {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = addSofa.colors[i];
    colorSelect.appendChild(option);
  }
}
//Création de la fonction addToCart
function addToCart() {
  //Gestion des bouttons
  const btn = document.querySelector("#addToCart");
  //Evénement sur le btn lors du click
  btn.addEventListener("click", (e) => {
    //console.log("click!"));........
    //Récupération de l'élément du Dom pour les couleurs
    const color = document.querySelector("#colors").value;
    //Récupération de l'élément du Dom pour les quantitées
    const quantity = document.querySelector("#quantity").value;
    //Si le liste est invalide, on ne retourne rien
    if (checkCartInvalid(color, quantity)) return;
    // Si la  liste est correcte on sauvegarde la couleur et la quantité
    saveCheckCart(color, quantity);
  });
}

//.....le localStorage.......................
function saveCheckCart(color, quantity) {
  const dataElement = {
    id: id,
    color: color,
    quantity: Number(quantity),
    price: price,
  };
  //Si le localStorage existe, on récupère son contenu
  let cart = JSON.parse(localStorage.getItem("cart"));
  function checkCartInvalid(color, quantity) {
    //Condition lors de la sélection de la quantitée et de la couleur
    if (quantity < 1 || quantity > 100 || color == "") {
      //pop up
      alert("veuillez sélectionner la couleur et la quantité");
      return true;
    }
  }

  // Si le localStorage est vide, on le crée avec le produit ajouté
  cart.push(dataElement);
  // On trie  le panier
  cart.sort(cartSort("id"));
  // Sauvegardont  le panier
  localStorage.setItem("cart", JSON.stringify(dataElement));
}
