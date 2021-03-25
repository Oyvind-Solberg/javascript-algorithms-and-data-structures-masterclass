const { MaxHeap } = require('../../data-structures/MaxHeap');

describe('MaxHeap', () => {
	let maxHeap;
	let maxHeap15Items;

	beforeEach(() => {
		maxHeap = new MaxHeap();

		// maxHeap15Items:
		//
		//               150
		//              /   \
		//           /         \
		//        140	          130
		//       /  \		        /  \
		//    120    90	     110    100
		//    / \    / \     / \    / \
		//   80 50  40 20	  70 30  10 60

		maxHeap15Items = new MaxHeap([
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
	});

	// INSERT
	describe('insert()', () => {
		test('should insert the value in the right order', () => {
			maxHeap15Items.insert(145);
			expect(maxHeap15Items.values).toStrictEqual([
				150,
				145,
				130,
				140,
				90,
				110,
				100,
				120,
				50,
				40,
				20,
				70,
				30,
				10,
				60,
				80,
			]);

			maxHeap.insert(45);
			expect(maxHeap.values).toStrictEqual([45]);

			maxHeap.insert(85);
			maxHeap.insert(20);
			maxHeap.insert(40);
			expect(maxHeap.values).toStrictEqual([85, 45, 20, 40]);
		});

		test('should return the heap', () => {
			expect(maxHeap.insert(45)).toBe(maxHeap);

			maxHeap.insert(85);
			maxHeap.insert(20);
			expect(maxHeap.insert(40)).toBe(maxHeap);
		});
	});

	// EXTRACT MAX
	describe('extractMax()', () => {
		test('should keep the values in the right order', () => {
			const heapOneItem = new MaxHeap([45]);
			const heapTwoItems = new MaxHeap([45, 35]);
			const heapThreeItems = new MaxHeap([45, 35, 20]);
			const heapFourItems = new MaxHeap([45, 20, 35, 10]);

			heapOneItem.extractMax();
			expect(heapOneItem.values).toStrictEqual([]);

			heapTwoItems.extractMax();
			expect(heapTwoItems.values).toStrictEqual([35]);

			heapThreeItems.extractMax();
			expect(heapThreeItems.values).toStrictEqual([35, 20]);

			heapFourItems.extractMax();
			expect(heapFourItems.values).toStrictEqual([35, 20, 10]);

			maxHeap15Items.extractMax();
			expect(maxHeap15Items.values).toStrictEqual([
				140,
				120,
				130,
				80,
				90,
				110,
				100,
				60,
				50,
				40,
				20,
				70,
				30,
				10,
			]);
		});

		test('should return the removed value', () => {
			const heapOneItem = new MaxHeap([45]);

			expect(heapOneItem.extractMax()).toBe(45);
			expect(maxHeap15Items.extractMax()).toBe(150);
		});

		test('should return undefined on an empty heap', () => {
			expect(maxHeap.extractMax()).toBe(undefined);
		});
	});
});
