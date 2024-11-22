const params = new URLSearchParams(window.location.search);
const id = params.get("appId");
const URL = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/"; // ? e : sono come un if else questo metodo viene chiamto TERNARY OPERETOR
const method = id ? "PUT" : "POST";

const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
    name: e.target.name.value,
    description: e.target.description.value,
    brand: e.target.brand.value,
    imageUrl: e.target.imageUrl.value,
    price: e.target.price.value,
  };
  fetch(URL, {
    method: method, // richiamiamo il method della costante creata sopra
    body: JSON.stringify(newProduct), // stiamo traducendo in modo inverso cioe stiamo inviando un dato al servere che non legge il linguaggio JSON  e quindi lo taduciamo in stringify
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzE2NjMwMTYsImV4cCI6MTczMjg3MjYxNn0.VVE_bglUNJS2naNrpNQ9P1yOgs4TrjYoFQylcmEPqDo",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((newProduct) => {
      if (id) {
        alert("risorsa modificata con id: " + newProduct._id);
      } else {
        e.target.reset();
        alert("abbiamo creato una nuova risorsa con id: " + newProduct._id);
      }
    })
    .catch((errore) => console.log(errore));
};

const handleDelete = () => {
  const confirmed = confirm("sei sicuro di voler eliminare la risorsa?");
  if (confirmed) {
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzE2NjMwMTYsImV4cCI6MTczMjg3MjYxNn0.VVE_bglUNJS2naNrpNQ9P1yOgs4TrjYoFQylcmEPqDo",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((deletedObj) => {
        alert(
          "la risorsa id " + deletedObj._id + " è stata eliminata CORRETTAMENTE"
        );
        window.location.assign("/");
      })
      .catch((err) => console.log(err));
  }
};
const handleReset = () => {
  const hasConfirmed = alert("I campi sono stati Resettati");
  const form = document.getElementById("form");
  if (hasConfirmed) {
    form.reset();
  }
};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.onsubmit = handleSubmit;

  const submitBtn = document.getElementById("submitBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const subtitle = document.getElementById("subtitle");
  const resetBtn = document.getElementById("reset");

  if (id) {
    subtitle.innerText = "-Modifica Prodotto";
    submitBtn.innerText = "Modifica";
    submitBtn.classList.add("btn-primary");
    deleteBtn.classList.remove("d-none");
    deleteBtn.onclick = handleDelete;
    resetBtn.classList.remove("d-none");
    resetBtn.onclick = handleReset;

    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTRhODhhZDEyOTAwMTU4NzZiZGMiLCJpYXQiOjE3MzE2NjMwMTYsImV4cCI6MTczMjg3MjYxNn0.VVE_bglUNJS2naNrpNQ9P1yOgs4TrjYoFQylcmEPqDo",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Risorsa non trovata");
        }
      })
      .then((product) => {
        const { name, description, brand, imageUrl, price } = product;
        console.log(product);

        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imageUrl").value = imageUrl;
        document.getElementById("price").value = price;
      });
  } else {
    subtitle.innerText = "— Crea risorsa";
  }
});
