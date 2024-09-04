

// Este file ejecuta todo 
// Este file se ejecuta osea ejecuta todo EL PORYECTO 
// importa el server
//    > npm run dev  (comando para ejecutar )


import Server from './models/server';
import dotenv from 'dotenv';



// configurmos las variable de ambiente o entorno
// configiguramos dotenv > esto usara el puerto .env
dotenv.config();    




// instancia de server
const server = new Server();




