const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Login_validation')
.then(() => {
    console.log('Database Connection Successful');
}).catch ((err) => {
    console.log('Database Connection Error' + err);
})