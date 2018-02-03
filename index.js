var mysql= require('mysql');
 var conexion =mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'conemysql'
 });

 conexion.connect();
 
 conexion.query('select * from alumno', function(error, resultados, campos){
    if (error) {
        console.log('error al ejecutar la consultas', error);
        return;
    } else {
        console.log('lista de alumnos:', resultados);
    }
});
conexion.end(); 