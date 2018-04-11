let button1 = document.getElementsByTagName('button')[0];
let button2 = document.getElementsByTagName('button')[1];
let button3 = document.getElementsByTagName('button')[2];


//Creates a Die Class to be referenced in future event listeners
class Die {
    constructor() {
        // Properties (things to immediately happen when a new instance of Die is made) are put in the constructor section
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        // this.roll() is referenced. The class method can be references in the constructor section, thus executed one an instance is created. (Which will give it a random starting value upon generation)
        this.roll();
        // add a listener for clicking a box, which changes the dice roll
        this.div.addEventListener('click', () => {
            this.roll();
        });
        // when a box is double clicked, the specific div is removed from the dom, and the data piece in the array is defined and spliced out (which keeps the sum count correct)
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let thisDiv = dieArray.indexOf(this.div)
            dieArray.splice(thisDiv);
        });
    }
    roll() {
        this.random = Math.floor(Math.random() * 6 + 1);
        this.div.innerText = this.random;
    }
}

// Create an empty array, used to store instances of the Die class (saved in d1)
let dieArray = [];

// Creates an instance of die, and uses .push to add it to dieArray.
button1.addEventListener('click', function () {
    let d1 = new Die();
    dieArray.push(d1);
})

// Loops through dieArray, uses .roll on each d1 at every spot in the array, using i as a value that checks each section (starts at 0, keeps going up for length of dieArray, which is the same thing as the number of boxes on the screen)
// this function can reference dieArray because it was written on the global scale
button2.addEventListener('click', function () {
    for (i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
})

// Use += to keep stacking and saving the value of dieArray[i].random to result. Then, after the loop runs, alert result.
button3.addEventListener('click', function () {
    let result = 0
    for (i = 0; i < dieArray.length; i++) {
       result += dieArray[i].random;
    }
    alert(result);
})
