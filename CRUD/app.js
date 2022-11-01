 //se invocan los metodos necesarios para la conexion
var mysql  = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const express = require('express');
const path = require('path');
const app = express();
var cnt = 0;

//conexion
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    port: '3306',
    database: 'musicproject',
    useConnectionPooling:true
});

var addSql = 'INSERT INTO usuarios (email, user, password) VALUES (?,?,?)';
var addSqlParams=new Array(3);
//visualizacion pagina wev
app.use(express.static(path.join(__dirname, 'public')));
//procesamiento de datos
app.post('/posttable', urlencodedParser, function (req, res) {
    addSqlParams[0] = req.body.email;
    addSqlParams[1] = req.body.user;
    addSqlParams[2] = req.body.password;
 //insercion de Datos
   connection.connect();
   connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
        }
    });
   cnt = cnt + 1;
    console.log('insert success!');
    res.end('<a href="./paginainicio.html">Iniciar Sesion</a>');
});

app.listen(8000, () => {
    console.log('server listening at port 8000')
});