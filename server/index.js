const express = require('express')
const bodyParser = require('body-parser')
const path = reuqire('path')
const router = require('./route')

const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json())
app.use('/api/', router);
// app.get('/', function(req, res) {
//     req.body = {
//         username: 'username',
//     }   
// })



app.listen(3000, function() {
    console.log('server now is listing on port 3000')
})