const { PriorityQueue } = require('../data-structures/PriorityQueue');
const { WeightedGraph } = require('../data-structures/WeightedGraph');

/**
 * Dikjstra's shortest path algoritm
 *
 * @Description
 * @param {string} startVertex - The vertex to start from
 * @param {string} endVertex - The vertex to go to
 * @returns {array} - Array of vertices forming the shortest patch
 *
 * Usecase:
 * Finding the shortest path from the startVertex to the endVertex
 *
 */

class WeightedGraphDijkstra extends WeightedGraph {
	dijkstra(startVertex, endVertex) {
		const queue = new PriorityQueue();
		const distances = {};
		const previous = {};
		let smallestVertex;
		let shortestPath = [];

		// Build up initial state
		Object.keys(this.adjacencyList).forEach((vertex) => {
			if (vertex === startVertex) {
				distances[vertex] = 0;
				queue.enqueue(startVertex, 0);
			} else {
				distances[vertex] = Infinity;
				queue.enqueue(vertex, Infinity);
			}

			previous[vertex] = null;
		});

		// as longe as there is something to visit
		while (queue.values.length > 0) {
			smallestVertex = queue.dequeue().value;

			if (smallestVertex === endVertex) {
				// build up path to return at end
				let currentVertex = endVertex;

				while (currentVertex) {
					shortestPath.push(currentVertex);
					currentVertex = previous[currentVertex];
				}

				shortestPath.reverse();

				return shortestPath;
			}

			if (smallestVertex && distances[smallestVertex] !== Infinity) {
				this.adjacencyList[smallestVertex].forEach(
					({ node: neighbor, weigth: neighborDistance }) => {
						// calculating new distance to neighboring node
						const distanceCandidate =
							distances[smallestVertex] + neighborDistance;

						if (distanceCandidate < distances[neighbor]) {
							// updating new smallest distance to neighbor
							distances[neighbor] = distanceCandidate;
							// update previous  How we got to neighbor
							previous[neighbor] = smallestVertex;
							// enqueue in priority queue with new priority
							queue.enqueue(neighbor, distanceCandidate);
						}
					}
				);
			}
		}
	}
}

exports.WeightedGraphDijkstra = WeightedGraphDijkstra;

let graph = new WeightedGraphDijkstra();
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
graph.dijkstra('a', 'e');
