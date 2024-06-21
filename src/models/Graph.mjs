import LinkedList from "./LinkedList.mjs"
import Vertex from "./Vertex.mjs"
export default class Graph {
    #listaAdyacencia = []
    #map = new Map()

    constructor() { }

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#listaAdyacencia.push(new LinkedList())
            this.#map.set(value, this.#listaAdyacencia.length - 1)
        }
    }

    addV(value) {
        this.#listaAdyacencia.push(new LinkedList())
        this.#map.set(value, this.#listaAdyacencia.length - 1)
    }

    addConexion(start, end, weight = 1) {
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].add(new Vertex(end, weight))
            this.#listaAdyacencia[this.#map.get(end)].add(new Vertex(start, weight))
            return true
        }
        return false
    }

    dfs(start, callback) {
        let visited = []
        this.dfsRecursive(start, callback, visited)
      }
      
      dfsRecursive(current, callback, visited) {
        visited.push(current)
        callback(current)
      
        let index = this.#map.get(current)
        let currentNode = this.#listaAdyacencia[index].head
      
        while (currentNode) {
          if (!visited.includes(currentNode.value.value)) {
            return this.dfsRecursive(currentNode.value.value, callback, visited)
          }
          currentNode = currentNode.next
        }
      
        visited.pop()
      }
      
      
      dijkstra(start) {
        // Inicializar distancias y predecesores
        const distances = new Map()
        const predecessors = new Map()
        // El set solo guarda valores únicos, no permite repeticiones
        const visited = new Set()
      
        // Establecer distancia del vértice de inicio a 0
        distances.set(start, 0)
      
        let unvisitedNodes = new Set(this.#map.keys())
      
        // Mientras haya vértices por visitar
        while (unvisitedNodes.size > 0) {
          // Encontrar el vértice no visitado con distancia mínima
          let currentNode = null
          let currentDistance = Infinity
          for (const node of unvisitedNodes) {
            console.log(node)
            if (!visited.has(node) && (distances.get(node) || Infinity) < currentDistance) {
              currentNode = node
              currentDistance = distances.get(node) || Infinity
            }
          }
      
          // Marcar el vértice actual como visitado
          visited.add(currentNode)
          unvisitedNodes.delete(currentNode)
      
          // Actualizar distancias de los vértices adyacentes
          const currentIndex = this.#map.get(currentNode)
          const currentList = this.#listaAdyacencia[currentIndex]
          
          let currentNode2 = currentList.head
          while (currentNode2 !== null) {
            const neighbor = currentNode2.value
            const distance = (distances.get(currentNode) || 0) + currentNode2.weight
            if (!distances.has(neighbor) || distance < (distances.get(neighbor) || Infinity)) {
              distances.set(neighbor, distance)
              predecessors.set(neighbor, currentNode)
            }
            currentNode2 = currentNode2.next
          }
        }
        // Retorna solo los atributos que uno quiere retornar (Objeto literal)
        return {
          distancias: distances,
          predecesores: predecessors
        }
      }

    bfs(callback) {
        let queue = []
        let list = []
        const entries = [...structuredClone(this.#map)]
        for (let i = 0; i < this.#listaAdyacencia.length; i++)
            list[i] = false

        let [value] = entries[0]
        queue.push(value)

        while (queue.length > 0) {
            let val = queue.shift() //Sacamos el primer elemento de la cola
            callback(val) //Imprimimos el valor
            list[this.#map.get(val)] = true //Marcamos de visitado
            for (let i = 0; i < this.#listaAdyacencia[this.#map.get(val)].length; i++) {
                if (this.#listaAdyacencia[this.#map.get(val)][i]) {
                    let [key] = entries[i]
                    if (!list[this.#map.get(key)] && !queue.includes(key))
                        queue.push(key) //Agregamos los vecinos a la cola
                }
            }
        }

    }

    getMap() {
        return this.#map
    }

    getList() {
        return this.#listaAdyacencia
    }
}