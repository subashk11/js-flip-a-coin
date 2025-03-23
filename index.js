

const elementRef = document.getElementById('button');
const resultRef = document.getElementById('result');

function toss() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log("result is : ", result);

    const coin = document.querySelector(".coin-container");
    const heads = document.getElementById("heads");
    const tails = document.getElementById("tails");


    // Apply animation
    coin.classList.add("flipping");

    setTimeout(() => {
        // Remove animation class after flip completes
        coin.classList.remove("flipping");

        // Show result
        if (result === 'Heads') {
            heads.style.opacity = "1";
            tails.style.opacity = "0";
        } else {
            heads.style.opacity = "0";
            tails.style.opacity = "1";
        }

        resultRef.innerText = result;
    }, 1000); // Match animation duration (1s)
}

function addEventListeners() {
    if(elementRef){
        try {
            elementRef.addEventListener("click", function () {
                toss();
            })
        } catch(error) {
            console.error("ERROR : ", error)
        }
    }
}

addEventListeners();