const express = require ('express')
const fs = require('fs')
//fs.readFileSync('./db.json')

const app = express()
let dados =[]

function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'))
}


//receber todos os usuários:
app.get('/users/', function(req,res){
    //const dados = fs.readFileSync('./db.json')
    getDados()    
    res.send(dados)
})

app.get('/users/:id', function(req,res){
    getDados()
    const id = req.params.id
    const usuario = dados.filter(function(item){
        return item.id == id
    })
    
    console.log(usuario)
    res.send(usuario)
})

app.listen(3000, function(){
    console.log("Servidor Online")
})