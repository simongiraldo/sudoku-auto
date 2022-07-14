function setEvents(){
    let positions = document.getElementsByClassName('position')
    for(let i of positions){
        i.className = 'set position'
        i.innerText = ''
        i.addEventListener('click', changeNumber)
    }
}

function changeNumber(event){
    let picked = event.path[0]
    let number = Number(picked.innerText) 
    if(number < 9){
        number++
    }
    else {
        number = 1
    }
    onPosition.push(picked)
    console.log(event.path[1]);
    picked.className = 'number position'
    picked.innerText = number
}

function solve(){
    console.log(onPosition);
}

let board = document.getElementById('board')
let onPosition = []
setEvents()