let category = document.getElementById("category");
let quantity = document.getElementById("quantity");
let option;
let num;


category.addEventListener("change", function () {
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
    let resultado;
    let pay = document.getElementById("payment");
    if (type === "Estudiante") {
        resultado = Math.round(200 * (1 - 0.8) * num);
        pay.textContent = resultado;
    } else if (type === "Trainee") {
        resultado = Math.round(200 * (1 - 0.5) * num);
        pay.textContent = resultado;
    } else if (type === "Junior") {
        resultado = Math.round(200 * (1 - 0.15) * num);
        pay.textContent = resultado;
    }
    cleanPayment(pay);
    buyTicket(pay)
}

function cleanPayment(i) {
    let btn = document.getElementById("reset");
    btn.addEventListener("click", () => {
        i.textContent = "";
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


const btnResumen = document.getElementById('btn-Resumen')

btnResumen.addEventListener('click', ()=>{
    let body = document.getElementById('modal-body');
    body.innerHTML = `
    <div>                
        <p>Nombre Completo:<span>${option}</span></p>
        <p>Correo:<span>${num}</span></p>
        <p>Cantidad de tickets: <span></span></p>
        <p>Descuento aplicado: <span></span></p>
        <p>Total a pagar: <span></span></p>
    </div>`
})
// function buyTicket(i){
//     let btn = document.getElementById("buyIt");
//     btn.addEventListener("click", () => {
//         i.textContent = "";
//         option = "";
//         num = "";
//         category.value = ''
//         quantity.value = ''
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Compra realizada",
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     });
// }
