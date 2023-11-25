let category : HTMLSelectElement = document.getElementById('category') as HTMLSelectElement;
let cantidad : HTMLInputElement = document.getElementById('quantity') as HTMLInputElement
let optionSelected: string
let num : number
let resultado : number 


category.addEventListener('change',catchCategory)    
cantidad.addEventListener('input', validationNum)


function catchCategory(){
    const selectedIndex: number = category.selectedIndex;
    optionSelected = category.options[selectedIndex].text
    payment(num, optionSelected)
}

function validationNum(){
        let messageError : HTMLSpanElement = document.getElementById('messageError') as HTMLSpanElement
        num = Number(cantidad.value)
        const validation : RegExp = /^[0-9]+$/;
        if(!validation.test(num.toString()) ){
            messageError.className = 'messageError'
            messageError.textContent = 'Error, ingrese un número valido'
        }else{
            messageError.className= 'messageErrorDisabled'
            messageError.textContent = ''
            payment(num, optionSelected)
        }
}

    function payment(num : number,option: string ){
        let ticketPrice: number = 200
        resultado = 0
        if (option === 'Estudiante'){
            resultado = Math.round(ticketPrice * (1 - 0.8) * num);
            return resultado

        }else if(option === 'Trainee'){
            resultado = Math.round(ticketPrice * (1 - 0.5) * num);
            return resultado
            
        }else if (option === 'Junior'){
            resultado = Math.round(ticketPrice * (1 - 0.15) * num);
            return resultado
        }
    }

function showResumen(){
    document.getElementById('btn-Resumen')?.addEventListener('click', ()=>{
        if(resultado !== undefined){
            let payment : HTMLSpanElement = document.getElementById('payment') as HTMLSpanElement
            payment.textContent = resultado.toString()
        }
    })

}

showResumen()