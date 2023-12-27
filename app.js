// Iteration 1 //

let donutCount = 0;
let autoClickerCount = 1;
let autoClickerCost = 100;
let taxIncrease = 0.1;
let clickPriceNow = autoClickerCost;
let displayDonut = document.getElementById('donutCount');
let displayAutoClickerCount = document.getElementById('autoClickerCount');
let button= document.getElementById('buyAutoOven');
let reset = document.getElementById('reset');



function addDonut(){
    displayDonut.innerText = Math.floor(donutCount++);
    if(donutCount <= autoClickerCost){
        button.disabled= true;
    } else {
        button.disabled = false;
    }
}

button.disabled= true;
//document.getElementById('buyAutoOven').addEventListener('click', buyAutoOven);


function buyAutoOven(){
if(donutCount >= autoClickerCost){
        donutCount -= autoClickerCost;
        autoClickerCost = autoClickerCost + (autoClickerCost * taxIncrease);
        clickPriceNow = Math.floor(autoClickerCost);
        document.getElementById('autoClickerCost').innerText = clickPriceNow;
        setInterval(addDonut, 1000);
        displayDonut.innerText = donutCount;
        displayAutoClickerCount.innerText = autoClickerCount++;
        button.disabled=false;
    } else {
        button.disabled = true;
    }
    document.getElementById('buyAutoOven').addEventListener('click', buyAutoOven);
}

/* Reset Button */

function resetGame(){
    document.getElementById('clicker').reset;
    window.location.reload();

}

//document.getElementById('buyAutoOven').addEventListener('click', buyAutoOven);
//document.getElementById('buyAutoOven').removeAttribute('disabled, true');

//This is the section for the drop down button
/*function dropBtn() {
    document.getElementById('drop-Btn').classList.toggle("show");
}*/
