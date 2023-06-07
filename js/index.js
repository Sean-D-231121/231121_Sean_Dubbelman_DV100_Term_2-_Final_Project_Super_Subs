let subwayOrder = []
console.log("Hello")
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
    let breadVal;
    let quantity;
    for ( let i = 0;  i < breadOptions.length; i++){
        if(breadOptions[i].checked === true){
            breadVal = breadOptions[i].value;
            subwayTotal += +breadOptions[i].dataset.cost;
        }
    }

    for (let i = 0; i < meats.length; i++) {
      if (meats[i].checked === true) {
        meatArray.push(meats[i].value);
        subwayTotal += +meats[i].dataset.cost;
      }
    }
    for (let i = 0; i < vegs.length; i++) {
      if (vegs[i].checked === true) {
        vegArray.push(vegs[i].value);
        subwayTotal += +vegs[i].dataset.cost;
      }
    }
    for (let i = 0; i < cheese.length; i++) {
      if (cheese[i].checked === true) {
        cheeseArray.push(cheese[i].value);
        subwayTotal += +cheese[i].dataset.cost;
      }
    }
    for (let i = 0; i < sauces.length; i++) {
      if (sauces[i].checked === true) {
        sauceArray.push(sauces[i].value);
        subwayTotal += +sauces[i].dataset.cost;
      }
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
        subwayAmount: quantity
    }
    )
    console.log(subwayOrder)
    document.getElementById("onTimePrice").innerHTML = "R 0.00"

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
    let subQuantity = subwayOrder[i].subwayAmount;
    let subPrice = subwayOrder[i].cost;
    finalTotal += subPrice;

    subwayArea.innerHTML += `
    <div class="card card-background" style="width: 18rem; float: left; border-radius: 15px; margin-top: 50px; margin-left: 10px; color: #F2E3DB">
  <div class="card-body">
    <h5 class="card-title">Name: ${name}</h5>
    <p class="card-text">Bread: ${breadType}</p>
    <button class="btn btn-primary card-button" type="button" data-toggle="collapse" data-target="#toppingsCollapse-${i}" aria-expanded="false" aria-controls="collapseExample">
    Toppings
  </button>
</p>
<div class="collapse" id="toppingsCollapse-${i}">
  <div class="card card-body collapse-background ">
   ${meats},${vegs},${cheese},${sauces}
  </div>
</div>
  </div>
  <h5 style="float: left">quantity: ${subQuantity}</h5>
  <h5 >R${subPrice}.00</h5>
</div>
  `;
  }
  
}
