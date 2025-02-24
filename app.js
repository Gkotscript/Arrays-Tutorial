// const numbers = [ 1, 2, 3, 4, 5, 6, 7]; // faster, from a performance perspective
// console.log(numbers);
//
// // const moreNumbers = new Array(9); // empty array. i can omit `new` contructor and still have an array
// // console.log(moreNumbers);
// //
// // const yetMoreNumbers = Array.of(1, 2); // slower, from a performance perspective
// // console.log(yetMoreNumbers);
//
// const moreNumbers = Array.from("Hello"); // makes an array from the input in the parentheses.
// console.log(moreNumbers);
// console.log(moreNumbers[0]);
// console.log(moreNumbers[1]);
// console.log(moreNumbers[2]);
// console.log(moreNumbers[3]);
// console.log(moreNumbers[4]);
//
// // make an array from dom elements
// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// const list = Array.from(listItems);
// console.log(list);
// const hobbies = ["Cooking", "VideoGames"];
// const personalData = [35, "Menelaos", {moredetail: []}];
//
// const analyticsData = [[1, 1.6], [-5.4, 2.1]];
// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }
//
// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // adds another entry at the END of the array
// hobbies.unshift("Coding"); // adds another entry at the BEGINNING of the array
// hobbies.pop(); // deletes the LAST item of the array
// hobbies.shift(); // deletes the FIRST item of the array
//
// console.log(hobbies);
// hobbies[1] = "Coding"
// hobbies[5] = "Reading" // rarely used
// console.log(hobbies);
//
// hobbies.splice(1, 0, "Good Food") // looks at index 1 deletes 0 entries and adds the "Good Food"
// console.log(hobbies);
//
// hobbies.splice(0, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice(1, 5);
// const storedResults = testResults.concat([4, 6, 7, 2]);
// testResults.push(5.91);
//
// console.log(storedResults, testResults);
// console.log(testResults.indexOf(10));
//
// const personData = [{name: "Menelaos"},{name: "Miguel"}];
// console.log(personData.indexOf({name: "Menelaos"}));
//
// const menelaos = personData.find((person, index, persons) => {
//     return person.name === "Menelaos";
// });
// console.log(menelaos);

// const prices = [5.3, 1.5, 10.99];
// const tax = 0.24;
// const taxAdjustedPrices = [];
//
// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, index, prices) => {
//     const priceObj = {index: index, taxAdjPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// })
// console.log(taxAdjustedPrices);

const prices = [5.3, 1.5, 10.99];
const tax = 0.24;

const taxAdjustedPrices = prices.map((price, index, prices) => {
    const priceObj = {index: index, taxAdjPrice: price * (1 + tax)};
    return priceObj;
})
console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log("sorted prices are " + sortedPrices);