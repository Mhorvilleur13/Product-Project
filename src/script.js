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
let totalPrice = 0;

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
  totalPrice += parseFloat(productObj.price);
  rerender();
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
  const product = products.find((product) => product.id === id);

  if (!product) {
    // did not find product with given id
    return;
  }

  totalPrice -= product.price;
  products = products.filter((product) => product.id !== id);
  rerender();
}

function rerender() {
  document.querySelector("form").reset();
  updateTotal();
  updateProductView();
}

function updateProductView() {
  //remove children from results section
  productSection.innerHTML = "";
  //add products back to results section
  products.forEach((product) => {
    productSection.insertAdjacentHTML("beforeend", createProductHTML(product));
  });
}

function updateTotal() {
  total.innerHTML = totalPrice;
}
