const apiKey = 'CWZPVV2VCJWRZ1EP';

const submitButton = document.querySelector('#submit-button');
const symbolElement = document.querySelector('#symbol');

submitButton.addEventListener('click', function() {
    // Get the value of the input element
    const inputValue = document.querySelector('#symbol-input').value;

    // Set the text content of the #symbol element to the input value
    symbolElement.textContent = inputValue;

    // Set the visibility of the #symbol element to visible
    symbolElement.style.visibility = 'visible';
});

const fn = 'GLOBAL_QUOTE';

// declare function getStock with parameter a
async function getStock(a) {
    // get stock price from Alpha Vantage API
    const b = await fetch(`https://www.alphavantage.co/query?function=${fn}&symbol=${a}&apikey=${apiKey}`);
    // convert response to json
    const c = await b.json();
    // get global quote from API response
    const d = c['Global Quote'];
    // log API response to console
    console.log(d);
    // get element with id symbol and price
    const e = document.getElementById('symbol');
    const f = document.getElementById('price');
    const openPrice = d['02. open'];
    const highPrice = d['03. high'];
    const lowPrice = d['04. low'];
    const volume = d['06. volume'];
    const latestTradingDay = d['07. latest trading day'];
    const previousClose = d['08. previous close'];
    const change = d['09. change'];
    const changePercent = d['10. change percent'];
    // set symbol and price variables to API response
    e.innerHTML = d['01. symbol'];
    f.innerHTML = d['05. price'];
    document.getElementById('open-price').innerHTML = openPrice;
    document.getElementById('low-price').innerHTML = lowPrice;
    document.getElementById('volume').innerHTML = volume;
    document.getElementById('latest-trading-day').innerHTML = latestTradingDay;
    document.getElementById('previous-close').innerHTML = previousClose;
    document.getElementById('change').innerHTML = change;
    document.getElementById('change-percent').innerHTML = changePercent;
}
;
// This function takes in a symbol and then creates an API call to the Alpha Vantage API to get the data
// It then calls the function to display the data on the page
document.getElementById('submit-button').addEventListener('click', (event)=>{
    event.preventDefault();
    const symbol = document.getElementById('symbol-input').value;
    getStock(symbol);
}
);

// This function takes in a symbol and then creates an API call to the Alpha
// It then calls the function to display the data on the page
document.getElementById('stock-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    const symbol = document.getElementById('symbol-input').value;
    getStock(symbol);
}
);
