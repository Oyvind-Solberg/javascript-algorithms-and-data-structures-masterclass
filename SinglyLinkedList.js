/**
 * Singly Linked List
 *
 * Pros:
 * Fast insertion and removal
 *
 * Cons:
 * No built in index
 *
 * Usecase:
 * Insertion and deletion at the beginning are frequently required
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
	}
}

class SinglyLinkedList {
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
			this.tail = newNode;
		}

		this.length++;

		return this;
	}
	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}
	shift() {
		if (!this.head) return undefined;

		let oldHead = this.head;
		this.head = oldHead.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		oldHead.next = null;

		return oldHead;
	}
	unshift(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let currentNode = this.head;
		let currentPosition = 0;

		while (currentPosition < index) {
			currentNode = currentNode.next;
			currentPosition++;
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
			let prevNode = this.get(index - 1);
			let temp = prevNode.next;

			newNode.next = temp;
			prevNode.next = newNode;

			this.length++;
		}

		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let prevNode = this.get(index - 1);
		let nodeToRemove = prevNode.next;
		prevNode.next = nodeToRemove.next;

		nodeToRemove.next = null;

		this.length--;

		return nodeToRemove;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let prev = null;
		let next;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
	}
	print() {
		const array = [];
		let current = this.head;

		while (current) {
			array.push(current.val);
			current = current.next;
		}

		console.log(array);
	}
}

exports.SinglyLinkedList = SinglyLinkedList;
