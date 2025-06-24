/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const joinList = function(array) {
  // First and foremost access the element in the array individually
  let joiner = '';
  if (array.length === 0){
    return joiner
  }
  for (let word of array) {
    // We want to then join them together is a sentence seperated by commas except the last one
    if(word !== array[array.length-1]) {
      joiner =joiner + word + ', '
    }
  }
  joiner += array[array.length-1] //+ "."
  // return the resulting sentence
  return joiner
}

const concepts = joinList(conceptList);

console.log('Today I learned about', concepts);
