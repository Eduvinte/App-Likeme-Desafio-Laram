const { Pool } = require('pg')

const pool = new Pool({
    localhost: 'localhost',
    user: 'postgres',
    password: '689101101024Edu',
    database: 'likeme',
    allowExitOnIdle: true
})

const agregarPost = async (titulo, url, descripcion, like) => {
    const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)'
    const values = [titulo, url, descripcion, like]
    const result = pool.query(consulta, values)
    console.log('Posts agregado con éxito')
}

const getPosts = async () => {
    const { rows } = await pool.query('SELECT * FROM posts')
    return rows 
}

const eliminarPost = async (req, res) => {
    const { id } = req.params
    const consult = 'DELETE FROM posts WHERE id = $1';
    const values = [id];
    await pool.query(consult, values);
}



module.exports = { agregarPost, getPosts, eliminarPost }





