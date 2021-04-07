/**
 * Dynamic programing
 *
 * Description:
 * A method for solving a complex problem by breaking it down into a collection
 * of simpler subproblems, solving each of those subproblems just once,
 * and storing their solutions *
 *
 * *
 */

// Memoization - Top-down
// Example using recursion
function fibMemo(n, memo = [undefined, 1, 1]) {
	if (memo[n] !== undefined) return memo[n];

	let result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
	memo[n] = result;
	return result;
}

// Tabulation - Bottom-up (Better space complexity)
// Example using iteration
function fibTab(n) {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}

exports.fibMemo = fibMemo;
exports.fibTab = fibTab;
