const isPalindrome = function(str) {
  const noSpaces = str.split(" ").join("").toLowerCase(); // splits input strings and joins to make one string
  // also change characters to lower case
  const midIndex = Math.floor(noSpaces.length/2); //half way point of string and round down
  const lastIndex = noSpaces.length - 1; //index of last character in string

  for (let i = 0; i < midIndex; i++) { //for loop to check half the string
    if (noSpaces[i] !== noSpaces[lastIndex - i]) return false;
  }
  return true; //added this line
};

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome(\"${word}\"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
}


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);

//summary: turn to lower case. loop through function newSpaces instead of original string
//originally missing return statement after the loop to return true if string is palindrome
//testing adding on git another time