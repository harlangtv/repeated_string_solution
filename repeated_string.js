// prompt:

// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

// If the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.
//
// Function Description
// Function must return an integer that represents the number of occurrences of a in the prefix of length n in the infinitely repeating string.
//
// Parameters
// s: a string to repeat
// n: the number of characters to consider

// My SOLUTION

function repeatedString(s, n) {
    let string = Math.floor(n / s.length)
    let aCount = (s.split('a').length - 1) * string
    let remainder = n % s.length
    // started by creating three variables. One (string) which is the total number of times the string(s) appears in the infinite string (n). Usd Math.floor function in order to return whole number and round to closest integer. The next (aCount) to store the number of "a's" in the extended string. I set the aCount to the amount of a's in the test string, then multiply it by string to calculate the time times it appears. The last variable (remainder) is the remaining letters left after dividing the test length(n) by the length of the given string(s).

    for (let i = 0; i < remainder; i++){
        if (s.charAt(i) === "a") {
            aCount++
        }
    }
    // set up a for loop to iterate through the string whatever the remainder amount was, then set up an if startment to check if the character is an "a". If it is, we increment aCount, if not it moves onto the next letter. Finally i return aCount to total up the amount of a's in the string
    return aCount
}
