
// clase Server que encapsula la lógica para crear y lanzar un servidor Express en el puerto 3001. Al instanciar esta clase y llamar al método listen(), el servidor comenzará a escuchar conexiones entrantes y mostrará un mensaje en la consola.

import express, { Application  , Request , Response} from 'express';
import routeProduts from '../routes/product';
import db from  '../db/connection'
import cors from 'cors';


class Server {

    // instancia de la aplicación Express.
    private app : Application;
    // para el puerto 
    private port : string ;




    // inicia
    constructor(){

        // esto sera un proyecto con express
        this.app= express();

        // inicializando el puerto con el or
        //process.env.PORT : valor que generalmente se establece en el entorno en el que se ejecuta la aplicación. Puede ser configurado por el sistema operativo o por un servicio de hosting , esto se configura primero
        // '3001': Este es el valor por defecto esto es para puertos de desarollo osea local
        this.port = process.env.PORT || '3001';


        // escucha puerto
        this.listen();

        // ejcuta para parser data al cliente
        this.midlewares();


        // ejecuta los endpoints
        this.routes();



        this.dbConnect();
        

    }







    // metodo ejecuta la aplicacion en un puerto 
    listen(){
        this.app.listen( this.port , ()=>{
            console.log(` aplicacion ejecutandose en el puerto ${this.port}`)
        })
    }








    // para routear las rutas de los endpoints
    routes(){



        // ruta defrente o de manera directa usar el this.app.get 
        this.app.get('/' , (req : Request, res : Response) =>{
            res.json({
                msg:'api - working' 
            })
        })  


        // cuando usas routes usar el this.app.use
        // cualquier solociutd de  '/api/products'  lo maneja el router routeProduts
        this.app.use( '/api/products' , routeProduts);

        
    }





    // metodo parsea data
    midlewares() {

        // Parseamos el body pa retornar al cliente
        this.app.use(express.json());

        //para usar los cors diferencia o usar el front junto con le back
        this.app.use(cors());
    }





    // metodo para conectar a bd
    async dbConnect(){
        // ok
        try{  
            // db.authenticate() 
            // realiza una simple consulta para verificar que la base de datos está accesible y que las credenciales proporcionadas (nombre de la base de datos, usuario, contraseña) son correctas.         
            await db.authenticate();
            console.log('base de datos conectada');
        // error
        }catch(error){
            console.log(error);
            console.log("error al conectarse en la bd")
        }
    }






}




// exportando por default
export default Server;