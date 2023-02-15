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
//on crait la function image
function image(addSofa) {
  //on selectionne l'id de item__img
  let parentElement = document.querySelector(".item__img");
  //On crait lélément image
  let imageElement = document.createElement("img");
  imageElement.src = addSofa.imageUrl;
  imageElement.alt = addSofa.altTxt;
  //on ajoute
  parentElement.appendChild(imageElement);
}

//je crée la fonction title et
function title(addSofa) {
  let nameElement = document.querySelector("#title");
  nameElement.innerText = addSofa.name;
}

//je crée la function pour afficher le prix
function price(addSofa) {
  let spanElement = document.querySelector("#price");
  spanElement.innerText = addSofa.price;
}

//je crée la function
function description(addSofa) {
  let pElement = document.querySelector("#description");
  pElement.innerText = addSofa.description;
}

//je crée la function
function color(addSofa) {
  let colorSelect = document.getElementById("colors");
  for (let i = 0; i < addSofa.colors.length; i++) {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = addSofa.colors[i];
    colorSelect.appendChild(option);
  }
}

//création de la fonction addToCart
function addToCart() {
  //Gestion des bouttons
  const btn = document.querySelector("#addToCart");
  //Evénement sur le btn lors du click
  btn.addEventListener("click", (event) => {
    //console.log("click!"));........

    //Récuperation de lélement du Dom pour les couleurs
    const color = document.querySelector("#colors").value;
    //Récuperation de lélement du Dom pour les quantitées
    const quantity = document.querySelector("#quantity").value;
    //Condition lors de la selection de la quantitée et de la couleur
    if (quantity < 1 || (quantity > 100 && color == null)) {
      //pop up
      alert("veuillez selectionner la couleur et la quantité");
    }

    //.....le localStorage.......................
   // const dataElement = {
     // id: id,
     // color: color,
     // quantity: Number(quantity),
     // price: price,
   // };

    //Récupération des informations stockés dans le localstorage
    let productItems = window.localStorage.setItem("dataElement");

    //Transformation des informations en JSON
    const productCart = JSON.stringify(productItems);

    //Stokage des informations dans le localstorage
    window.localStorage.setItem("dataElement",productCart);

    //Vérification des informations dans le localstorage
    if (dataElemlent === null) {
      //console.log(dataElemlent)
    } else {
      dataElemlent = JSON.parse(dataElemlent);
    }
  });
}
