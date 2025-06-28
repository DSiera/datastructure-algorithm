// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

  // line 3 & 4 are 0(1) + 0(1) = 2
  // line 11 is 0(1) = 1
  // inside the loop run n times = n + n + n + n = 4n (line 6, 7, 8, 9)
  // O(3 + 4n)
  // O(n)