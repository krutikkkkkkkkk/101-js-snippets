// format a number as currency

let currecnySymbol = '₹' // change this to your currency symbol;

function formatCurrency(amount) {
    return currecnySymbol + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
console.log(formatCurrency(123456789.123456789));
