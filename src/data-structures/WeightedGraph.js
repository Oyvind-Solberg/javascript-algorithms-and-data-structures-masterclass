const { Queue } = require('./Queue');
const { Graph } = require('./Graph');

/**
 * Weighted Graph
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

class WeightedGraph extends Graph {
	addEdge(vertex1, vertex2, weigth) {
		this.adjacencyList[vertex1].push({ node: vertex2, weigth });
		this.adjacencyList[vertex2].push({ node: vertex1, weigth });
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(item) => item.node !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(item) => item.node !== vertex1
		);
	}
	removeVertex(vertex) {
		this.adjacencyList[vertex].forEach((currentVertex) =>
			this.removeEdge(vertex, currentVertex.node)
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
				if (!visited[neighbor.node]) traverse(neighbor.node);
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
				if (!visited[neighbor.node]) {
					visited[neighbor.node] = true;
					queue.enqueue(neighbor.node);
				}
			});
		}

		return results;
	}
}

exports.WeightedGraph = WeightedGraph;
