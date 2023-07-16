window.onload = refresh;

var bugCounter = 1;
var bugLimit = 50;

const container = document.querySelector("#box");
alert(container);

document.getElementById('btn-refresh').addEventListener('click', refresh);
document.getElementById('counter').innerHTML = '';

counter.innerHTML += (
    `<div class="myCounter" id="myNewCounter" style="display: inline-block;">
        
 </div> `
);

function getRandom (min, max) {
    let random = Math.random() * (max - min) + min;
    return random;
}

function checkBugs() {
    if(bugCounter >= (bugLimit-1) && bugCounter >= 0) {
        document.getElementById('btn-refresh').removeEventListener('click', refresh);
    }
    
}

function refresh() {
        bugCounter = 0;
        let count = document.getElementById('myNewCounter');
        count.innerHTML = `Осталось жуков: ${bugLimit}`;
        for (let i = 0; i < bugLimit; i++) {
            createBug();
        }
        checkBugs();
        moveBug();

}

function createBug() {
    let randomWidthNumber = getRandom(0, 600);
    let randomHeightNumber = getRandom(0, 400);
    let img = document.createElement('img');
    img.className = 'bugg';
    img.id = `tmp` + `_` + `${bugCounter}`;
    img.style = ` left: ${randomWidthNumber}px; top: ${randomHeightNumber}px`;
    img.src = 'images/bugs.png';
    img.alt = 'bugs';
    document.getElementById('box').appendChild(img);
    bugCounter++;
}

function moveBug() {

    for(let i = 0; i <= bugLimit; i++) {
        let timerId = setInterval(() => {
        let randomWidthNumber = getRandom(0, 600);
        let randomHeightNumber = getRandom(0, 400);
        if (`tmp` + `_` + `${i}`){
            document.getElementById(`tmp` + `_` + `${i}`).style.left = `${randomWidthNumber}px`;
            document.getElementById(`tmp` + `_` + `${i}`).style.top = `${randomHeightNumber}px`;
        } 
        else {
            console.log('element not found');
        }
    }
    , 2000);
    }
}

container.addEventListener('click', e => {
     if(e.target.className == 'bugg') {
        container.removeChild(e.target);
        bugCounter--;
     }
     if (bugCounter == 0) {
        document.getElementById('btn-refresh').addEventListener('click', refresh);
        alert("Вы поймали всех жуков!");
     }
    let count = document.getElementById('myNewCounter');
    count.innerHTML = `Осталось жуков: ${bugCounter}`;
    if (bugCounter === 0) {
        clearInterval(counts);
    }
})