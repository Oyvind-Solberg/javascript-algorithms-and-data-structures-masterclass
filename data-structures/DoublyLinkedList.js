/**
 * Doubly Linked List
 *
 * Pros:
 * - Fast insertion and removal
 * - Better than Singly Linked List for finding nodes
 *
 * Cons:
 * - No built in index
 * - Extra pointer takes up more memory
 *
 * Usecase:
 * - Insertion and deletion at the beginning are frequently required
 * - Searching in both directions are frequently required
 *
 * Big O:
 * Insertion:  O(1) - (O(N) including searching operations)
 * Removal:    O(1) - (O(N) including searching operations)
 * Searching:  O(N)
 * Access:     O(N)
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;

		const poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;

		return poppedNode.val;
	}
	shift() {
		if (!this.head) return undefined;

		let oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead.val;
	}
	unshift(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		let currentNode;
		let currentPosition;
		let middelIndex = Math.floor(this.length / 2);

		if (middelIndex >= index) {
			currentNode = this.head;
			currentPosition = 0;

			while (currentPosition < index) {
				currentNode = currentNode.next;
				currentPosition++;
			}
		} else {
			currentNode = this.tail;
			currentPosition = this.length - 1;

			while (currentPosition > index) {
				currentNode = currentNode.prev;
				currentPosition--;
			}
		}

		return currentNode;
	}
	set(index, val) {
		const foundNode = this.get(index);

		if (foundNode) {
			foundNode.val = val;
			return true;
		} else {
			return false;
		}
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.push(val);
		} else if (index === 0) {
			this.unshift(val);
		} else {
			const newNode = new Node(val);
			const nextNode = this.get(index);
			const prevNode = nextNode.prev;

			nextNode.prev = newNode;
			newNode.next = nextNode;

			prevNode.next = newNode;
			newNode.prev = prevNode;

			this.length++;
		}

		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const nodeToRemove = this.get(index);
		const prevNode = nodeToRemove.prev;
		const nextNode = nodeToRemove.next;

		prevNode.next = nextNode;
		nextNode.prev = prevNode;

		nodeToRemove.prev = null;
		nodeToRemove.next = null;

		this.length--;

		return nodeToRemove.val;
	}
}

exports.DoublyLinkedList = DoublyLinkedList;
