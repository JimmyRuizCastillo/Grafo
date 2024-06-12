import Graph from "../models/Graph.mjs";

let g = new Graph(8)
g.addVertices("A","B","C","D","E","F","G")
g.addV("H")
g.addV("I")

g.addConexion("A","B")
g.addConexion("A","C")
g.addConexion("A","D",8)
g.addConexion("B","E",9)
g.addConexion("B","F",10)
g.addConexion("D","F",11)
g.addConexion("E","G",12)
g.addConexion("G","H")
g.addConexion("G","I")

const callback = (val) => {
    console.log(val);
}
g.bfs(callback)


