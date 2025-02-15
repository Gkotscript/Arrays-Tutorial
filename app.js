const numbers = [ 1, 2, 3, 4, 5, 6, 7]; // faster, from a performance perspective
console.log(numbers);

// const moreNumbers = new Array(9); // empty array. i can omit `new` contructor and still have an array
// console.log(moreNumbers);
//
// const yetMoreNumbers = Array.of(1, 2); // slower, from a performance perspective
// console.log(yetMoreNumbers);

const moreNumbers = Array.from("Hello"); // makes an array from the input in the parentheses.
console.log(moreNumbers);
console.log(moreNumbers[0]);
console.log(moreNumbers[1]);
console.log(moreNumbers[2]);
console.log(moreNumbers[3]);
console.log(moreNumbers[4]);

// make an array from dom elements
const listItems = document.querySelectorAll('li');
console.log(listItems);
const list = Array.from(listItems);
console.log(list);
const hobbies = ["Cooking", "VideoGames"];
const personalData = [35, "Menelaos", {moredetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];
for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint);
    }
}