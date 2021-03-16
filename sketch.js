// reindeers
let reindeers = ["Rudolph","Zack","Lala","Nino","Max","Punch"];

let newReindeers = [{
  name: "Rudolph",
  color: "red"
}, {
  name: "Zack",
  color: "green"
}, {
  name: "Lala",
  color: "brown"
}, {
  name: "Nino",
  color: "gray"
}, {
  name: "Max",
  color: "blue"
}, {
  name: "Punch",
  color: "purple"
}];

function setup() {
  createCanvas(600, 600);
  background(220);

// ~~~~~~~~~~~~~~~~~~~~~~ 2b.1 ~~~~~~~~~~~~~~~~~~~~~~
  console.log("");
        console.log("THIS IS 2b.1");

  reindeers[5] = "Punchy POP"
  console.log("initial array is ");
  console.log(reindeers);
// ~~~~~~~~~~~~~~~~~~~~~~ END ~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~ 2b.2 ~~~~~~~~~~~~~~~~~~~~~~
  console.log("");
        console.log("THIS IS 2b.2");

// ..................take out the LAST value..................
  reindeers.pop();
  console.log("array after pop ");
  console.log(reindeers);

// ..................push new value..................
  reindeers.push("Pipo")
  console.log("array after push ");
  console.log(reindeers);

// ..................take out the FRIST value..................
  reindeers.shift();
  console.log("array after shift ");
  console.log(reindeers);

// ..................add new value..................
  reindeers.unshift("Pipo")
  console.log("array after unshift ");
  console.log(reindeers);

// ..................change MIDDLE value..................
// ...splice(index, number): starting position in array, how many value
  reindeers.splice(2, 2);
  console.log("array after splice ");
  console.log(reindeers);
// ~~~~~~~~~~~~~~~~~~~~~~ END ~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~ 2b.3 ~~~~~~~~~~~~~~~~~~~~~~
  console.log("");
        console.log("THIS IS 2b.3");
// add name & color in array, turn value to object
  console.log(newReindeers[0].name);
  console.log(newReindeers[4].color);

// ~~~~~~~~~~~~~~~~~~~~~~ 2b.4 ~~~~~~~~~~~~~~~~~~~~~~

  console.log("");
        console.log("THIS IS 2b.4");

// ..................pull random item from array..................
  console.log(random(5));
  console.log(newReindeers[int(random(5))]);
}

function draw() {


}
