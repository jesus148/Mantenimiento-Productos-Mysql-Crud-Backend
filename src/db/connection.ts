
import {Sequelize} from 'sequelize';

// conexion bd
// https://sequelize.org/docs/v6/getting-started/ -- documentacion >getting started> Connecting to a database >elegi 3 option

// 'almacen', 'root' ,  'admin123' : bd , usuario y contraseña respectivamente

const sequelize = new Sequelize('almacen', 'root' ,  '1977' ,{
    host: 'localhost' ,  //hosting local
    dialect : 'mysql'   //tu bd
    // , logging:false --- pa quitar Executing (default): SELECT 1+1 AS result > en la consola para quitar
});

// exportando
export default sequelize;