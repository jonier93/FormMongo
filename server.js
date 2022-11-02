import ex from 'express'
import path from 'path'

const app = ex()
const dirBackend = path.resolve()
const dirFrontend = path.join(dirBackend, "../frontend")

app.listen('5000', function(pet, res){
    console.log("Servidor iniciado")
})

app.use(ex.static("../frontend"))

app.get('/', function(pet, res){
    res.sendFile(dirFrontend + "/homePage.html")
})

app.post('/consultar', (pet, res)=> {
    console.log("Consultando")
    let datos = pet.body
    console.log(datos)
})