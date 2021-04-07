const { WeightedGraphDijkstra } = require('../../algoritms/Dijkstra');

describe("Dijkstra's shortest path", () => {
	let graph;

	beforeEach(() => {
		graph = new WeightedGraphDijkstra();
		graph.addVertex('a');
		graph.addVertex('b');
		graph.addVertex('c');
		graph.addVertex('d');
		graph.addVertex('e');
		graph.addVertex('f');

		graph.addEdge('a', 'b', 4);
		graph.addEdge('b', 'e', 3);
		graph.addEdge('e', 'f', 1);
		graph.addEdge('a', 'c', 2);
		graph.addEdge('c', 'd', 2);
		graph.addEdge('c', 'f', 4);
		graph.addEdge('d', 'e', 3);
		graph.addEdge('d', 'f', 1);

		// Graph diagram:
		//
		//           4
		//       A ----- B
		//      /         \
		//   2 /           \ 3
		//    /   2     3   \
		//   C ----- D ----- E
		//    \      |      /
		//    4 \   1|    / 1
		//        \  |  /
		//           F
	});

	// ...
	describe('dijkstra()', () => {
		test(`should return shortest path`, () => {
			expect(graph.dijkstra('a', 'e')).toStrictEqual(['a', 'c', 'd', 'f', 'e']);
		});
	});
});
