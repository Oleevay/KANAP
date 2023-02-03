// Récupération des produits de l'api
//.............................
fetch("http://localhost:3000/api/products")
  // Quand tu as la réponse donne le résultat en json.
  .then((reponse) =>
    reponse
      .json()
      // Ce que tu as reçu et qui a été traité en json sera appelé data
      .then((data) => {
        //Sort moi les informations en console sur ce qui ta été demandé
        addallSofa(data);
      })
  );
//.............................................................

//La fonction d'affichage des sofa de l'api
const addallSofa = function (resultatApi) {
  // la boucle for of pour pacourrir addSofa
  //let sofaArray = resultatApi;
  for (let addSofa of resultatApi) {
    let linkElement = document.createElement("a");
    linkElement.href = `product.html?id=${addSofa._id}`;

    let articleElement = document.createElement("article");

    let imageElement = document.createElement("img");
    imageElement.src = addSofa.imageUrl;
    imageElement.alt = addSofa.altTxt;

    let nameElement = document.createElement("h3");
    nameElement.innerText = addSofa.name;
    nameElement.classList.add("productname");

    let descriptionElement = document.createElement("p");
    descriptionElement.innerText = addSofa.description;
    descriptionElement.classList.add = "productDescription";

    //je ratache les balises au Dom
    let items = document.querySelector("#items");
    linkElement.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(nameElement);
    articleElement.appendChild(descriptionElement);
    items.appendChild(linkElement);
  }
};
