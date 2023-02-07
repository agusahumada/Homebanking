function substract(num1, num2) {
    return num1 - num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function validate(newAmount, balance, dailyWithdraw, newWithdrawalLimit) {
    let success = false;
    let response = "";

    if (isNaN(newAmount)) return { response: "No se ingreso un monto", success };

    if (newAmount > balance) {
        response = 'No cuenta con saldo suciente para realizar una extracción';
        return { response, success };
    }
    if (newAmount > newWithdrawalLimit) {
        response = `El limite de la extracción es de ${newWithdrawalLimit}`;
        return { response, success };
    }
    let previewTotal = dailyWithdraw + newAmount;

    if (previewTotal > newWithdrawalLimit) {
        response = 'Limite excedido';
        return { response, success };
    }
    return { response, success: true };
}