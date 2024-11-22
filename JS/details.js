const params = new URLSearchParams(window.location.search)
const productId = params.get("appId")
const URL = "https://striveschool-api.herokuapp.com/api/product/" + productId

const loadProductDetails = function () {
    fetch(URL,{
        headers:{
            Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzE2NjMwMTYsImV4cCI6MTczMjg3MjYxNn0.VVE_bglUNJS2naNrpNQ9P1yOgs4TrjYoFQylcmEPqDo"
        },
        
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci dispiace, non siamo riusciti a trovare i dati");
        }
      })
      .then((product) =>{
        console.log(product)

        const createDetails = document.getElementById("createDetails")  // richiamo il div dove si crea la pagina dettaglio


        const detailsName = document.createElement("h5")
        detailsName.innerText = product.name

        const detailsImgUrl= document.createElement("img")
        detailsImgUrl.src = product.imageUrl 

        const detailsDescription = document.createElement("p")
        detailsDescription.innerText = product.description

        const detailsBrand = document.createElement("h6")
        detailsBrand.innerText = product.brand

        const detailsPrice = document.createElement("p")
        detailsPrice.innerText = product.price

        createDetails.append(detailsName, detailsImgUrl, detailsDescription, detailsBrand, detailsPrice )


      })
      .catch((error) => {
        console.log(error);
      });
    }
    window.addEventListener("DOMContentLoaded", function () {
      loadProductDetails();
    });