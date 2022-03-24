// let cart_products = JSON.parse(localStorage.getItem("cart_data")) || [];
// document.getElementById("cart_quantity").innerText = cart_products.length;

fetch_product_list_1();
async function fetch_product_list_1() {
  let url = `http://localhost:4500/product`;
  try {
    let responce = await fetch(url);
    let data = await responce.json();

    appendFucn(data);
  } catch (err) {
    console.log(err);
  }
}
function appendFucn(productArr) {
  let div_product = document.getElementById("product");
     //   console.log(productArr);
  productArr.forEach(function (products) {
    let div = document.createElement("div");
    let price = document.createElement("div");

    let name = document.createElement("h4");
    name.innerText = products.name;

    let price1 = document.createElement("b");
    price.innerText = "₹" + products.price;

    let button = document.createElement("button");
    button.innerHTML = "🛒 ADD";

    let discount = document.createElement("h5");
    discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;

    let premiumprice1 = document.createElement("h6");
    premiumprice1.innerText = products.premiumprice + " 🔒";

    let rating = document.createElement("img");
    rating.innerHTML = "★ " + products.rating;

    price.append(price1, button);
    div.append(image, discount, name, rating, price, premiumprice1);
    div_product.append(div);
  });
}

let select_opt = document.getElementById("select");

select_opt.addEventListener("change", sortFunc);
function sortFunc() {
  if (select_opt.value == "1") {
    let lthArr = productData.sort((a, b) => a.rate - b.rate);
    appendFucn(lthArr);
    console.log(lthArr);
  } else if (select_opt.value == "2") {
    let htlArr = productData.sort((a, b) => b.rate - a.rate);
    appendFucn(htlArr);
    console.log(htlArr);
  }
}

// document.getElementById("gotocart").addEventListener("click", function () {
//   window.location.href = "cart.html";
// });
