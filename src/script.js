let addProduct = document.getElementById("productAdd");
let addPrice = document.getElementById("priceAdd");
let addYear = document.getElementById("yearAdd");
let productButton = document.getElementById("button");
let productSection = document.getElementById("results");
let total = document.getElementById("total");

let resultsFinal = document.getElementById("results");

let form = document.getElementById("form");

let productPlaceHolder = document.getElementById("productResult");

let products = [];
let prices = [];

const addProductObject = (ev) => {
  ev.preventDefault();
  productSection.style.visibility = "visible";
  let productObj = {
    product: addProduct.value,
    price: addPrice.value,
    year: addYear.value,
    id: createUUID(),
  };
  products.push(productObj);
  prices.push(productObj.price);
  let priceSum = prices.reduce((total, product) => {
    return parseFloat(total) + parseFloat(product);
  });
  document.querySelector("form").reset();
  total.innerHTML = priceSum;
  updateProductView();
};

const createProductHTML = (product) => {
  return `<div class='product'>
         <span class='product-name'><b>Product:</b>${product.product}</span> 
         <span class='product-price'><b>Price:</b>${product.price}</span>
         <span class='product-year'><b>Year:</b>${product.year}</b></span>
         <button onclick='removeProduct("${product.id}")' class="deleteButton" type="button">Delete</button>
       </div>`;
};

function createUUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

document.addEventListener("submit", addProductObject);

function removeProduct(id) {
  //remove product from product array
  products = products.filter((product) => product.id !== id);
  updateProductView();
}

function updateProductView() {
  //update total
  //remove children from results section
  productSection.innerHTML = "";
  //add products back to results section
  products.forEach((product) => {
    productSection.insertAdjacentHTML("beforeend", createProductHTML(product));
  });
}
