let subwayOrder = [];


ToppingsFunction = (topsArray, toppingClass, countTop, total ) =>{
   for (let i = 0; i < toppingClass.length; i++) {
     if (toppingClass[i].checked === true) {
       topsArray.push(toppingClass[i].value);
       total += +toppingClass[i].dataset.cost;
        countTop += 1;
     }
   }
   return  [countTop, total]
}
CreateSub = () =>{
    let subwayTotal = 0
    let meats = document.getElementsByName("meat");
    let vegs = document.getElementsByName("veg");
    let cheese = document.getElementsByName("cheese");
    let sauces = document.getElementsByName("sauces");
    let meatArray = []
    let vegArray = [];
    let cheeseArray = [];
    let sauceArray = [];
    let subwayName = document.getElementById("subwayName").value;
    let breadOptions = document.getElementsByName("breads");
    let amount = document.getElementById("subwayAmount").value;
    let errors = document.getElementById("errors")
    let breadVal;
    let countToppings = 0;
    let quantity;
    let drinks = document.getElementById('buddy').value;    
    for ( let i = 0;  i < breadOptions.length; i++){
        if(breadOptions[i].checked === true){
            breadVal = breadOptions[i].value;
            subwayTotal += +breadOptions[i].dataset.cost;
        }
    }
     [countToppings, subwayTotal] = ToppingsFunction(meatArray, meats, countToppings, subwayTotal);
     [countToppings, subwayTotal] = ToppingsFunction(vegArray, vegs, countToppings, subwayTotal);
     [countToppings, subwayTotal] = ToppingsFunction(cheeseArray,cheese,countToppings,subwayTotal);
    for (let i = 0; i < sauces.length; i++) {
      if (sauces[i].checked === true) {
        sauceArray.push(sauces[i].value);
        subwayTotal += +sauces[i].dataset.cost;
      }
    }
    if(subwayName.length === 0){
      return errors.innerHTML= "Please enter your sub's name"
    }
    else if(sauceArray.length === 0 && countToppings < 5){
      return errors.innerHTML = "Please add a sauce and at least 5 toppings"
    }
    else if(countToppings < 5 ){
        return errors.innerHTML = "Please add at least 5 toppings";
    }
    else if(sauceArray.length === 0){
      return errors.innerHTML ="Please add a sauce"
    }
    else{
      errors.innerHTML = ""
    }
    if (drinks === "Coke") {
      subwayTotal += 10;
    } else if (drinks === "Fanta Orange") {
      subwayTotal += 8;
    } else if (drinks === "Fanta Grape") {
      subwayTotal += 10;
    } else if (drinks === "Coke zero") {
      subwayTotal += 8;
    } else if (drinks === "Ginger beer") {
      subwayTotal += 6;
    } else{
      drinks = 'none'
    }
    quantity = +amount
    subwayTotal = subwayTotal * quantity
    subwayOrder.push({
        subName : subwayName,
        bread : breadVal,
        meat : meatArray,
        veg: vegArray,
        cheeses : cheeseArray,
        sauce: sauceArray,
        cost : subwayTotal,
        subwayAmount: quantity,
        drink: drinks
    }
    )
    document.getElementById("onTimePrice").innerHTML = "R 0.00"
    document.getElementById("subwayForm").reset()

}

onTimePricing = () => {
  let activePricing  = 0
  let meats = document.getElementsByName("meat");
  let vegs = document.getElementsByName("veg");
  let cheese = document.getElementsByName("cheese");
  let sauces = document.getElementsByName("sauces");
   let breadOptions = document.getElementsByName("breads");
   let amount = document.getElementById("subwayAmount").value;
   
   for (let i = 0; i < breadOptions.length; i++) {
     if (breadOptions[i].checked === true) {
       activePricing += +breadOptions[i].dataset.cost;
     }
   }

   for (let i = 0; i < meats.length; i++) {
     if (meats[i].checked === true) {
       activePricing += +meats[i].dataset.cost;
     }
   }
   for (let i = 0; i < vegs.length; i++) {
     if (vegs[i].checked === true) {
       activePricing += +vegs[i].dataset.cost;
     }
   }
   for (let i = 0; i < cheese.length; i++) {
     if (cheese[i].checked === true) {
       activePricing += +cheese[i].dataset.cost;
     }
   }
   for (let i = 0; i < sauces.length; i++) {
     if (sauces[i].checked === true) {
       activePricing += +sauces[i].dataset.cost;
     }
   }

   activePricing = activePricing * amount
   document.getElementById("onTimePrice").innerHTML = "R " + activePricing + ".00"
}

showOrder = () => {
  checkOrder = (meat, veg, cheeses, sauces) =>{
    let orderLayout;
    if (meat.length === 0 && veg.length === 0) {
      orderLayout = (cheeses.join(", ") + ", " + sauces.join(", "));
    } else if (cheeses.length === 0 && meat.length === 0) {
      orderLayout = (veg.join(", ") + ", " + sauces.join(", "));
    } else if (cheeses.length === 0 && veg.length === 0) {
      orderLayout = (meat.join(", ") + ", " + sauces.join(", "));
    } else if (cheeses.length === 0) {
      orderLayout = ( meat.join(", ") + ", " + veg.join(", ") + ", " + sauces.join(", "));
    } else if (veg.length === 0) {
      orderLayout = (meat.join(", ") + ", " + cheeses.join(", ") + ", " + sauces.join(", "));
    } else if (meat.length === 0) {
      orderLayout = (veg.join(", ") + ", " + cheeses.join(", ") + ", " + sauces.join(", "));
    }
    else{
      orderLayout = (meat.join(", ") + ", " + veg.join(", ") + ", " + cheeses.join(", ") + ", " + sauces.join(", "));
    }
    return orderLayout

  }
  let subwayArea = document.getElementById("subways");
  let total = document.getElementById("orderTotal");
  let finalTotal = 0
  subwayArea.innerHTML = "";
  for (let i = 0; i < subwayOrder.length; i++){
    let name = subwayOrder[i].subName;
    let breadType = subwayOrder[i].bread;
    let meats = subwayOrder[i].meat;
    let vegs = subwayOrder[i].veg;
    let cheese = subwayOrder[i].cheeses;
    let sauces = subwayOrder[i].sauce;
    let drinks = subwayOrder[i].drink;
    let subQuantity = subwayOrder[i].subwayAmount;
    let subPrice = subwayOrder[i].cost;
    finalTotal += subPrice;

    subwayArea.innerHTML += `
    <div class="col-6">
    <div class="card card-background" style="width: 18rem; float: left; border-radius: 15px; margin-top: 50px; margin-left: 10px; color: #F2E3DB">
  <div class="card-body">
  <img class="card-image" src="../assets/sandwich.png" >
    <h5 class="card-title">Name: ${name}</h5>
    <p class="card-text">Bread: ${breadType}</p>
    <button class="btn btn-primary card-button" type="button" data-toggle="collapse" data-target="#toppingsCollapse-${i}" aria-expanded="false" aria-controls="collapseExample">
    Toppings
  </button>
</p>
<div class="collapse" id="toppingsCollapse-${i}">
  <div class="card card-body collapse-background ">
  ${checkOrder(meats, vegs, cheese, sauces)} 
  </div>
</div>
 <p class="card-text">Drink: ${drinks}</p>
<div class = "row">
<div class = "col-6">
 <p class = "card-text " >quantity: ${subQuantity}</p>
 </div>
 <div class = "col-6">
  <p class = "card-text pricesRight">R${subPrice}.00</p>
  </div>
  </div>
  </div>
 
</div>
</div>
  `;
  }
  total.innerHTML = "R " + finalTotal + ".00"
  if(subwayOrder.length > 0){
  console.log(subwayOrder);}
}

SubwayCheck = () => {
  if(subwayOrder.length > 0){
  let subInfo = JSON.stringify(subwayOrder)
  localStorage.setItem('subways', subInfo)
  window.location.href = "../pages/Checkout.html";
  }
  else{
    alert("please enter at least one subway")
  }
}

