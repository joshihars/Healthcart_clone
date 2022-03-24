let count = 0;
let images = [];
let time = 2000;

images[0] = "https://img5.hkrtcdn.com/18116/bnr_1811544_o.jpg";
images[1] = "https://img5.hkrtcdn.com/18122/bnr_1812184_o.jpg";
images[2] = "https://img5.hkrtcdn.com/18123/bnr_1812294_o.jpg";
images[3] = "https://img9.hkrtcdn.com/18116/bnr_1811548_o.jpg";
images[4] = "https://img7.hkrtcdn.com/18116/bnr_1811556_o.jpg";
images[5] = "https://img1.hkrtcdn.com/18116/bnr_1811570_o.jpg";
images[6] = "https://img5.hkrtcdn.com/18116/bnr_1811574_o.jpg";
images[7] = "https://img9.hkrtcdn.com/18116/bnr_1811598_o.jpg";
images[8] = "https://img7.hkrtcdn.com/18117/bnr_1811606_o.jpg";
images[9] = "https://img1.hkrtcdn.com/18117/bnr_1811620_o.jpg";
images[10] = "https://img6.hkrtcdn.com/14609/bnr_1460845_o.png";
function slidingShows() {
  document.image.src = images[count];
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }
  setTimeout("slidingShows()", time);
}
window.onload = slidingShows;

// NavBar Sticky
window.onscroll = function () {
  myFunction();
};

var navlist = document.getElementById("nav");
var sticky = navlist.offsetTop;
/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlist.classList.add("sticky");;
  } else {
    navlist.classList.remove("sticky");
  }
}
//cart length
async function fetch_and_update_cart() {
  
  try {
    let url = `http://localhost:4500/cart`;
    let responce = await fetch(url);
    let data = await responce.json();
    console.log(data)
    document.getElementById("cart_quantity").innerText = data.length;
  } catch (err) {
    console.log(err);
  }
}
fetch_and_update_cart()

//fetch products 
fetch_product_list_1();
async function fetch_product_list_1() {
  let url = `http://localhost:4500/product/4`;
  try {
    let responce = await fetch(url);
    let data = await responce.json();
    // console.log(data)
    flashsaleProduct(data);//
    flashsaleProduct1(data);
    flashsaleProduct2(data);
  } catch (err) {
    console.log(err);
  }
}

async function flashsaleProduct(product_list_1_arr) {
  let div_product = document.getElementById("product");
  product_list_1_arr.forEach(function (products) {
    let div = document.createElement("div");
    let mainprice = document.createElement("div");

    let name = document.createElement("h4");
    name.innerText = products.name;

    let price = document.createElement("b");
    price.innerText = "₹" + products.price;

    let button = document.createElement("button");
    button.innerHTML = "🛒 ADD";
    button.addEventListener("click", async function () {
      //add the element in to the cart collection
      // async function addProduct() {
        
          let obj = {
            name:products.name ,
            price: products.price,
            avtar: products.avtar,
            premiumprice: products.premiumprice,
            discount:products.discount ,
            rating: products.rating,
          };
          let data = await postData("http://localhost:4500/cart", obj);
          console.log(data);

      //update the length of cart items
      // async function fetch_and_update_cart() {
      //   let url = `http://localhost:4500/cart`;
      //   try {
      //     let responce = await fetch(url);
      //     let data = await responce.json();
      //     console.log(data)
      //     document.getElementById("cart_quantity").innerText = data.length;
      //   } catch (err) {
      //     console.log(err);
      //   }
      // }
      // fetch_and_update_cart()
    });

    let discount = document.createElement("h5");
    discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;
    image.addEventListener("click", function () {
      window.location.href = "productpage.html";
    });

    let premiumprice = document.createElement("h6");
    premiumprice.innerText = products.premiumprice + "    🔒";

    let rating = document.createElement("p");
    rating.innerHTML = products.rating;

    mainprice.append(price, button);
    div.append(image, discount, name, rating, mainprice, premiumprice);
    div_product.append(div);
  });
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}







// button.addEventListener("click", function () {
//   cart_products.push(products);
//   localStorage.setItem("cart_data", JSON.stringify(cart_products));
//   document.getElementById("cart_quantity").innerText = cart_products.length;
// });

function flashsaleProduct1(protein1) {
  let div_product1 = document.getElementById("product1");

  protein1.forEach(function (products) {
    let div = document.createElement("div");
    let price1 = document.createElement("div");

    let name = document.createElement("h4");
    name.innerText = products.name;

    let price = document.createElement("b");
    price.innerText = "₹" + products.price;

    let button = document.createElement("button");
    button.innerHTML = "🛒 ADD";

    let discount = document.createElement("h5");
    discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;

    let premiumprice1 = document.createElement("h6");
    premiumprice1.innerText = products.premiumprice1 + " 🔒";

    let rating = document.createElement("img");
    rating.innerHTML = "★ " + products.rating;

    price1.append(price, button);
    div.append(image, discount, name, rating, price1, premiumprice1);
    div_product1.append(div);
  });
}


function flashsaleProduct2(protein2) {
  let div_product2 = document.getElementById("product2");

  protein2.forEach(function (products) {
    let div = document.createElement("div");
    let price2 = document.createElement("div");

    let m_name = document.createElement("h4");
    m_name.innerText = products.name;

    let m_price = document.createElement("b");
    m_price.innerText = "₹" + products.price;

    let m_button = document.createElement("button");
    m_button.innerHTML = "🛒 ADD";

    let m_discount = document.createElement("h5");
    m_discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.avtar;

    let m_premiumprice2 = document.createElement("h6");
    m_premiumprice2.innerText = products.premiumprice2 + " 🔒";

    let m_rating = document.createElement("img");
    m_rating.innerHTML = "★ " + products.rating;

    price2.append(m_price, m_button);
    div.append(image, m_discount, m_name, m_rating, price2, m_premiumprice2);
    div_product2.append(div);
  });
}








// const proteinProduct = [
//   {
//     image:
//       "https://img8.hkrtcdn.com/12133/prd_1213267-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Cafe-Mocha_o.jpg",
//     name: "MuscleBlaze Biozyme Whey Protein, 4.4 lb, Cafe Mocha",
//     price: "5199",
//     discount: "13% off",
//     button: "Add",
//     premiumprice: "Premium Price : 5043",
//     rating: "★ ★ ★ ★ 4.1(1567)",
//   },
//   {
//     image:
//       "https://img4.hkrtcdn.com/11855/prd_1185493-MuscleBlaze-Mass-Gainer-XXL-2.2-lb-Chocolate_c_l.jpg",
//     name: "MuscleBlaze Mass Gainer XXL, 2.2 lb, Chocolate",
//     price: "1098",
//     discount: "23% off",
//     button: "Add",
//     premiumprice: "Premium Price : 1065",
//     rating: "★ ★ ★ ★ 4.4(1267)",
//   },
//   {
//     image: "https://img10.hkrtcdn.com/9679/prd_967839_o.jpg",
//     name: "MuscleBlaze Gold Gainer XXL, 6 lb, Chocolate Bliss",
//     price: "3299",
//     discount: "29% off",
//     button: "Add",
//     premiumprice: "Premium Price : 3200",
//     rating: "★ ★ ★ ★ ★ 5.0(9876)",
//   },
//   {
//     image: "https://img4.hkrtcdn.com/13528/prd_1352733_o.jpg",
//     name: "MuscleBlaze Raw Whey Isolate, Unflavoured, 2.2 lb",
//     price: "1998",
//     discount: "20% off",
//     button: "Add",
//     premiumprice: "Premium Price : 1938",
//     rating: "★ ★ ★ 3.0(6789)",
//   },
// ];