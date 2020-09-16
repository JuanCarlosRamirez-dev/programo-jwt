const express = require("express"),
      bodyParser = require("body-parser"),
      jwt = require("jsonwebtoken"),
      expressJwt= require("express-jwt"); 

     const app = express();

     //clave para la encriptacion
     const jwtClave = "jwt_programo_key";

     app.use(bodyParser.json());

    // protegemos todo menos el login

    app.use(expressJwt({secret: jwtClave}).unless({path:["/login"]}))

    let usuario ={
        nombre: "usuario",
        clave: "password"
    }

    let noticias = [{
        id: 1,
        titulo: "noticias"
    }]

    app.get('/noticias',function(req,res){
        res.send(noticias);
    })

    app.post('/login',function(req,res){
        if(request.body.nombre == usuario.nombre || request.body.clave ==usuario.clave){
            //crear token
            let token = jwt.sign({
                usuario:"usuario"
            },jwtClave);
            //enviar token
           res.send(token);
        } else{
            res.status(401).end("usuario incorrecto");
        }
})

app.listen(3000,function(){
    console.log("listening on port 3000")
})