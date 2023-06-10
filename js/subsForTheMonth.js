let bestSubways = [
  {
    subName: "Jenkins Bacon",
    bread: "Italian bread",
    toppings: ["Roast beef", "Ham", "Bacon", "Meatballs", "Salami"],
    sauce: ["BBQ"],
    cost: "R87.00",
  },
  {
    subName: "Triple Food Combo ",
    bread: "Multigrain bread",
    toppings: ["Salami", "Steak", "Lettuce", "Gherkins", "Blue cheese"],
    sauce: ["BBQ"],
    cost: "R49.00",
  },
  {
    subName: "Chili Especial ",
    bread: "Sourdough bread",
    toppings: ["Steak", "Lettuce", "Jalapeños", "Gherkins", "Blue cheese"],
    sauce: ["Sweet Chili" , "Peri-Peri"],
    cost: "R52.00",
  },
  {
    subName: "The Cheesy Subway ",
    bread: "Multigrain bread",
    toppings: ["Salami ", "Cheddar ", "Swiss ", "Parmesan ", "Blue cheese ", "Mozzarella "],
    sauce: ["Peri-Peri", "Sweet chili"],
    cost: "R74.00",
  },
];
displayArray = (array) =>{
    let string;
    for(let i = 0; i < array.length; i++){
        if (i === 0){
            string = `<li><p>${array[i]}</p></li>`;
        }
        else{
            string += `<li><p>${array[i]}</p></li>`;
        }
        
    }
    return string
}
displaySubsForTheMonth = () => {
    let subsRow = document.getElementById("subs-month-row");
    for ( let i = 0; i < bestSubways.length; i++){
        let subwayName = bestSubways[i].subName;
        let breads = bestSubways[i].bread;
        let subToppings = bestSubways[i].toppings;
        let sauces = bestSubways[i].sauce;
        let cost = bestSubways[i].cost;
        
        subsRow.innerHTML += `<div class="col-3">
          <div class="card subs-month" style="width: 100%">
            <img
              class="card-img-top sandwich"
              src="./assets/sandwich.png"
              alt="sandwich icon"
            />
            <div class="card-body">
              <h5 class="card-title centered">${subwayName}</h5>

              <div id="accordion">
                <div class="card-collapse">
                  <div class="card-header" id="heading${i}${i}">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-dark collapsed"
                        data-toggle="collapse"
                        data-target="#collapse${i}${i}"
                        aria-expanded="false"
                        aria-controls="collapse${i}${i}"
                      >
                        Bread
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapse${i}${i}"
                    class="collapse"
                    aria-labelledby="heading${i}${i}"
                    data-parent="#accordion"
                  >
                    <div class="card-body collapse-background">
                      <p>${breads}</p>
                    </div>
                  </div>
                </div>
                <div class="card-collapse">
                  <div class="card-header" id="heading${i}${i + 1}">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-dark collapsed"
                        data-toggle="collapse"
                        data-target="#collapse${i}${i + 1}"
                        aria-expanded="false"
                        aria-controls="collapse${i}${i + 1}"
                      >
                        Toppings
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapse${i}${i + 1}"
                    class="collapse"
                    aria-labelledby="heading${i}${i + 1}"
                    data-parent="#accordion"
                  >
                    <div class="card-body collapse-background">
                      <ul>
                        ${displayArray(subToppings)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-collapse">
                  <div class="card-header" id="heading${i}${i + 2}">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-dark collapsed"
                        data-toggle="collapse"
                        data-target="#collapse${i}${i + 2}"
                        aria-expanded="false"
                        aria-controls="collapse${i}${i + 2}"
                      >
                        Sauces
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapse${i}${i + 2}"
                    class="collapse"
                    aria-labelledby="heading${i}${i + 2}"
                    data-parent="#accordion"
                  >
                    <div
                      class="card-body collapse-background "
                    >
                      <ul>
                        ${displayArray(sauces)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h2 class ="subs-for-month-cost">${cost}</h2>
            </div>
          </div>
        </div>`;
    }
}
