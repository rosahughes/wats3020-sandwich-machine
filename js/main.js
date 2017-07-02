/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////

//bread order
let breadOrder = prompt('What kind of bread would you like? (white, wheat, or sourdough)', 'white');

// meat order
let meatOrder = prompt('What kind of meat(s) would you like? The options are turkey, ham, pastrami, salami, and roast beef. If you would like more than one, please list them and separate with a comma.');

// toppings order
let toppingsOrder = prompt('Please list the toppings you would like from the following list, separated by commas. Toppings options: lettuce, tomato, peppers, onions, cucumbers.');

// condiments order
let condimentsOrder = prompt('Please list the condiments you woud like from the following list, separated by commas. Condiments options: mustard, mayonnaise, relish, oil and vinegar, hot sauce.');

// Step Two ////////////////////////////////////////////////////////////

// The `prices` object below specifies the prices for each thing.
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Convert order information from Strings to Arrays.
let meatArray = meatOrder.split(',');
let toppingArray = toppingsOrder.split(',');
let condimentArray = condimentsOrder.split(',');

// Calculate cost for meat, toppings, and condiments.
let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

// Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingsOrder}</p>
    <p>Condiments: ${condimentsOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${prices.meat.toFixed(2)}</p>
    <p class="text-right">Toppings: $${prices.topping.toFixed(2)}</p>
    <p class="text-right">Condiments: $${prices.condiment.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
