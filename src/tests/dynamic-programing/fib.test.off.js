const { fibMemo, fibTab } = require('../../dynamic-programing/fib');

describe('Dynamic Programming', () => {
	describe('fib Memoization', () => {
		test(`should return the correct result`, () => {
			expect(fibMemo(1)).toBe(1);
			expect(fibMemo(2)).toBe(1);
			expect(fibMemo(3)).toBe(2);
			expect(fibMemo(4)).toBe(3);
			expect(fibMemo(5)).toBe(5);
		});

		test(`should solve the problem fast`, () => {
			const start = performance.now();
			fibMemo(100);
			const end = performance.now();
			const time = end - start;
			expect(time < 10).toBe(true);
		});
	});

	describe('fib Tabulation', () => {
		test(`should return the correct result`, () => {
			expect(fibTab(1)).toBe(1);
			expect(fibTab(2)).toBe(1);
			expect(fibTab(3)).toBe(2);
			expect(fibTab(4)).toBe(3);
			expect(fibTab(5)).toBe(5);
		});

		test(`should solve the problem fast`, () => {
			const start = performance.now();
			fibTab(100);
			const end = performance.now();
			const time = end - start;
			expect(time < 10).toBe(true);
		});
	});
});
