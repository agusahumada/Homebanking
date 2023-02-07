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
    balance = substract(balance, newAmount, 'La extracción ha sido exitosa');
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
    const { response, success } = validate(newAmount, balance, dailyWithdraw, newWithdrawalLimit);
    if (success === false) {
        alert(response);
        return;
    }
    balance = add(balance, newAmount);
    balanceElement.innerHTML = balance;
}

function payService() {
    let servicePayment = prompt('Ingrese el numero que corresponda con el servicio que queres pagar \n 1-Agua \n 2-Tel \n 3-Electricidad \n 4-Internet');

    let prevBalance = null;
    switch (servicePayment) {
        case '':
            alert('No se ingreso un monto');
            break;
        case null:
            alert('No ha elegido ningun servicio');
            break;
        case '1':
           prevBalance = substract( balance, water, 'Usted ha pagado el servicio de Agua.\n Valor: $' + water);
            balance = prevBalance ? prevBalance : balance;
            break;
        case '2':
            prevBalance = substract( balance, tel, 'Usted ha pagado el servicio de Tel.\n Valor: $' + tel);
            balance = prevBalance ? prevBalance : balance;
            break;
        case '3':
            prevBalance = substract( balance, electricity, 'Usted ha pagado el servicio de Electricidad.\n Valor: $' + electricity);
            balance = prevBalance ? prevBalance : balance;
            break;
        case '4':
            prevBalance = substract( balance, internet, 'Usted ha pagado el servicio de Internet.\n Valor: $' + internet);
            balance = prevBalance ? prevBalance : balance;
            break;
        default:
            alert('El servicio que eligió no existe');
            break;
        }
        balanceElement.innerHTML = balance;
}
