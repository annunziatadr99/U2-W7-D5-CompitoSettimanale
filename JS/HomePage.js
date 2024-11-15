const getProduct = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzE2NjMwMTYsImV4cCI6MTczMjg3MjYxNn0.VVE_bglUNJS2naNrpNQ9P1yOgs4TrjYoFQylcmEPqDo"
        }
    })
    .then(response =>{
        console.log(response);
        if(response.ok) {
            return response.json();
        }
    } )
}


// STEFANO MI DISPIACE DI AVER CONSEGNATO UN COMPITO DEL GENERE, LEGGENDOLO PUO NON ARRIVARTI L'IMPEGNO CHE CI HO MESSO,VISTO LE CONDIZIONI PESSIME, MA OGGI NON SONO STATO IN GRADO DI APPLICARE CIO CHE HO APPRESO IN SETTIMANA. SONO CONSAPEVOLE DELLA CONSEGUENZA DI QUESTO VOTO E MI AIUTERà A SPRONARMI E A SBLOCCARMI DA CERTE SITUAZIONI.   