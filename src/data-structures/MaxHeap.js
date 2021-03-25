/**
 * MaxHeap
 *
 * Description:
 * Similar to binary search trees, but orderd parent/child not left/right
 * Parent nodes are always larger than child nodes
 * Stored as an array:
 * - For any index (n) of an array...
 *    The left child is stored at 2n + 1
 *    The right child is stored at 2n + 2
 * - For any child node at index (n)..
 *    Its paren is at index (n - 1) / 2 (rounded down)
 *
 * Terminology:
 *
 * Pros:
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
 */

class MaxHeap {
	constructor(values = []) {
		this.values = values;
	}
	insert(element) {
		this.values.push(element);

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

			if (element <= parent) break;

			this.values[parentIndex] = element;
			this.values[currentIndex] = parent;

			currentIndex = parentIndex;
		}
	}
	extractMax() {
		let oldMax = this.values[0];
		let endValue = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = endValue;
			this.sinkDown();
		}

		return oldMax;
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
				if (leftChild > element) {
					swap = leftChildIndex;
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
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

exports.MaxHeap = MaxHeap;

const maxHeap15Items = new MaxHeap([
	150,
	140,
	130,
	120,
	90,
	110,
	100,
	80,
	50,
	40,
	20,
	70,
	30,
	10,
	60,
]);

maxHeap15Items.extractMax();
