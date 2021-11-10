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

