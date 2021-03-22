const { Queue } = require('../../data-structures/Queue');

describe('Queue', () => {
	let queue;
	let queueOfThreeItems;

	beforeEach(() => {
		queue = new Queue();

		queueOfThreeItems = new Queue();
		queueOfThreeItems.enqueue(10);
		queueOfThreeItems.enqueue(20);
		queueOfThreeItems.enqueue(30);
	});

	// ENQUEUE
	describe('enqueue()', () => {
		test(`should set first and last to the new node on an empty queue`, () => {
			queue.enqueue(10);

			expect(queue.first.value).toBe(10);
			expect(queue.last.value).toBe(10);
		});

		test(`should increment the size by 1`, () => {
			expect(queue.size).toBe(0);
			queue.enqueue(10);

			expect(queue.size).toBe(1);

			queue.enqueue(20);
			queue.enqueue(30);

			expect(queue.size).toBe(3);
		});

		test(`should return the size of the queue`, () => {
			expect(queue.enqueue(10)).toBe(1);
		});

		test(`should keep first as the first node in the queue`, () => {
			expect(queueOfThreeItems.first.value).toBe(10);
		});

		test(`should keep last as the last node in the queue`, () => {
			expect(queueOfThreeItems.last.value).toBe(30);
		});

		test(`should keep pointer references in the right order`, () => {
			queue.enqueue(10);
			queue.enqueue(20);
			queue.enqueue(30);
			queue.enqueue(40);
			queue.enqueue(50);

			expect(queue.first.value).toBe(10);
			expect(queue.first.next.value).toBe(20);
			expect(queue.first.next.next.value).toBe(30);
			expect(queue.first.next.next.next.value).toBe(40);
			expect(queue.first.next.next.next.next.value).toBe(50);
			expect(queue.first.next.next.next.next.next).toBe(null);
		});
	});

	// DEQUEUE
	describe('dequeue()', () => {
		test('should return null on an empty queue', () => {
			expect(queue.dequeue()).toBe(null);
		});

		test('should return the removed node value', () => {
			const firstNode = queueOfThreeItems.first;
			expect(queueOfThreeItems.dequeue()).toBe(firstNode.value);
		});

		test('should remove the first node in the queue', () => {
			const secondNode = queueOfThreeItems.first.next;
			queueOfThreeItems.dequeue();

			expect(queueOfThreeItems.first).toBe(secondNode);
		});

		test('should set first and last to null on a queue with one item', () => {
			queue.enqueue(10);
			queue.dequeue();

			expect(queue.first).toBe(null);
			expect(queue.last).toBe(null);
		});

		test('should decrement the queue size by 1', () => {
			queueOfThreeItems.dequeue();

			expect(queueOfThreeItems.size).toBe(2);
		});

		test('should not decrement the queue size below 0', () => {
			queue.dequeue();
			expect(queue.size).toBe(0);
		});
	});
});
