let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function counter() {
    count += 1
    countEl.textContent = count
}

function subtractor() {
    count -= 1
    countEl.textContent = count
}

