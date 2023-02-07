const article = window.location.search;
let params = new URLSearchParams(article);
let id = params.get("id");

// On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
fetch(`http://localhost:3000/products/${id}`)
  // Quand tu as la réponse donne le résultat en json.
  .then(
    (reponse) =>reponse.json()
        // Ce que tu as reçu et qui a été traité en json sera appelé data
        .then((data) => {
          handleProducts(data);
        })
    //Sort moi les informations en console sur ce qui ta été demandé
  );

function handleProducts(resultatApi) {
  let addSofa = resultatApi;
  let parentElement = document.querySelector("#.items_img");
  parentElement.appendChild(imageElement)
  let imageElement = document.querySelector("img");
  imageElement.src = addSofa.imageUrl;
  imageElement.alt = addSofa.altTxt;

  let nameElement = document.querySelector("#title");
  nameElement.innerText = addSofa.name;

  let pElement = document.querySelector("#description");
  pElement.innerText = addSofa.description;

  let spanElement = document.querySelector("#price");
  spanElement.innerText = addSofa.price;
  //let priceElement = document.querySelector("#price");

  let colorSelect = document.getElementById("#colors");
  for (let i = 0; i < addSofa.color.length; i++) {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = addSofa.color;
    colorSelect.appendChild(option);
  }
}
