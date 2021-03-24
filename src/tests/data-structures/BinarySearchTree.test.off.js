const { BinarySearchTree } = require('../../data-structures/BinarySearchTree');

describe('BinarySearchTree', () => {
	let BST;
	let BSTOfSevenItems;

	let node10;
	let node20;
	let node30;
	let node40;
	let node50;
	let node60;
	let node70;

	beforeEach(() => {
		BST = new BinarySearchTree();
		BSTOfSevenItems = new BinarySearchTree();

		// BSTOfSevenItems:
		//
		//        40
		//       /  \
		//     20    60
		//    / \    / \
		//   10 30  50 70

		BSTOfSevenItems.insert(40);

		BSTOfSevenItems.insert(20);
		BSTOfSevenItems.insert(60);

		BSTOfSevenItems.insert(30);
		BSTOfSevenItems.insert(50);

		BSTOfSevenItems.insert(10);
		BSTOfSevenItems.insert(70);

		node10 = BSTOfSevenItems.root.left.left;
		node20 = BSTOfSevenItems.root.left;
		node30 = BSTOfSevenItems.root.left.right;
		node40 = BSTOfSevenItems.root;
		node50 = BSTOfSevenItems.root.right.left;
		node60 = BSTOfSevenItems.root.right;
		node70 = BSTOfSevenItems.root.right.right;
	});

	// INSERT
	describe('insert()', () => {
		test('should set the root to the new node on an empty BST', () => {
			BST.insert(10);
			expect(BST.root.value).toBe(10);
		});

		test('should return the BST', () => {
			expect(BST.insert(10)).toBe(BST);
		});

		test('should increment node frequency by 1 if value already exist in the BST', () => {
			BSTOfSevenItems.insert(10);
			expect(BSTOfSevenItems.root.left.left.frequency).toBe(2);
		});

		test(`should sort nodes in the right order`, () => {
			expect(node10.value).toBe(10);
			expect(node20.value).toBe(20);
			expect(node30.value).toBe(30);
			expect(node40.value).toBe(40);
			expect(node50.value).toBe(50);
			expect(node60.value).toBe(60);
			expect(node70.value).toBe(70);

			expect(BSTOfSevenItems.root.right.right.right).toBe(null);
			expect(BSTOfSevenItems.root.left.left.left).toBe(null);
		});
	});

	// FIND
	describe('find()', () => {
		test('should return the node if the value is found in the BST', () => {
			expect(BSTOfSevenItems.find(10)).toBe(node10);
			expect(BSTOfSevenItems.find(20)).toBe(node20);
			expect(BSTOfSevenItems.find(30)).toBe(node30);
			expect(BSTOfSevenItems.find(40)).toBe(node40);
			expect(BSTOfSevenItems.find(50)).toBe(node50);
			expect(BSTOfSevenItems.find(60)).toBe(node60);
			expect(BSTOfSevenItems.find(70)).toBe(node70);
		});

		test('should return undefined if the value is not found in the BST', () => {
			expect(BSTOfSevenItems.find(5)).toBe(undefined);
			expect(BSTOfSevenItems.find(-20)).toBe(undefined);
			expect(BSTOfSevenItems.find(30.75)).toBe(undefined);
			expect(BSTOfSevenItems.find(75)).toBe(undefined);
		});
	});

	// BREADTH FIRST SEARCH
	describe('BFSearch()', () => {
		test('should return an array with all the values sorted by breadth', () => {
			expect(BSTOfSevenItems.BFSearch()).toStrictEqual([
				40,
				20,
				60,
				10,
				30,
				50,
				70,
			]);
		});
	});

	// TRAVERSAL PRE ORDER
	describe('traversalPreOrder()', () => {
		test('should return an array with all the values sorted pre order', () => {
			expect(BSTOfSevenItems.traversalPreOrder()).toStrictEqual([
				40,
				20,
				10,
				30,
				60,
				50,
				70,
			]);
		});
	});

	// TRAVERSAL POST ORDER
	describe('traversalPostOrder()', () => {
		test('should return an array with all the values sorted post order', () => {
			expect(BSTOfSevenItems.traversalPostOrder()).toStrictEqual([
				10,
				30,
				20,
				50,
				70,
				60,
				40,
			]);
		});
	});

	// TRAVERSAL IN ORDER
	describe('traversalInOrder()', () => {
		test('should return an array with all the values sorted in order', () => {
			expect(BSTOfSevenItems.traversalInOrder()).toStrictEqual([
				10,
				20,
				30,
				40,
				50,
				60,
				70,
			]);
		});
	});
});
