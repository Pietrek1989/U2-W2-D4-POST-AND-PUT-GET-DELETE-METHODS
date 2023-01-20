let url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);
window.onload = async () => {
  await edit();
};
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

/* <div class="form-group">
<label for="exampleFormControlInput1">Name</label>
<input type="email" class="form-control" id="Name">
</div>
<div class="form-group">
  <label for="exampleFormControlInput1">Brand</label>
  <input type="email" class="form-control" id="Brand">
</div>
<div class="form-group">
  <div class="form-group">
      <label for="exampleFormControlInput1">Description</label>
      <input type="email" class="form-control" id="Description">
    </div>
</div>
<div class="form-group">
  <label for="exampleFormControlInput1">Price</label>
  <input type="email" class="form-control" id="Price">
</div>
<div class="form-group">
  <label for="exampleFormControlFile1">Image</label>
  <input type="file" class="form-control-file" id="exampleFormCImageontrolFile1">
</div>
<button type="submit" class="btn btn-primary" onclick="sendData(event)">Submit</button>
</form> */

const sendData = async (SubmitEvent) => {
  try {
    SubmitEvent.preventDefault();
    const editedEvent = {
      name: document.querySelector("#Name").value,
      brand: document.querySelector("#Brand").value,
      description: document.querySelector("#Description").value,
      imageUrl: document.querySelector("#Image").value,
      price: document.querySelector("#Price").value,
    };
    console.log(editedEvent);
    const options = {
      method: "POST",
      body: JSON.stringify(editedEvent),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQxMzAzMTgsImV4cCI6MTY3NTMzOTkxOH0.1_JjuJb3Znp9ckH7W5Il1XkfupTfpHQ5SjIjVKUWrsk",
        "Content-Type": "application/json",
      },
    };

    await fetch(url, options);
  } catch (error) {
    // let container = document.getElementById("error-container")
    console.log(error);
  }
};

const edit = async () => {
  try {
    const res = await fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQxMzAzMTgsImV4cCI6MTY3NTMzOTkxOH0.1_JjuJb3Znp9ckH7W5Il1XkfupTfpHQ5SjIjVKUWrsk",
        "Content-Type": "application/json",
      },
    });
    let { name, brand, description, imageURL, price } = await res.json();
    document.querySelector("#Name").value = name;
    document.querySelector("#Brand").value = brand;
    document.querySelector("#Description").value = description;
    document.querySelector("#Image").value = imageURL;
    document.querySelector("#Price").value = price;
    console.log(name);
  } catch (error) {
    console.log(error);
  }
};
