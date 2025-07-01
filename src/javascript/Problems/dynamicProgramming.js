// Dynamic programming refers to an optimization technique that use caching to improve performance
// Which is Memoization
// Dynamic programming is breaking up large problem into sub-problem and solve it only once then cache it
// If the same sub-problem has already been done, it simply returns from cache without solving it agains

function memoizedAddTo80() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("long");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
// Time Complexity O(n)

const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(8));

// More problem for Dynamic Programming
// https://leetcode.com/problems/house-robber/description/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// https://leetcode.com/problems/climbing-stairs/description/