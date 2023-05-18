const express = require('express')
const app = express()
const cors = require('cors')
const { agregarPost, getPosts, eliminarPost } = require('./pictures')

app.listen(3002, console.log("!Servidor encendido con éxito¡"))

app.use(express.json())
app.use(cors())


app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send('!Posts publicado con éxito¡')
})

app.get('/posts', async (req, res) => {
    const consulta = await getPosts()
    res.json(consulta)
})


app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    await eliminarPost(id);
    res.send('¡Post eliminado con éxito!');
})