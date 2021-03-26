const { Graph } = require('../../data-structures/Graph');

describe('Graph', () => {
	let graph;
	let graphOf3Items;
	let vertex1;
	let vertex2;
	let vertex3;

	beforeEach(() => {
		graph = new Graph();
		graphOf3Items = new Graph();

		graphOf3Items.addVertex('a');
		graphOf3Items.addVertex('b');
		graphOf3Items.addVertex('c');

		vertex1 = graphOf3Items.adjacencyList.a;
		vertex2 = graphOf3Items.adjacencyList.b;
		vertex3 = graphOf3Items.adjacencyList.c;
	});

	// ADD VERTEX
	describe('addVertex()', () => {
		test(`should add the vertex to the adjecency list`, () => {
			graph.addVertex('a');
			expect(graph.adjacencyList).toStrictEqual({ a: [] });

			graph.addVertex('b');
			graph.addVertex('c');
			expect(graph.adjacencyList).toStrictEqual({
				a: [],
				b: [],
				c: [],
			});
		});

		test(`should ignore duplicate vertices`, () => {
			graph.addVertex('a');
			graph.addVertex('a');
			expect(graph.adjacencyList).toStrictEqual({ a: [] });
		});
	});

	// ADD EDGE
	describe('addEdge()', () => {
		test(`should add the edge to the two vertices`, () => {
			graphOf3Items.addEdge('a', 'b');

			expect(graphOf3Items.adjacencyList).toStrictEqual({
				a: ['b'],
				b: ['a'],
				c: [],
			});

			graphOf3Items.addEdge('c', 'b');

			expect(graphOf3Items.adjacencyList).toStrictEqual({
				a: ['b'],
				b: ['a', 'c'],
				c: ['b'],
			});
		});
	});

	// REMOVE EDGE
	describe('removeEdge()', () => {
		test(`should remove the edge to the two vertices`, () => {
			graphOf3Items.addEdge('a', 'b');
			graphOf3Items.addEdge('c', 'b');
			graphOf3Items.removeEdge('a', 'b');

			expect(graphOf3Items.adjacencyList).toStrictEqual({
				a: [],
				b: ['c'],
				c: ['b'],
			});
		});
	});

	// REMOVE VERTEX
	describe('removeVertex()', () => {
		test(`should remove the vertex and all its edges`, () => {
			graphOf3Items.addEdge('a', 'b');
			graphOf3Items.addEdge('c', 'b');
			graphOf3Items.removeVertex('b');

			expect(graphOf3Items.adjacencyList).toStrictEqual({
				a: [],
				c: [],
			});
		});
	});

	// DF SEARCH
	describe('DFSearch()', () => {
		test(`should return all the vertices debth first`, () => {
			graphOf3Items.addEdge('a', 'b');
			graphOf3Items.addEdge('a', 'c');
			graphOf3Items.addEdge('b', 'c');
			expect(graphOf3Items.DFSearch('b')).toStrictEqual(['b', 'a', 'c']);
		});
	});

	// BF SEARCH
	describe('BFSearch()', () => {
		test(`should return all the vertices bredth first`, () => {
			graphOf3Items.addEdge('a', 'b');
			graphOf3Items.addEdge('a', 'c');
			graphOf3Items.addEdge('b', 'c');
			expect(graphOf3Items.BFSearch('b')).toStrictEqual(['b', 'a', 'c']);
		});
	});
});
