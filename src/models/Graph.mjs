import LinkedList from "./LinkedList.mjs"
import Vertex from "./Vertex.mjs"
export default class Graph {
    #matrizAdyacencia = []
    #map = new Map()

    constructor() {}

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#matrizAdyacencia.push([])
            this.#map.set(value,[this.#matrizAdyacencia.length-1,new LinkedList()])
        }
    }

    printMatriz(callback){
        for (let index = 0; index < this.#matrizAdyacencia.length; index++) {
            let row=""
            for (let j = 0; j < this.#matrizAdyacencia.length; j++) {
                row+=this.#matrizAdyacencia[index][j] + " "
            }
            callback(row)
        }
    }

    printMap(callback){
        this.#map.forEach((value,key)=>{
            callback(value,key)
        })
    }
    

    addV(value) {
        this.#matrizAdyacencia.push([])
        this.#map.set(value,[this.#matrizAdyacencia.length-1,new LinkedList()])
    }

    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#matrizAdyacencia[this.#map.get(start)[0]][this.#map.get(end)[0]] = weight
            this.#matrizAdyacencia[this.#map.get(end)[0]][this.#map.get(start)[0]] = weight
            this.#map.get(start)[1].add(new Vertex(end,weight))
            return true
        }
        return false;
    }

    bfs(callback){
        let queue = []
        let list = []
        const entries = [...structuredClone(this.#map)];
        for (let i=0; i<this.#matrizAdyacencia.length;i++)
            list[i] = false
        
        let [value] = entries[0]
        queue.push(value)
        
        while (queue.length > 0) {
            let val = queue.shift() //Sacamos el primer elemento de la cola
            callback(val) //Imprimimos el valor
            list[this.#map.get(val)] = true //Marcamos de visitado
            for (let i=0;i<this.#matrizAdyacencia[this.#map.get(val)].length;i++) {
                if (this.#matrizAdyacencia[this.#map.get(val)][i]){
                    let [key] = entries[i]
                    if (!list[this.#map.get(key)] && !queue.includes(key)) 
                        queue.push(key) //Agregamos los vecinos a la cola
                }
            }
        }

    }

}