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
  //product Object
  let productObj = {
    product: addProduct.value,
    price: addPrice.value,
    year: addYear.value,
    id: createUUID(),
  };
  products.push(productObj);
  console.log(products);
  //prices total
  prices.push(productObj.price);
  console.log(prices);
  let priceSum = prices.reduce((total, product) => {
    return parseFloat(total) + parseFloat(product);
  });
  console.log(priceSum);
  //to HTML
  document.querySelector("form").reset();
  //productSection.insertAdjacentHTML("beforeend", createProductHTML(productObj));
  total.innerHTML = priceSum;
  updateProductView();
  //const mapProduct = products.map(product => createProductHTML(product));
  //productSection.innerHTML = mapProduct.join('');
  //const productDiv = document.createElement('div');
  //productDiv.innerHTML = createProductHTML(productObj);
  //productSection.append(productDiv);
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

/*function removeNode() {
  const myDiv = document.getElementById("productId");
  const parent = myDiv.parentNode;
  parent.removeChild(myDiv);
}*/

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
  //create HTML*
}
