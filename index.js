// var userInput= prompt("Enter a City").toLowerCase();
// var cities= ['karachi','peshawar','lahore','quetta'];
// if(cities.includes(userInput)){

//     console.log("You Live In the cleanest city");
// }
// else{
//     console.log("You might consider shifting in a new city");
// }

// Num Methods
// round
// 
// floor
// Number()
// parseInt
// parseFloat
// tofixed
// random
// math.min(...)
// math.max(...)



var result = document.querySelector('#result')
var side = document.querySelector('#sideSelected')
var coinFlip = document.querySelector('#coinImage')

function tossHeads(){
    // console.log("tossing the coin");

    let tossing = Math.floor( Math.random()*2);
    // console.log(tossing);
    side.innerHTML='<p class="result">Side Selected: Heads</p>'
    if(tossing===1){
        console.log("Heads");
        result.innerHTML= `<p class="won">Result: You Won the Toss</p>`
        coinFlip.innerHTML= `<div class="flip-horizontal"><img class="flip-horizontal" width="200px" id="coinImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBmzmY8GfNXXBvghpfeXMSaCfyUpHXjPYHe166ohnnh2TtNUACP49tmx_mnpUhxkpKto&usqp=CAU">    </div>`
        
    }
    else{
        console.log("tail");
        result.innerHTML= `<p class="lost">Result: You Lost the Toss</p>`
        coinFlip.innerHTML= `<img class="flip-horizontal" width="200px" id="coinImg" src="https://media.geeksforgeeks.org/wp-content/uploads/20240108115006/tails.png">`
        
        
    }
}
function tossTails(){
    // console.log("tossing the coin");

    let tossing = Math.floor( Math.random()*2);
    // console.log(tossing);
    side.innerHTML='<p class="result">Side Selected: Tails</p>'
    if(tossing===1){
        console.log("Heads");
        result.innerHTML= `<p class="lost">Result: You Lost the Toss</p>`
        coinFlip.innerHTML= `<div class="flip-horizontal"><img class="flip-horizontal" width="200px" id="coinImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBmzmY8GfNXXBvghpfeXMSaCfyUpHXjPYHe166ohnnh2TtNUACP49tmx_mnpUhxkpKto&usqp=CAU">    </div>`
    }
    else{
        console.log("tail");
        result.innerHTML= `<p class="won">Result: You Won the Toss</p>`
        coinFlip.innerHTML= `<img class="flip-horizontal" width="200px" id="coinImg" src="https://media.geeksforgeeks.org/wp-content/uploads/20240108115006/tails.png">`
    }
}
// var num = 24.67

// console.log(Math.round(num));