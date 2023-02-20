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
  //On crait lélément image
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
  btn.addEventListener("click",function (event) {
//console.log("click!"));........

  })}

  function storage(){
 //Récupération de lélement du Dom pour les couleurs
 const color = document.querySelector("#colors").value;
 //Récupération de l'élement du Dom pour les quantitées
const quantity = document.querySelector("#quantity").value;

//.....le localStorage.......................
const dataElement = {
  id: id,
  color: color,
  quantity: Number(quantity),
  price: price,
}
      //Récupération des informations stockés dans le localstorage
      let productItems = JSON.parse(localStorage.getItem("dataElement"));
      
     //Condition lors de la selection de la quantitée et de la couleur
     if ((quantity < 1 || quantity > 100)  || (color == "")) {
      //pop up
      alert("veuillez selectionner la couleur et la quantité");
    }
    else
    //Vérifier si le panier est vide
    if (productItems){
      let index = productItems.findIndex(productInItems => productInItems.id+"-"+productInItems.color === dataElement.id+"-"+ dataElement.color);
        let filter = productItems.filter(productInItems => productInItems.id == dataElement.id && productInItems.color == dataElement.color);
        if (index >= 0){ 
                  
           // si il a trouvé un élément ayant le même id et la même couleur
          let findQuantity = parseInt(filter[0].quantity);
          let updatedQuantity = parseInt(findQuantity) + parseInt(quantity);            
          selection.quantity =  updatedQuantity.toString(),                
         
          // Met à jour la quantité sur la ligne trouvée
          productItems[index] = dataElement;  
          productItems.sort(productItems("id")); 
          // trie le panier
          localStorage.setItem("productItems", JSON.stringify( productItems)); 
          // sauvegarde le panier modifié
          itemAdded();
      }
      else{
          //Si  il n'a pas trouvé de produit ayant le même id et même couleur alors il l'ajoute
          // (code simple pour ajouter quelque chose au panier)
          productItems.push(dataElement);
          productItems.sort(productItems("id")); 
          // trie le panier
          localStorage.setItem("productItems", JSON.stringify(productItems));   
          // sauvegarde le panier
          itemAdded();
      } 
  }
  else{
      // si le panier est vide
      let productItems = []; 
       // on le crée        
      productItems.push(dataElement); 
      // on lui ajoute le produit
      localStorage.setItem("productItems", JSON.stringify( productItems)); 
      // sauvegarde le panier
      itemAdded();
      }
    };

