const { SinglyLinkedList } = require('./app');

describe('SinglyLinkedList', () => {
	let list;
	let listOfThreeItems;

	beforeEach(() => {
		list = new SinglyLinkedList();

		listOfThreeItems = new SinglyLinkedList();
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

		test(`should keep head as the first node in the list`, () => {
			expect(listOfThreeItems.head.val).toBe(10);
		});

		test(`should keep tail as the last node in the list`, () => {
			expect(listOfThreeItems.tail.val).toBe(30);
		});

		test(`should keep items in the list in the right order`, () => {
			list.push(10);
			list.push(20);
			list.push(30);
			list.push(40);
			list.push(50);

			expect(list.head.next.val).toBe(20);
			expect(list.head.next.next.next.val).toBe(40);
		});
	});

	// POP
	describe('pop()', () => {
		test('should return undefined on empty list ', () => {
			expect(list.pop()).toBe(undefined);
		});

		test('should return poped node', () => {
			const lastNode = listOfThreeItems.tail;
			expect(listOfThreeItems.pop()).toBe(lastNode);
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
			gf;
		});
	});
});
