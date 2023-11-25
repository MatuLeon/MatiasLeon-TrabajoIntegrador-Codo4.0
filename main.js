var category = document.getElementById('category');
var cantidad = document.getElementById('quantity');
var optionSelected;
var num;
var resultado;
category.addEventListener('change', catchCategory);
cantidad.addEventListener('input', validationNum);
function catchCategory() {
    var selectedIndex = category.selectedIndex;
    optionSelected = category.options[selectedIndex].text;
    payment(num, optionSelected);
}
function validationNum() {
    var messageError = document.getElementById('messageError');
    num = Number(cantidad.value);
    var validation = /^[0-9]+$/;
    if (!validation.test(num.toString())) {
        messageError.className = 'messageError';
        messageError.textContent = 'Error, ingrese un número valido';
    }
    else {
        messageError.className = 'messageErrorDisabled';
        messageError.textContent = '';
        payment(num, optionSelected);
    }
}
function payment(num, option) {
    var ticketPrice = 200;
    resultado = 0;
    if (option === 'Estudiante') {
        resultado = Math.round(ticketPrice * (1 - 0.8) * num);
        return resultado;
    }
    else if (option === 'Trainee') {
        resultado = Math.round(ticketPrice * (1 - 0.5) * num);
        return resultado;
    }
    else if (option === 'Junior') {
        resultado = Math.round(ticketPrice * (1 - 0.15) * num);
        return resultado;
    }
}
function showResumen() {
    var _a;
    (_a = document.getElementById('btn-Resumen')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        if (resultado !== undefined) {
            var payment_1 = document.getElementById('payment');
            payment_1.textContent = resultado.toString();
        }
    });
}
showResumen();
