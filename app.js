let category = document.getElementById("category");
let quantity = document.getElementById("quantity");
let form = document.getElementById('formTickets')
let option;
let num;
let resultado


category.addEventListener("change",  () =>{
    let optionCategory = category.options[category.selectedIndex];
    option = optionCategory.text;
    payment(num, option);
});

quantity.addEventListener("input", () => {
    num = quantity.value;
    let validation = /^[0-9]+$/;
    if (!validation.test(num) && num != 0) {
        document.getElementById("messageError").className = "messageError";
        document.getElementById("messageError").textContent =
            "*Error, ingrese un número valido";
    } else {
        document.getElementById("messageError").className = "messageErrorDisabled";
        document.getElementById("messageError").textContent = "";
        payment(num, option);
    }
});

function payment(num, type) {
    let ticketPrice = 200
    resultado = 0;
    if (type === "Estudiante") {
        resultado = Math.round(ticketPrice * (1 - 0.8) * num);
        return resultado
    } else if (type === "Trainee") {
        resultado = Math.round(ticketPrice * (1 - 0.5) * num);
        return resultado
    } else if (type === "Junior") {
        resultado = Math.round(ticketPrice * (1 - 0.15) * num);
        return resultado
    }
    cancelPayment();
}

function cancelPayment() {
    let btn = document.getElementById("reset");
    btn.addEventListener("click", () => {
        document.getElementById('payment').textContent = 0;
        option = "";
        num = "";
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Compra cancelada",
            showConfirmButton: false,
            timer: 1500,
        });
    });
}

function showResumen(){
    document.getElementById('btn-Resumen').addEventListener('click', ()=>{
        if(resultado !== undefined){
            document.getElementById('payment').textContent = resultado
        }
    })

}


showResumen()
