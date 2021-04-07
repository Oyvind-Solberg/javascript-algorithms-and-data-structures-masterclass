const { PriorityQueue } = require('../../data-structures/PriorityQueue');

describe('PriorityQueue', () => {
	let priorityQueue;

	beforeEach(() => {
		priorityQueue = new PriorityQueue();
	});

	// ENQUEUE
	describe('enqueue()', () => {
		test('should return the queue', () => {
			expect(priorityQueue.enqueue()).toBe(priorityQueue);
		});

		test('should store the queued items', () => {
			priorityQueue.enqueue('a', 10);
			expect(priorityQueue.values[0].value).toBe('a');
			expect(priorityQueue.values[0].priority).toBe(10);

			priorityQueue.enqueue('b', 5);

			expect(priorityQueue.values[0].value).toBe('b');
			expect(priorityQueue.values[0].priority).toBe(5);

			expect(priorityQueue.values[1].value).toBe('a');
			expect(priorityQueue.values[1].priority).toBe(10);

			priorityQueue.enqueue('c', 1);

			expect(priorityQueue.values[0].value).toBe('c');
			expect(priorityQueue.values[0].priority).toBe(1);

			expect(priorityQueue.values[1].value).toBe('a');
			expect(priorityQueue.values[1].priority).toBe(10);

			expect(priorityQueue.values[2].value).toBe('b');
			expect(priorityQueue.values[2].priority).toBe(5);
		});
	});

	// DEQUEUE
	describe('dequeue()', () => {
		test('should return the removed node', () => {
			priorityQueue.enqueue('a', 10);
			priorityQueue.enqueue('b', 5);
			priorityQueue.enqueue('c', 1);
			let topNode = priorityQueue.values[0];
			expect(priorityQueue.dequeue()).toBe(topNode);
			expect(topNode.value).toBe('c');
			expect(topNode.priority).toBe(1);
		});

		test('should remove the top node', () => {
			priorityQueue.enqueue('a', 10);
			priorityQueue.enqueue('b', 5);
			priorityQueue.enqueue('c', 1);
			priorityQueue.dequeue();

			expect(priorityQueue.values[0].value).toBe('b');
			expect(priorityQueue.values[0].priority).toBe(5);
		});
	});
});
