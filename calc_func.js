let screen = document.querySelector('.calc-screen')
let history = document.querySelector('.history')

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

// function untuk mengupdate history
const updateHistory = (value)=>{
    history.value += value
}

const inputOperator = (operator) => {
    prevVal = currentVal
    calcOper = operator
    currentVal = ''
    updateHistory(`${prevVal} ${calcOper}`)
}

const clearAll = ()=>{
    history.value = ''
    currentVal = '0'
    calcOper = ''
    prevVal = ''
}

const calculate = () => {
    let result = ''
    switch(calcOper){
        case '+':
            result = parseInt(prevVal) + parseInt(currentVal)
            break
        case '-':
            result = parseInt(prevVal) - parseInt(currentVal)
            break
        case 'x':
            result = parseInt(prevVal) * parseInt(currentVal)
            break
        case '/':
            result = parseInt(prevVal) / parseInt(currentVal)
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
    calculate()
    updateScreen(currentVal)
    clearAll()
})

const btn_clear = document.getElementById('clear-btn')

btn_clear.addEventListener('click', (event)=>{
    clearAll()
    updateScreen(currentVal)
})
