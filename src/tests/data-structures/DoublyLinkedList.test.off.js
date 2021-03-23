const { DoublyLinkedList } = require('../../data-structures/DoublyLinkedList');

describe('DoublyLinkedList', () => {
	let list;
	let listOfThreeItems;

	beforeEach(() => {
		list = new DoublyLinkedList();

		listOfThreeItems = new DoublyLinkedList();
		listOfThreeItems.push(10);
		listOfThreeItems.push(20);
		listOfThreeItems.push(30);
	});

	// PUSH
	describe('push()', () => {
		test(`should set head and tail to the new node on an empty list`, () => {
			list.push(10);

			expect(list.head.val).toBe(10);
			expect(list.tail.val).toBe(10);
		});

		test(`should set the correct next and prev pointers on all the nodes in the list`, () => {
			const firstNode = listOfThreeItems.head;
			const secondNode = listOfThreeItems.head.next;
			const thirdNode = listOfThreeItems.head.next.next;

			expect(firstNode.val).toBe(10);
			expect(secondNode.val).toBe(20);
			expect(thirdNode.val).toBe(30);
			expect(thirdNode.next).toBe(null);

			expect(thirdNode.prev).toBe(secondNode);
			expect(secondNode.prev).toBe(firstNode);
			expect(firstNode.prev).toBe(null);
		});

		test(`should increment the length by 1`, () => {
			expect(list.length).toBe(0);
			list.push(10);

			expect(list.length).toBe(1);

			list.push(20);
			list.push(30);

			expect(list.length).toBe(3);
		});

		test(`should return the list`, () => {
			expect(list.push(10)).toBe(list);
		});
	});
	// POP
	describe('pop()', () => {
		test('should return undefined on empty list ', () => {
			expect(list.pop()).toBe(undefined);
		});

		test('should return poped node value', () => {
			const lastNode = listOfThreeItems.tail;
			expect(listOfThreeItems.pop()).toBe(lastNode.val);
		});

		test('should remove the last item in the list', () => {
			list.push(10);
			list.push(20);
			list.push(30);
			list.pop();

			const items = [list.head.val, list.head.next.val];

			expect(items).toStrictEqual([10, 20]);
			expect(list.head.next.next).toBe(null);
		});

		test('should set head and tail to null on a list with one item', () => {
			list.push(10);
			list.pop();

			expect(list.head).toBe(null);
			expect(list.tail).toBe(null);
		});

		test('should decrement the list length by 1', () => {
			listOfThreeItems.pop();

			expect(listOfThreeItems.length).toBe(2);
		});

		test('should not decrement the list length below 0', () => {
			list.pop();
			expect(list.length).toBe(0);
		});
	});

	// SHIFT
	describe('shift()', () => {
		test('should return undefined on an empty list', () => {
			expect(list.shift()).toBe(undefined);
		});

		test('should return the the removed node value', () => {
			const firstNode = listOfThreeItems.head;
			expect(listOfThreeItems.shift()).toBe(firstNode.val);
		});

		test('should remove the first node in the list', () => {
			const secondNode = listOfThreeItems.head.next;
			listOfThreeItems.shift();

			expect(listOfThreeItems.head).toBe(secondNode);
		});

		test('should set head.prev to null on the first node in the list', () => {
			listOfThreeItems.shift();

			expect(listOfThreeItems.head.prev).toBe(null);
		});

		test('should remove all node pointers on the removed node', () => {
			const removedNode = listOfThreeItems.head;
			listOfThreeItems.shift();

			expect(removedNode.prev).toBe(null);
			expect(removedNode.next).toBe(null);
		});

		test('should set head and tail to null on a list with one item', () => {
			list.push(10);
			list.shift();

			expect(list.head).toBe(null);
			expect(list.tail).toBe(null);
		});

		test('should decrement the list length by 1', () => {
			listOfThreeItems.shift();

			expect(listOfThreeItems.length).toBe(2);
		});

		test('should not decrement the list length below 0', () => {
			list.shift();
			expect(list.length).toBe(0);
		});
	});

	// unshift
	describe('unshift()', () => {
		test(`should set head and tail to the new node on an empty list`, () => {
			list.unshift(10);

			expect(list.head.val).toBe(10);
			expect(list.tail.val).toBe(10);
		});

		test(`should set tail.next to null on an empty list`, () => {
			list.unshift(10);

			expect(list.tail.next).toBe(null);
		});

		test(`should increment the length by 1`, () => {
			expect(list.length).toBe(0);
			list.unshift(10);

			expect(list.length).toBe(1);

			list.unshift(20);
			list.unshift(30);

			expect(list.length).toBe(3);
		});

		test(`should return the list`, () => {
			expect(list.unshift(10)).toBe(list);
		});

		test(`should keep next pointers in the right order`, () => {
			list.unshift(40);
			list.unshift(30);
			list.unshift(20);
			list.unshift(10);

			expect(list.head.val).toBe(10);
			expect(list.head.next.val).toBe(20);
			expect(list.head.next.next.val).toBe(30);
			expect(list.head.next.next.next.val).toBe(40);
			expect(list.head.next.next.next.next).toBe(null);
		});

		test(`should keep prev pointers in the right order`, () => {
			list.unshift(40);
			list.unshift(30);
			list.unshift(20);
			list.unshift(10);

			expect(list.tail.val).toBe(40);
			expect(list.tail.prev.val).toBe(30);
			expect(list.tail.prev.prev.val).toBe(20);
			expect(list.tail.prev.prev.prev.val).toBe(10);
			expect(list.tail.prev.prev.prev.prev).toBe(null);
		});
	});

	describe('get()', () => {
		test(`should return the node corresponding to its index`, () => {
			const firstNode = listOfThreeItems.head;
			const secondNode = listOfThreeItems.head.next;
			const thirdNode = listOfThreeItems.head.next.next;

			expect(listOfThreeItems.get(0)).toBe(firstNode);
			expect(listOfThreeItems.get(1)).toBe(secondNode);
			expect(listOfThreeItems.get(2)).toBe(thirdNode);
		});

		test(`should return null if index is not in list`, () => {
			expect(listOfThreeItems.get(-15)).toBe(null);
			expect(listOfThreeItems.get(15)).toBe(null);
		});
	});

	// SET
	describe('set()', () => {
		test(`should change the value to the node corresponding to its index`, () => {
			listOfThreeItems.set(0, 'a');
			const firstNode = listOfThreeItems.head;
			expect(firstNode.val).toBe('a');

			listOfThreeItems.set(1, 'b');
			const secondNode = listOfThreeItems.head.next;
			expect(secondNode.val).toBe('b');

			listOfThreeItems.set(2, 'c');
			const thirdNode = listOfThreeItems.head.next.next;
			expect(thirdNode.val).toBe('c');
		});

		test(`should return false if index is not found in the list`, () => {
			expect(listOfThreeItems.set(-15, 10)).toBe(false);
			expect(listOfThreeItems.set(15, 10)).toBe(false);
		});

		test(`should return true if index is found in the list`, () => {
			expect(listOfThreeItems.set(0, 10)).toBe(true);
			expect(listOfThreeItems.set(2, 10)).toBe(true);
		});
	});

	// INSERT
	describe('insert()', () => {
		test(`should insert the value to the node corresponding to its index at the right place`, () => {
			listOfThreeItems.insert(1, 'a');
			const firstNode = listOfThreeItems.head;
			const secondNode = listOfThreeItems.head.next;
			const thirdNode = listOfThreeItems.head.next.next;
			const fourthNode = listOfThreeItems.head.next.next.next;

			expect(firstNode.val).toBe(10);
			expect(secondNode.val).toBe('a');
			expect(thirdNode.val).toBe(20);
			expect(fourthNode.val).toBe(30);
		});

		test(`should return false if index is not found in the list`, () => {
			expect(listOfThreeItems.insert(-15, 10)).toBe(false);
			expect(listOfThreeItems.insert(15, 10)).toBe(false);
		});

		test(`should return true if index is found in the list`, () => {
			expect(listOfThreeItems.insert(0, 10)).toBe(true);
			expect(listOfThreeItems.insert(2, 10)).toBe(true);
		});

		test(`should increment the length by 1`, () => {
			expect(list.length).toBe(0);
			list.insert(0, 'a');

			expect(list.length).toBe(1);

			list.insert(1, 'b');
			list.insert(1, 'c');

			expect(list.length).toBe(3);
		});

		test(`should keep next pointers in the right order`, () => {
			listOfThreeItems.insert(1, 'a');

			expect(listOfThreeItems.head.val).toBe(10);
			expect(listOfThreeItems.head.next.val).toBe('a');
			expect(listOfThreeItems.head.next.next.val).toBe(20);
			expect(listOfThreeItems.head.next.next.next.val).toBe(30);
			expect(listOfThreeItems.head.next.next.next.next).toBe(null);
		});

		test(`should keep prev pointers in the right order`, () => {
			listOfThreeItems.insert(1, 'a');

			expect(listOfThreeItems.tail.val).toBe(30);
			expect(listOfThreeItems.tail.prev.val).toBe(20);
			expect(listOfThreeItems.tail.prev.prev.val).toBe('a');
			expect(listOfThreeItems.tail.prev.prev.prev.val).toBe(10);
			expect(listOfThreeItems.tail.prev.prev.prev.prev).toBe(null);
		});
	});

	// REMOVE
	describe('remove()', () => {
		test(`should remove the node corresponding to its index at the right place`, () => {
			listOfThreeItems.remove(1);
			let firstNode = listOfThreeItems.head;
			let secondNode = listOfThreeItems.head.next;
			let thirdNode = listOfThreeItems.head.next.next;

			expect(firstNode.val).toBe(10);
			expect(secondNode.val).toBe(30);
			expect(thirdNode).toBe(null);

			listOfThreeItems.remove(1);
			firstNode = listOfThreeItems.head;
			secondNode = listOfThreeItems.head.next;

			expect(firstNode.val).toBe(10);
			expect(secondNode).toBe(null);
		});

		test(`should return undefined if index is not found in the list`, () => {
			expect(listOfThreeItems.remove(-15)).toBe(undefined);
			expect(listOfThreeItems.remove(15)).toBe(undefined);
		});

		test(`should return the removed node value if index is found in the list`, () => {
			let secondNode = listOfThreeItems.head.next;
			let thirdNode = listOfThreeItems.head.next.next;
			expect(listOfThreeItems.remove(1)).toBe(secondNode.val);
			expect(listOfThreeItems.remove(1)).toBe(thirdNode.val);
		});

		test(`should decrement the length by 1`, () => {
			expect(listOfThreeItems.length).toBe(3);
			listOfThreeItems.remove(0);

			expect(listOfThreeItems.length).toBe(2);

			listOfThreeItems.remove(0);
			listOfThreeItems.remove(0);

			expect(listOfThreeItems.length).toBe(0);
		});

		test(`should keep next pointers in the right order`, () => {
			listOfThreeItems.remove(1);

			expect(listOfThreeItems.head.val).toBe(10);
			expect(listOfThreeItems.head.next.val).toBe(30);
			expect(listOfThreeItems.head.next.next).toBe(null);
		});

		test(`should keep prev pointers in the right order`, () => {
			listOfThreeItems.remove(1);

			expect(listOfThreeItems.tail.val).toBe(30);
			expect(listOfThreeItems.tail.prev.val).toBe(10);
			expect(listOfThreeItems.tail.prev.prev).toBe(null);
		});
	});
});
