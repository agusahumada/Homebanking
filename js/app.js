const bodyElement = document.getElementById('bg');
const userElement = document.getElementById('user-number');
const balanceElement = document.getElementById('balance-account');
const withdrawalLimitElement = document.getElementById('withdrawal-limit');
const withdrawBtnElement = document.getElementById('withdraw-btn');

let water = 350;
let tel = 425;
let electricity = 210;
let internet = 570;
let dailyWithdraw = 0;
let balance = 10000;
let newWithdrawalLimit = 2000;
let friendAcount = 1234567;
let friendAcount2 = 89101112;
balanceElement.innerHTML = balance;
withdrawalLimitElement.innerHTML = newWithdrawalLimit;

bodyElement.classList.add('bg-login');

function login() {
    setTimeout(() => {
        let numberAccountUser = null;

        while (numberAccountUser == null || numberAccountUser == '') {
            numberAccountUser = prompt('Ingrese su numero de cuenta');
            if (numberAccountUser == null || numberAccountUser == '') {
                alert('No se ingreso ningún número de cuenta');
            }
        }
        let numberRepeat = prompt('Repita su numero de cuenta');

        if (numberRepeat == null || numberRepeat == '' || numberRepeat != numberAccountUser) {
            alert('El numero ingresado no es correcto, vuelva a ingresar su número de cuenta');
            login();
            return;
        } else {
            alert('Gracias! En un momento será redirigido a su cuenta');

        }
        let parsedAccountUser = parseInt(numberAccountUser);
        let parsedNumberRepeat = parseInt(numberRepeat);
        bodyElement.classList.remove('bg-login');
        userElement.innerHTML = numberAccountUser;
    }, 300);
}

login();

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
            prevBalance = substract(balance, water, 'Usted ha pagado el servicio de Agua.\n Valor: $' + water);
            balance = prevBalance ? prevBalance : balance;
            break;
        case '2':
            prevBalance = substract(balance, tel, 'Usted ha pagado el servicio de Tel.\n Valor: $' + tel);
            balance = prevBalance ? prevBalance : balance;
            break;
        case '3':
            prevBalance = substract(balance, electricity, 'Usted ha pagado el servicio de Electricidad.\n Valor: $' + electricity);
            balance = prevBalance ? prevBalance : balance;
            break;
        case '4':
            prevBalance = substract(balance, internet, 'Usted ha pagado el servicio de Internet.\n Valor: $' + internet);
            balance = prevBalance ? prevBalance : balance;
            break;
        default:
            alert('El servicio que eligió no existe');
            break;
    }
    balanceElement.innerHTML = balance;
}

function transferMoney() {
    let prevBalance = null;
    let amount = prompt('Ingrese el monto de la transferencia');
    let newAmount = parseInt(amount);
    const { response, success } = validate(newAmount, balance, dailyWithdraw, newWithdrawalLimit);
    if (success === false) {
        alert(response);
        return;
    }
    let numberAccount = prompt('Ingrese el numero de la cuenta que desea transferir');
    if (numberAccount == null || numberAccount == '') {
        alert('No se ingreso ningún número de cuenta');
        return
    }

    let parsedNumberAccount = parseInt(numberAccount);

    if (parsedNumberAccount == friendAcount || parsedNumberAccount == friendAcount2) {
        prevBalance = substract(balance, newAmount, 'Transferencia realizada con éxito');
        balance = prevBalance ? prevBalance : balance;
    } else {
        alert('Solo puede transferirse dinero a una cuenta amiga.');
    }
    balanceElement.innerHTML = balance;
}

function changeLimit() {
    let amount = prompt('Ingrese el nuevo limite de extraccion');
    let newAmount = parseInt(amount);
    if (isNaN(newAmount)) {
        alert('No se ingreso ningún monto');
        return
    }
    newWithdrawalLimit = newAmount;
    withdrawalLimitElement.innerHTML = newWithdrawalLimit;
    alert('El limite de extracción ha sido cambiado exitosamente');
};