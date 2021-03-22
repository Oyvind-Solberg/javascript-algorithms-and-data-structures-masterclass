/**
 * Queue
 *
 * Description:
 * A FIFO data structure (First In, First Out)
 *
 * Pros:
 * - Fast insertion and removal
 *
 * Cons:
 *
 *
 * Usecase:
 * - Task processing
 * - Printing
 * - Uploading resources
 * - Foundational for more complex data structures
 *
 *
 * Big O:
 * Insertion:  O(1)
 * Removal:    O(1)
 * Searching:  O(N)
 * Access:     O(N)
 *
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(value) {
		const newNode = new Node(value);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.size++;

		return this.size;
	}
	dequeue() {
		if (!this.first) return null;

		let oldFirst = this.first;
		this.first = oldFirst.next;
		this.size--;

		if (this.size === 0) {
			this.last = null;
		}

		oldFirst.next = null;

		return oldFirst.value;
	}
}

exports.Queue = Queue;
