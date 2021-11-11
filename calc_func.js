let screen = document.querySelector('.calc-screen')

let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operators')

// state
let currentVal = `${screen.value}` // bertipe string untuk concat angka
let calcOper = ''
let prevVal = ''

// function untuk mengupdate nilai pada screen
const updateScreen = (number)=>{
    screen.value = number
}

// function untuk mengubah temp angka ketika operator diklik
const inputOperator = (operator) => {
    if(calcOper == ''){
        prevVal = currentVal
    }
    calcOper = operator
    currentVal = ''
}

// function to clear all values
const clearAll = ()=>{
    currentVal = '0'
    calcOper = ''
    prevVal = ''
}

// handle decimal clicked more than 1 time for current showed number
const decimalClicked = (point) => {
    if(currentVal.includes('.')){
        return
    }
    // apabila angka yang tertera pada layar masih 0, sehingga di dpn koma terdapat angka 0
    if (screen.value == '0'){
        currentVal = screen.value
    }
    currentVal += point
}

// function untuk menghitung
const calculate = () => {
    let result = ''
    if(currentVal == ''){
        currentVal = '0'
    }
    switch(calcOper){
        case '+':
            result = parseFloat(prevVal) + parseFloat(currentVal)
            break
        case '-':
            result = parseFloat(prevVal) - parseFloat(currentVal)
            break
        case 'x':
            result = parseFloat(prevVal) * parseFloat(currentVal)
            break
        case '/':
            result = parseFloat(prevVal) / parseFloat(currentVal)
            break
        default:
            break
    }
    currentVal = result
    calcOper = ''
}

numbers.forEach((number)=>{
    number.addEventListener('click', (event)=>{
        // untuk menghindari angka dimulai dari 0
        // logika: jika nilai yang ada pada screen masih = 0, maka ubah nilai yang tertera pada screen sesuai dengan angka yang diklik
        if(currentVal=='0'){
            // event target = button number yang dijalankan event click
            currentVal = event.target.value
            updateScreen(currentVal)
        }
        // logika: jika nilai yang ada pada screen > 0, maka concat angka sehingga angka menjadi >9
        else{
             // += digunakan untuk concat, sehingga input angka bisa > 9
            currentVal += event.target.value
            updateScreen(currentVal)
        }
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (event)=>{
        inputOperator(event.target.value)
    })
})

const btn_equal = document.getElementById('equal-btn')

btn_equal.addEventListener('click', (event)=>{
    if(prevVal == ''){
        updateScreen(screen.value) 
    }
    else{
        if(screen.value != '0'){
            currentVal = screen.value
        }
        calculate()
        updateScreen(currentVal)
        clearAll()
    }
})

const btn_clear = document.getElementById('clear-btn')

btn_clear.addEventListener('click', (event)=>{
    clearAll()
    updateScreen(currentVal)
})

const point_sym = document.getElementById('point-symbol')

point_sym.addEventListener('click', (event)=>{
    decimalClicked(event.target.value)
    updateScreen(currentVal)
})

const btn_percent = document.getElementById('percent')

btn_percent.addEventListener('click', (event)=>{
    currentVal = currentVal / 100
    updateScreen(currentVal)
})