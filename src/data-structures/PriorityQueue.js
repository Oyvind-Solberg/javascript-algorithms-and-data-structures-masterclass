/**
 * PriorityQueue
 *
 * Description:
 *
 *
 * Terminology:
 *
 *
 * Pros:
 *
 *
 * Cons:
 *
 *
 * Usecase:
 *
 *
 * Big O:
 *            Average   Worst case
 *
 *
 */

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor(...items) {
		this.values = [];

		if (items.length > 0) {
			items.forEach((item) => {
				this.values.push(new Node(item.value, item.priority));
			});
		}
	}
	enqueue(value, priority) {
		let newNode = new Node(value, priority);
		this.values.push(newNode);

		if (this.values.length === 1) return this;

		this.bubbleUp();

		return this;
	}
	bubbleUp() {
		let currentIndex = this.values.length - 1;
		const element = this.values[currentIndex];

		while (currentIndex > 0) {
			let parentIndex = Math.floor((currentIndex - 1) / 2);
			let parent = this.values[parentIndex];

			if (element.priority >= parent.priority) break;

			this.values[parentIndex] = element;
			this.values[currentIndex] = parent;

			currentIndex = parentIndex;
		}
	}
	dequeue() {
		let oldMin = this.values[0];
		let endValue = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = endValue;
			this.sinkDown();
		}

		return oldMin;
	}
	sinkDown() {
		let currentIndex = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIndex = 2 * currentIndex + 1;
			let rightChildIndex = 2 * currentIndex + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (leftChild.priority < element.priority) {
					swap = leftChildIndex;
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIndex;
				}
			}

			if (swap === null) break;

			this.values[currentIndex] = this.values[swap];
			this.values[swap] = element;

			currentIndex = swap;
		}
	}
}

exports.PriorityQueue = PriorityQueue;
