//variables
let balance = document.getElementById('balance-account');
let newBalance = parseInt(balance);
newBalance = 5000;
balance.innerHTML = newBalance;

function withdrawMoney() {
    let amount = prompt('Ingrese el monto de la extracción');
    let newAmount = parseInt(amount);
    newBalance = newBalance - newAmount;
    balance.innerHTML = newBalance;    
}

function depositMoney() {
    let amount = prompt('Ingrese el monto del deposito');
    let newAmount = parseInt(amount);
    newBalance = newBalance + newAmount;
    balance.innerHTML = newBalance;    
}

function payService() {
    
}