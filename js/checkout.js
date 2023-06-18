let subwayTotal = 0
let appliedCoupon = false

SubsCheckout = () => {
    let subData = JSON.parse(localStorage.getItem('subways'));
    let showSubsArea = document.getElementById("showSubs");
    let finalPrice = document.getElementById("finalPurchasePrice");
    for(let i = 0; i < subData.length; i++){
        let subwayName = subData[i].subName;
        let cheese = subData[i].cheeses;
        let meats = subData[i].meat;
        let vegs = subData[i].veg;
        let sauces = subData[i].sauce;
        let breadType = subData[i].bread;
        let price = subData[i].cost;
        let subAmount = subData[i].subwayAmount;
        subwayTotal += price
        showSubsArea.innerHTML += `<div class="nameAndPrice">
          <div class="row">
            <div class="col-6"><h5>Subway Name: ${subwayName} </h5></div>
            <div class="col-6"><h5 class="pricePosition">Price: R${price}.00 </h5></div>
          </div>
        

        </div>
     <div class="row list-group-background">
        <div class="col-4 ">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-bread-list-${i}" data-toggle="list" href="#list-bread-${i}" role="tab" aria-controls="bread-${i}">Bread Type</a>
      <a class="list-group-item list-group-item-action" id="list-toppings-list-${i}" data-toggle="list" href="#list-toppings-${i}" role="tab" aria-controls="toppings-${i}">Toppings</a>
      <a class="list-group-item list-group-item-action" id="list-sauces-list-${i}" data-toggle="list" href="#list-sauces-${i}" role="tab" aria-controls="sauces-${i}">Sauces</a>
      <a class="list-group-item list-group-item-action" id="list-drinks-list-${i}" data-toggle="list" href="#list-drinks-${i}" role="tab" aria-controls="drinks-${i}">Drinks</a>
      <a class="list-group-item list-group-item-action" id="list-quantity-list-${i}" data-toggle="list" href="#list-quantity-${i}" role="tab" aria-controls="quantity-${i}">Quantity</a>
    </div>
  </div>
  <div class="col-8 content-background">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-bread-${i}" role="tabpanel" aria-labelledby="list-bread-list-${i}"> <h4>Bread</h4><p>${breadType}</p></div>
      <div class="tab-pane fade" id="list-toppings-${i}" role="tabpanel" aria-labelledby="list-toppings-list-${i}"><p>vegetables</p><p>${vegs.join(
          ", "
        )}</p><p>Meat</p><p>${meats.join(
          ", "
        )}</p><p>Cheese</p><p>${cheese.join(", ")}</p></div>
      <div class="tab-pane fade" id="list-sauces-${i}" role="tabpanel" aria-labelledby="list-sauces-list-${i}"><h4>Sauces</h4><p>${sauces.join(
          ", "
        )}</p></div>
      <div class="tab-pane fade" id="list-drinks-${i}" role="tabpanel" aria-labelledby="list-drinks-list-${i}">drinks</div>
      <div class="tab-pane fade" id="list-quantity-${i}" role="tabpanel" aria-labelledby="list-quantity-list-${i}"><h3>Quantity: ${subAmount}</h3></div>
    </div>
  </div>
</div>`;
    }
    finalPrice.innerHTML = `Total: R${subwayTotal}.00`
    }
AddDiscount = () =>{
    let finalPrice = document.getElementById("finalPurchasePrice");
    let gotDiscount = document.getElementById("discount").value;
    if (!appliedCoupon && gotDiscount === "12345"){
    appliedCoupon = true
    subwayTotal = subwayTotal - (subwayTotal * 0.15);
    finalPrice.innerHTML = `R${subwayTotal}`;}

}

resetOrder = () => {
    localStorage.removeItem('subways');
    window.location.href = '../index.html'
}
    