import Node from "./Node.mjs"
class LinkedList{
    #head
    count
    constructor(){
        this.#head = null
        this.count = 0
    }

    add(value){
        let node = new Node(value)
        if(this.#head==null){
            this.#head = node
        }
        else{
            let current = this.#head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    traverse(callback){
        let current = this.#head
        while(current){
            callback(current)
            //console.log(current)
            current = current.next
        }
    }

}

export default LinkedList