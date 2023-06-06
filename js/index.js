let subwayOrder = []

createSub = () =>{
    let subwayTotal = 0
    let chosenToppings = document.getElementsByName("toppings");
    let toppingsArray = []
    let subwayName = document.getElementById("subwayName").value;
    let amount = document.getElementById("subwayAmount").value;
    let breadOptions = document.getElementById("breads");
    let breadVal;
    for ( let i = 0;  i < breadOptions.length; i++){
        if(breadOptions[i].checked === true){
            breadVal = breadOptions[i].value;
            subwayTotal += +breadOptions[i].dataset.cost;
        }
    }

    for (let i = 0; i < chosenToppings.length; i++) {
      if (chosenToppings[i].checked === true) {
        toppingsArray.push(chosenToppings[i].value);
        subwayTotal += +chosenToppings[i].dataset.cost;
      }
    }
    subwayTotal += (+amount * subwayTotal)
    subwayOrder.push({
        subName : subwayName,
        bread : breadVal,
        toppings : toppingsArray,
        subAmount : amount,
        cost : subwayTotal,
    }
    )
    console.log(subwayOrder)


}