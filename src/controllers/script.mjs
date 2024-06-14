import Graph from "../models/Graph.mjs";
let g = new Graph(8)
let comboOrigin = document.getElementById("comboCityOrigin")
let comboDestiny = document.getElementById("comboCityDestiny")
let btnCheck = document.getElementById("btnCheck")

g.addVertices("Tuxtla","Cintalapa","Tonala","Arriaga","Chiapa de Corzo","Suchiapa","VillaFlores", "San Cristobal")

g.addConexion("Tuxtla","Cintalapa")
g.addConexion("Tuxtla","San Cristobal")
g.addConexion("Tuxtla","Arriaga",8)
g.addConexion("Tuxtla","Chiapa de Corzo",11)
g.addConexion("Arriaga","Tonala",9)
g.addConexion("Cintalapa","Arriaga",10)


fillComboBox(comboOrigin)
fillComboBox(comboDestiny)

function fillComboBox(comboBox){
    g.getMap().keys().forEach((key) => {
        let option = document.createElement('option')
        option.textContent = key
        comboBox.appendChild(option)
        })
}

btnCheck.addEventListener("click",()=>{
    console.log(g.dfs(comboOrigin.ariaValueMax, comboDestiny.value))
})


//g.dfs('Tuxtla')

//console.log(g.getMap())

//console.log(g.getList())