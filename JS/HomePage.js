const getProducts = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzE2NjMwMTYsImV4cCI6MTczMjg3MjYxNn0.VVE_bglUNJS2naNrpNQ9P1yOgs4TrjYoFQylcmEPqDo",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ci dispiace, non siamo riusciti a reperire i dati");
      }
    })
    
    .then((products) => {
      console.log(products);
      
      const cardList = document.getElementById("card") // ROW
     

            products.forEach(product => {
                const createCard = document.createElement("div") // div card
                createCard.className="card"


                const imgUrl= document.createElement("img")     // img
                imgUrl.className="card-img-top"
               imgUrl.src=product.imageUrl
                
                
              const cardName = document.createElement("h5") // h5
                cardName.className="card-title"
             cardName.innerText = product.name
                
                const cardDescription = document.createElement("p")
                cardDescription.className="card-text"
            cardDescription.innerText = product.description

                const cardBrand = document.createElement("h6")
                cardBrand.className="card-text"
            cardBrand.innerText = product.brand

                const cardPrice = document.createElement("p")
                cardPrice.className="card-text"
            cardPrice.innerText = product.price

                const link1 = document.createElement("a")
                link1.innerText = "DETTAGLI"
                link1.href ="./Details.html?appId=" + product._id
                link1.className=("btn btn-success")

                const link2 = document.createElement("a")
                link2.innerText = "MODIFICA"
                link2.href ="./Backoffice.html?appId=" + product._id
                link2.className="btn btn-danger"


                

               
                cardList.appendChild(createCard)
                createCard.append(cardName, imgUrl, cardDescription, cardBrand, cardPrice, link1, link2)
                




            });
    })
    .catch((error) => {
      console.log(error);
    });
};
window.addEventListener("DOMContentLoaded", function () {
  getProducts();
});
