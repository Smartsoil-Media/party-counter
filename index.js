let ct = document.getElementById("changing-title")

function swap() {
    ct.textContent = "Wow such cool, u can click"
}

function swaps() {
    ct.textContent = "Clam down big rig"
}


let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1 
    countEl.textContent = count
}


let subtractEl = document.getElementById("count-el")

function subtract() {
    count += - 1
    subtractEl.textContent = count 

}

let dEl = document.getElementById("count-el")
function multiply() {
    count = count * 2
    dEl.textContent = count
}


let saveEl = document.getElementById("save-el")
function save() {
    countStr = count + " - " 
    saveEl.textContent += countStr
}

let resetEl = document.getElementById("count-el", "save-el")

function reset() {
    count = 0
    resetEl.textContent = count
    saveEl.textContent = "Fresh Start:"

}


console.log(countEl)

let welcomeEl = document.getElementById("welcome-el") 


let name = "Gun Clayton"
let greeting = "You sexy beast, ready to rip up the sea bacon?"

let myGreeting = name + "! " + greeting 

console.log(myGreeting)

// 9 - 24 - 51 - 100100


console.log(welcomeEl)


