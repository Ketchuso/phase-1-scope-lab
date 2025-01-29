// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "Karen";

function upperCaseCustomerName(){
    customerName =  customerName.toUpperCase();
}

function setBestCustomer (){
    bestCustomer = `not ${customerName.toLowerCase()}`;
}

function overwriteBestCustomer(){
    bestCustomer = `maybe ${customerName.toLowerCase()}`
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Karma";
}