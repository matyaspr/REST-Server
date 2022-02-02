const express = require('express');
const cors = require('cors');



class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userRoutes = '/api/user';

        this.middlewares();
        this.routes();
  }


    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use( express.json());
        
    
        //Directorio publico
        this.app.use(express.static('Public'));


    }

    routes() {
        this.app.use( this.userRoutes, require('../Routes/user.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
        console.log(`escuchando en el puerto ${this.port}`);
        });
    }
}


module.exports = Server;
