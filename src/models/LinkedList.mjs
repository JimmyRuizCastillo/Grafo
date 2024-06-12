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
            this.count = this.count + 1
        }
        else{
            let current = this.#head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        
    }
}

export default LinkedList