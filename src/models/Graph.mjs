import LinkedList from "./LinkedList.mjs"
export default class Graph {
    #matrizAdyacencia = []
    #map = new Map()
    #linkedList = new LinkedList()

    constructor() {}

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#matrizAdyacencia.push([])
            this.#map.set(value,this.#matrizAdyacencia.length-1)
        }
    }
    

    addV(value) {
        this.#matrizAdyacencia.push([])
        this.#map.set(value,this.#matrizAdyacencia.length-1)
    }

    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#matrizAdyacencia[this.#map.get(start)][this.#map.get(end)] = weight
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