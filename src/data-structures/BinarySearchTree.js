/**
 * BinarySearchTree
 *
 * Description:
 * A data structure consisting of nodes in a parent / child relationship
 * Each parent can have at most two children
 * The data is sorted:
 * - Every node to the left of a parent node is always less than the parent
 * - Every node to the right of a parent node is always greater than the parent
 * - This BST support duplicate values - counts value frequency
 *
 * Terminology:
 * - Root: The top node
 * - Child: A node directly connected to another node
 * - Parent: The converse notion of a child
 * - Siblings: A group of nodes with the same parent
 * - Leaf: A node with no children
 * - Edge: The connection between one node and another
 *
 * Pros:
 * - Fast at searching
 * - Fast at inserting and deleting
 *
 * Cons:
 *
 *
 * Usecase:
 *
 * - Foundational for more complex data structures
 *
 * Big O:
 *            Average   Worst case
 * - Space:   O(n)         O(n)
 * - Search:  O(log n)     O(n)
 * - Insert:  O(log n)     O(n)
 * - Delete:  O(log n)     O(n)
 *
 */

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.frequency = 1;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			return this;
		}

		let currentNode = this.root;

		while (true) {
			if (value === currentNode.value) {
				currentNode.frequency++;
				return this;
			}

			if (value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				}

				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				}

				currentNode = currentNode.right;
			}
		}
	}
	find(value, includeParent = false) {
		if (!this.root && includeParent) {
			return { foundNode: undefined, parentNode: null };
		} else if (!this.root) {
			return undefined;
		}

		let currentNode = this.root;
		let found = false;
		let parentNode = null;

		while (currentNode && !found) {
			if (value === currentNode.value) {
				found = true;
			} else if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			}
		}

		if (!found && includeParent) {
			return { foundNode: undefined, parentNode: null };
		} else if (!found) {
			return undefined;
		}

		if (includeParent) {
			return { foundNode: currentNode, parentNode };
		} else {
			return currentNode;
		}
	}
}

exports.BinarySearchTree = BinarySearchTree;
