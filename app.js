let category = document.getElementById("category")
let quantity = document.getElementById('quantity')
let option = ''


function optionSelected(){
        console.log(option)
        let optionCategory = category.options[category.selectedIndex]
        console.log(typeof optionCategory.text)
        option = optionCategory.text
        console.log('cambio?' + ' ' + option)
        return option
} 

category.addEventListener('change', optionSelected)

function quantities (){
    quantity.addEventListener('input', ()=>{
        let num = quantity.value
        let validation = /^[0-9]+$/
        if(!validation.test(num)){
            document.getElementById('messageError').className = 'messageError'
            document.getElementById('messageError').textContent = '*Error, ingrese un número valido'
        }else{
            document.getElementById('messageError').className = 'messageErrorDisabled'
            document.getElementById('messageError').textContent = ''
        }
    })
    
}



function payment(){
    if(optionSelected() === 'Estudiante'){
        console.log( ' paso')
    }
}

payment()




