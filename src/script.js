let addProduct = document.getElementById('productAdd');
let addPrice = document.getElementById('priceAdd');
let addYear = document.getElementById('yearAdd');
let productButton = document.getElementById('button');
let productSection = document.getElementById('results');
let total = document.getElementById('total');

let resultsFinal = document.getElementById('results');

let form = document.getElementById('form');

let productPlaceHolder = document.getElementById('productResult');


let products = [];
let prices = [];

const addProductObject = (ev) => {
ev.preventDefault();
productSection.style.visibility = 'visible';
//product Object
let productObj = {
    product : addProduct.value,
    price : addPrice.value,
    year : addYear.value,
    id : Math.floor(Math.random() * 100),
}
products.push(productObj);
console.log(products);
//prices total
prices.push(productObj.price);
console.log(prices);
let priceSum = prices.reduce((previousValue, currentValue) => { 
  return parseFloat(previousValue) + parseFloat(currentValue) });
console.log(priceSum);
//to HTML
document.querySelector('form').reset();
productSection.insertAdjacentHTML("beforeend", createProductHTML(productObj));
total.innerHTML = priceSum;

//const mapProduct = products.map(product => createProductHTML(product));
//productSection.innerHTML = mapProduct.join('');
//const productDiv = document.createElement('div'); 
//productDiv.innerHTML = createProductHTML(productObj);
//productSection.append(productDiv);
}


const createProductHTML =(product)=>{

return `<div id=${create_UUID()} class='productClasses'>
         <span id="product1"><b>Product:</b>${product.product}</span> 
         <span id="product2"><b>Price:</b>${product.price}</span>
         <span id="product3"><b>Year:</b>${product.year}</b></span>
         <button onclick='removeProduct(${product.id})' class="deleteButton" type="button">Delete</button>
       </div>`;
}

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}
function removeProduct(itemId, products) {
  // find the index of the todo with the id you are looking for
  const indexOfProductToDelete = products.findIndex((productInArray) => productInArray.id === itemId);
  // remove that todo:
  products.splice(indexOfProductToDelete, 1) // delete the todo
} 

console.log(create_UUID());

/*function removeNode() {
  const myDiv = document.getElementById("productId");
  const parent = myDiv.parentNode;
  parent.removeChild(myDiv);
}*/

document.addEventListener('submit', addProductObject);










