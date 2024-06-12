import Graph from "../models/Graph.mjs";

//let a = new Map()

let g = new Graph(3)
g.addVertices("A","B","C")
//g.addV("H")
//g.addV("I")

g.addConexion("A","B")
//g.addConexion("A","G")
g.addConexion("A","C")
//g.addConexion("A","D",8)
//g.addConexion("B","E",9)
//g.addConexion("B","F",10)
//g.addConexion("D","F",11)
//g.addConexion("E","G",12)
//g.addConexion("G","H")
//g.addConexion("G","I")

//a.set("123",234)

//console.log(a.get("123"))
/*const callback = (val) => {
    console.log(val);
}
*/
/*
g.printMatriz((a)=>{
    console.log(a)
})
*/
g.printMap((value,key)=>{
    console.log(key)
    value[1].traverse((a)=>{
        console.log(a)
    })
})
//g.bfs(callback)