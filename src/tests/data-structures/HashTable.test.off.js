const { HashTable } = require('../../data-structures/HashTable');

describe('HashTable', () => {
	let hashTable;

	beforeEach(() => {
		hashTable = new HashTable();
	});

	// SET
	describe('set()', () => {
		test(`should store the data`, () => {
			hashTable.set('apples', 10);
			expect(
				hashTable.keyMap.find((item) => {
					return (
						Array.isArray(item) && item[0][0] === 'apples' && item[0][1] === 10
					);
				})
			).toStrictEqual([['apples', 10]]);
		});
	});

	// GET
	describe('get()', () => {
		test(`should return the data`, () => {
			hashTable.set('apples', 10);
			expect(hashTable.get('apples')).toStrictEqual(10);
		});

		test(`should return undefined if the item is not in the table`, () => {
			hashTable.set('apples', 10);
			expect(hashTable.get('orange')).toStrictEqual(undefined);
		});
	});

	// VALUES
	describe('values()', () => {
		test(`should return an array of the values in the table`, () => {
			hashTable.set('apples', 10);
			hashTable.set('oranges', 15);
			hashTable.set('pears', 75);
			hashTable.set('bananas', 178);
			expect(hashTable.values()).toStrictEqual([75, 15, 178, 10]);
		});

		test(`should not add duplicate values to the returned array`, () => {
			hashTable.set('apples', 75);
			hashTable.set('oranges', 15);
			hashTable.set('pears', 75);
			hashTable.set('bananas', 178);
			expect(hashTable.values()).toStrictEqual([75, 15, 178]);
		});
	});

	// KEYS
	describe('keys()', () => {
		test(`should return an array of the keys in the table`, () => {
			hashTable.set('apples', 10);
			hashTable.set('oranges', 15);
			hashTable.set('pears', 75);
			hashTable.set('bananas', 178);
			expect(hashTable.keys()).toStrictEqual([
				'pears',
				'oranges',
				'bananas',
				'apples',
			]);
		});
	});
});
