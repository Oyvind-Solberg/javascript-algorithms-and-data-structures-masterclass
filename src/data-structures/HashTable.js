/**
 * Hash Table
 * Collection of key-value pairs
 *
 * Pros:
 *  - Very fast
 *
 * Cons:
 *
 *
 * Usecase:
 *
 *
 * Big O:
 * - Insertion: O(1)
 * - Deletion:  O(1)
 * - Access:    O(1)
 */

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}
	_hash(key) {
		let total = 0;

		let prime = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * prime + value) % this.keyMap.length;
		}

		return total;
	}
	set(key, value) {
		let index = this._hash(key);

		if (!this.keyMap[index]) this.keyMap[index] = [];
		this.keyMap[index].push([key, value]);

		return index;
	}
	get(key) {
		let index = this._hash(key);

		if (!this.keyMap[index]) return undefined;

		const [, targetValue] = this.keyMap[index].find((item) => item[0] === key);

		return targetValue;
	}
	values() {
		const valuesArray = [];
		this.keyMap.forEach((bucket) => {
			if (bucket) {
				bucket.forEach((item) => {
					if (!valuesArray.includes(item[1])) {
						valuesArray.push(item[1]);
					}
				});
			}
		});

		return valuesArray;
	}
	keys() {
		const keysArray = [];
		this.keyMap.forEach((bucket) => {
			if (bucket) {
				bucket.forEach((item) => {
					if (!keysArray.includes(item[0])) {
						keysArray.push(item[0]);
					}
				});
			}
		});

		return keysArray;
	}
}

exports.HashTable = HashTable;
