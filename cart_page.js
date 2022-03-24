let total = 0;

let cart_arr = JSON.parse(localStorage.getItem("cart_data"));
document.getElementById("cart_quantity").innerText = cart_arr.length;
console.log("cart_arr", cart_arr);
function appendToCart(cart_arr) {
  document.getElementById("cartcontainer").innerHTML = "";
  cart_arr.forEach(function (el, ind) {
    let cartdiv = document.createElement("div");
    cartdiv.setAttribute("class", "cartDiv");

    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    imgdiv.append(img);

    let h4 = document.createElement("h4");
    h4.setAttribute("id", "h4");
    h4.textContent = el.name;

    let smalldiv = document.createElement("div");
    smalldiv.setAttribute("id", "smalldiv");

    let price = document.createElement("p");
    price.textContent = el.price;
    price.setAttribute("id", "p1");

    let button = document.createElement("button");
    button.setAttribute("id", "button");
    button.textContent = "Remove";
    button.addEventListener("click", function () {
      removeFun(ind);
    });

    smalldiv.append(price, button);

    cartdiv.append(imgdiv, h4, smalldiv);
    document.getElementById("cartcontainer").append(cartdiv);
    total += +el.price;
  });
  document.getElementById("total_p").innerText = `Total Cart Price=${total}`;
  total = 0;
}
appendToCart(cart_arr);
function removeFun(i) {
  cart_arr.splice(i, 1);
  localStorage.setItem("cart_data", JSON.stringify(cart_arr));
  document.getElementById("cart_quantity").innerText = cart_arr.length;
  appendToCart(cart_arr);
}
