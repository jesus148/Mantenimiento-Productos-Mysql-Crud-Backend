
// tipos de datos
import {DataType, DataTypes} from 'sequelize';

// conexion bd
import db from '../db/connection';

// sequelize
// Un modelo es una abstracción que representa una tabla en su base de datos. En Sequelize, es una clase que se extiende. Modelo.

// db.define : definiendo el modelo , recordar que aqui partimos de una bd y una tabla ya creada . En otro proyectos se crea 1 la clase o modelo codigo luego de eso se crea la tabla

 
                    //1 parametro  'producto' name tabla se define en singular pero en la bd sera plural  
const Producto = db.define('producto',{

    // 2 parametro
    // propiedades o campos tabla y sus tipos de datos
    // campos = en la tabla de la bd
    // omitir el id del campo esta fue creado en la bd pero en este clase no se pone pq autocrementado en la bd auto
    // ademas el sequelize lo relaciona automaticamente
    
    name    :{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.DOUBLE
    },
    stock:{
        type:DataTypes.NUMBER
    }
}, //3 parametro , omite la creacion de los campos  createdAt y updatedAt en la tabla
   { 
   createdAt :false,
   updatedAt:false  
 })



export default Producto;