const { Queue } = require('./Queue');

/**
 * Graph
 *
 * Description:
 * Collection of node / connections pairs
 *
 * Terminology:
 * - Vertex: A node
 * - Edge: Connection between nodes
 * - Weighted/Unweighted: Values assigned to edge / no values
 * - Directed/Undirected: Directions assigned to edge / no directions
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
 * - Insertion:
 * - Removal:
 * - Searching:
 * - Access:
 *
 */

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(item) => item !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(item) => item !== vertex1
		);
	}
	removeVertex(vertex) {
		this.adjacencyList[vertex].forEach((currentVertex) =>
			this.removeEdge(vertex, currentVertex)
		);

		delete this.adjacencyList[vertex];
	}
	DFSearch(vertex) {
		const results = [];
		const visited = {};

		const adjacencyList = this.adjacencyList;

		function traverse(vertex) {
			if (!adjacencyList[vertex].length === 0) {
				return null;
			}

			results.push(vertex);
			visited[vertex] = true;

			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) traverse(neighbor);
			});
		}

		traverse(vertex);

		return results;
	}
	BFSearch(vertex) {
		const queue = new Queue();
		const results = [];
		const visited = {};
		let currentVertex = vertex;

		queue.enqueue(vertex);
		visited[vertex] = true;

		while (queue.size > 0) {
			currentVertex = queue.dequeue();
			results.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.enqueue(neighbor);
				}
			});
		}

		return results;
	}
}

exports.Graph = Graph;
