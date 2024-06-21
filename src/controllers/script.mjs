import Graph from "../models/Graph.mjs";
let g = new Graph(6)
let comboOrigin = document.getElementById("comboCityOrigin")
let comboCityAddDestiny = document.getElementById("comboCityAddDestiny")
let btnCheck = document.getElementById("btnCheck")
let btnValidateAdd = document.getElementById("btnValidateAdd")

g.addVertices("Polleria","Farmacia","Ferreteria","Zapateria","Licoreria","Floreria")

g.addConexion("Polleria","Zapateria",5)
g.addConexion("Polleria","Farmacia",3)
g.addConexion("Farmacia","Licoreria",2)
g.addConexion("Farmacia", "Zapateria",7)
g.addConexion("Zapateria","Ferreteria",11)
g.addConexion("Ferreteria", "Floreria",6)


fillComboBox(comboOrigin)
fillComboBox(comboCityAddDestiny)

function fillComboBox(comboBox){
    comboBox.innerHTML=""
    g.getMap().keys().forEach((key) => {
        let option = document.createElement('option')
        option.textContent = key
        comboBox.appendChild(option)
        })
}

btnCheck.addEventListener("click",()=>{
    let rutas = []
    let showRute = document.getElementById("showRutes")
    showRute.innerHTML=""
    addRutes(rutas)
    rutas.forEach((value)=>{
        let txtRute = document.createElement("h3")
        txtRute.textContent = "Ruta: " + value
        showRute.appendChild(txtRute)
    })
})

function addRutes(rutas){
    g.dfs(comboOrigin.value,(a)=>{
        rutas.push(a)
    })
}

btnValidateAdd.addEventListener("click",()=>{
    let newLocal = document.getElementById("inputAddLocal").value
    let endLocal = document.getElementById("comboCityAddDestiny").value
    let distanceLocal = document.getElementById("inputAddDistancia").value
    g.addV(newLocal)
    g.addConexion(newLocal,endLocal,distanceLocal)
    fillComboBox(comboOrigin)
    fillComboBox(comboCityAddDestiny)
    console.log(g.getMap())

    console.log(g.getList())
})


const resultado = g.dijkstra('Polleria');
console.log(resultado.distancias);
console.log(resultado.predecesores);


//g.dfs('Tuxtla')

console.log(g.getMap())

console.log(g.getList())