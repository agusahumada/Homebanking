const balanceElement = document.getElementById('balance-account');
const withdrawalLimitElement = document.getElementById('withdrawal-limit');
const withdrawBtnElement = document.getElementById('withdraw-btn');

let water = 350;
let tel = 425;
let electricity = 210;
let internet = 570;
let dailyWithdraw = 0;
let balance = 5000;
let newWithdrawalLimit = 2000;
balanceElement.innerHTML = balance;
withdrawalLimitElement.innerHTML = newWithdrawalLimit;

function withdrawMoney() {
    let amount = prompt('Ingrese el monto de la extracción');
    let newAmount = parseInt(amount);
    const { response, success } = validate(newAmount, balance, dailyWithdraw, newWithdrawalLimit);
    if (success === false) {
        alert(response);
        return;
    }
    balance = substract(balance, newAmount);
    balanceElement.innerHTML = balance;
    dailyWithdraw = dailyWithdraw + newAmount;

    if (dailyWithdraw >= newWithdrawalLimit) {
        withdrawBtnElement.disabled = true;
        withdrawBtnElement.classList.add('disabled-btn');
    }
}

function depositMoney() {
    let amount = prompt('Ingrese el monto del deposito');
    let newAmount = parseInt(amount);
    balance = add(balance, newAmount);
    balanceElement.innerHTML = balance;
}

function payService() {
    let payment = prompt("Ingrese el numero que corresponda con el servicio que");
}