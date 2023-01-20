let url = "https://striveschool-api.herokuapp.com/api/product/";

// {
//     "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//     "name": "app test 1",  //REQUIRED
//     "description": "somthing longer", //REQUIRED
//     "brand": "nokia", //REQUIRED
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//     "price": 100, //REQUIRED
//     "userId": "admin", //SERVER GENERATED
//     "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "__v": 0 //SERVER GENERATED
//   }

// POST https://striveschool-api.herokuapp.com/api/account/login
// { "username": "testusername@yourmail.com", "password":"pass" }

// headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQxMzAzMTgsImV4cCI6MTY3NTMzOTkxOH0.1_JjuJb3Znp9ckH7W5Il1XkfupTfpHQ5SjIjVKUWrsk"
//     }

window.onload = () => {
  getProducts();
};

const getProducts = async () => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQxMzAzMTgsImV4cCI6MTY3NTMzOTkxOH0.1_JjuJb3Znp9ckH7W5Il1XkfupTfpHQ5SjIjVKUWrsk",
      }),
    });
    const data = await res.json();
    renderCards(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const renderCards = async (cards) => {
  const row = document.getElementById("row");
  await cards.forEach((oneCard) => {
    const { name, brand, description, price, imageUrl, _id } = oneCard;
    row.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${brand}</li>
      <li class="list-group-item">${price}</li>
    </ul>
    <div class="card-body">
      <a href='./back.html?id=${_id}' class="card-link"><button>EDIT</button></a>
      <a href="#" class="card-link"><button class='btn btn-danger m-1' onclick='deleteEvent("${_id}")'>remove</button></a>

    </div>
  </div>`;
  });
};

const deleteEvent = async (idToDelete) => {
  console.log(idToDelete);
  try {
    let res = await fetch(url + idToDelete, {
      method: "DELETE",
      headers: new Headers({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQxMzAzMTgsImV4cCI6MTY3NTMzOTkxOH0.1_JjuJb3Znp9ckH7W5Il1XkfupTfpHQ5SjIjVKUWrsk",
      }),
    });
    if (res.ok) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};
