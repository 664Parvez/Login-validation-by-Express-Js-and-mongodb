require('dotenv').config()
require('./db/db_connect')
const app = require('./app')

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`This server is running at http://localhost:${PORT}`);
})
