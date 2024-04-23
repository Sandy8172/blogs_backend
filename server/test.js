const data = ["T14_S5", "T14_S10", "T10_S20", "T5_S8", "T15_S0", "T40_S80"];

// Extract numbers from strings and convert them into numbers
const extractNumbers = (str) => {
  const matches = str.match(/\d+/g); // Extract numbers using regular expression
  return matches ? matches.map(Number).reduce((acc, curr) => acc * 1000 + curr) : 0; // Convert array of numbers to a single number
};


// // Sort the data based on the extracted numbers
const sortedData = data.sort((a, b) => extractNumbers(a) - extractNumbers(b));

// console.log(sortedData);

// console.log(extractNumbers('T40_S80'));


console.log(data.map(ele=>extractNumbers(ele)));