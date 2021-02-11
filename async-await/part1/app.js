// Part 1: Number Facts
// 1 Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

// 2 Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// 3 Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// (Note: You’ll need to make multiple requests for this.)

let favNumber =5;
let baseURL = "http://www.numbersapi.com";

// 1.
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
  }
  part1();

//2
const favNumbers = [7, 8, 9];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}

//3
async function part3() {
  let facts = await Promise.all(
    Array.from({length: 4}, () => $.getJSON(`${baseURL}/${favNumbers}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();