const { Stack } = require('../../data-structures/Stack');

describe('Stack', () => {
	let stack;
	let stackOfThreeItems;

	beforeEach(() => {
		stack = new Stack();

		stackOfThreeItems = new Stack();
		stackOfThreeItems.push(10);
		stackOfThreeItems.push(20);
		stackOfThreeItems.push(30);
	});

	// PUSH
	describe('push()', () => {
		test(`should set first and last to the new node on an empty stack`, () => {
			stack.push(10);

			expect(stack.first.value).toBe(10);
			expect(stack.last.value).toBe(10);
		});

		test(`should set last.next to null on an empty stack`, () => {
			stack.push(10);

			expect(stack.last.next).toBe(null);
		});

		test(`should increment the size by 1`, () => {
			expect(stack.size).toBe(0);
			stack.push(10);

			expect(stack.size).toBe(1);

			stack.push(20);
			stack.push(30);

			expect(stack.size).toBe(3);
		});

		test(`should return the size of the stack`, () => {
			expect(stack.push(10)).toBe(1);
		});

		test(`should keep pointer references in the right order`, () => {
			stack.push(50);
			stack.push(40);
			stack.push(30);
			stack.push(20);
			stack.push(10);

			expect(stack.first.value).toBe(10);
			expect(stack.first.next.value).toBe(20);
			expect(stack.first.next.next.value).toBe(30);
			expect(stack.first.next.next.next.value).toBe(40);
			expect(stack.first.next.next.next.next.value).toBe(50);
			expect(stack.first.next.next.next.next.next).toBe(null);
		});
	});

	// POP
	describe('pop()', () => {
		test('should return null on an empty stack', () => {
			expect(stack.pop()).toBe(null);
		});

		test('should return the removed node value', () => {
			const firstNode = stackOfThreeItems.first;
			expect(stackOfThreeItems.pop()).toBe(firstNode.value);
		});

		test('should remove the first node in the stack', () => {
			const secondNode = stackOfThreeItems.first.next;
			stackOfThreeItems.pop();

			expect(stackOfThreeItems.first).toBe(secondNode);
		});

		test('should set first and last to null on a stack with one item', () => {
			stack.push(10);
			stack.pop();

			expect(stack.first).toBe(null);
			expect(stack.last).toBe(null);
		});

		test('should decrement the stack size by 1', () => {
			stackOfThreeItems.pop();

			expect(stackOfThreeItems.size).toBe(2);
		});

		test('should not decrement the stack size below 0', () => {
			stack.pop();
			expect(stack.size).toBe(0);
		});
	});
});
