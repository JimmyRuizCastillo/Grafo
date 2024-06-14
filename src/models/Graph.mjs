import LinkedList from "./LinkedList.mjs"
import Vertex from "./Vertex.mjs"
export default class Graph {
    #listaAdyacencia = []
    #map = new Map()

    constructor() {}

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#listaAdyacencia.push(new LinkedList())
            this.#map.set(value,this.#listaAdyacencia.length-1)
        }
    }

    addV(value) {
        this.#listaAdyacencia.push(new LinkedList())
        this.#map.set(value,this.#listaAdyacencia.length-1)
    }

    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].add(new Vertex(end,weight))
            this.#listaAdyacencia[this.#map.get(end)].add(new Vertex(start,weight))
            return true
        }
        return false;
    }

    dfs(start,end) {
        let visited = []
        let stack = []
      
        visited.push(start)
        stack.push(start)
      
        while (stack.length > 0) {
          let current = stack.pop()
          let index = this.#map.get(current)
          let currentNode = this.#listaAdyacencia[index].head
          if(current == end){
            return;
          }
          while (currentNode) {
            if (!visited.includes(currentNode.value.value)) {
              visited.push(currentNode.value.value)
              stack.push(currentNode.value.value)
            }
            currentNode = currentNode.next
          }
        }
      }
    
    bfs(callback){
        let queue = []
        let list = []
        const entries = [...structuredClone(this.#map)]
        for (let i=0; i<this.#listaAdyacencia.length;i++)
            list[i] = false
        
        let [value] = entries[0]
        queue.push(value)
        
        while (queue.length > 0) {
            let val = queue.shift() //Sacamos el primer elemento de la cola
            callback(val) //Imprimimos el valor
            list[this.#map.get(val)] = true //Marcamos de visitado
            for (let i=0;i<this.#listaAdyacencia[this.#map.get(val)].length;i++) {
                if (this.#listaAdyacencia[this.#map.get(val)][i]){
                    let [key] = entries[i]
                    if (!list[this.#map.get(key)] && !queue.includes(key)) 
                        queue.push(key) //Agregamos los vecinos a la cola
                }
            }
        }

    }
    
    getMap(){
        return this.#map
    }

    getList(){
        return this.#listaAdyacencia
    }
}