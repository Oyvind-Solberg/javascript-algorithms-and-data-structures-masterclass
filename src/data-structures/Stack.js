/**
 * Stack
 *
 * Description:
 * A LIFO data structure. (Last Inn, First Out)
 *
 * Pros:
 * - Fast insertion and removal
 *
 * Cons:
 *
 *
 * Usecase:
 * - Manage function invocations
 * - Undo / Redo
 * - Routing (the history object) - Browser history
 * - Foundational for more complex data structures
 *
 * Big O:
 * - Insertion:  O(1)
 * - Removal:    O(1)
 * - Searching:  O(n)
 * - Access:     O(n)
 *
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(value) {
		const newNode = new Node(value);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}

		this.size++;
		return this.size;
	}
	pop() {
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

exports.Stack = Stack;
