let category = document.getElementById("category")
let quantity = document.getElementById ('quantity')
let option
let num

category.addEventListener('change', function(){
    let optionCategory = category.options[category.selectedIndex]
    option = optionCategory.text 
    payment(num, option)
})




quantity.addEventListener('input', ()=>{
        num = quantity.value
        let validation = /^[0-9]+$/
        if(!validation.test(num) && num != 0){
            document.getElementById('messageError').className = 'messageError'
            document.getElementById('messageError').textContent = '*Error, ingrese un número valido'
        }else{
            document.getElementById('messageError').className = 'messageErrorDisabled'
            document.getElementById('messageError').textContent = ''
            payment(num, option)
        }
    })



    
function payment (num , type){
    let resultado
    let pay = document.getElementById('payment')
    if(type === 'Estudiante'){
        resultado = Math.round((200 * (1 - 0.8)) * num) 
        pay.textContent= resultado
    }else if(type === 'Trainee'){
        resultado = Math.round ((200 * (1 - 0.5)) * num)
        pay.textContent = resultado
    }else if(type === 'Junior'){
        resultado = Math.round ((200 * (1 - 0.15)) * num)
        pay.textContent = resultado
    }
    cleanPayment(pay)
}

function cleanPayment (i){
    let btn = document.getElementById('reset')
    btn.addEventListener('click' , ()=>{
        i.textContent = ''
        option = ''
        num = ''
    })
}
