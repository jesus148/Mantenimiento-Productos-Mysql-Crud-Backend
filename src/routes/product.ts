


import {Router} from 'express';
// importando metodos controller 
import { deleteProduct, getProduct, getProducts, postProduct, updatetProduct } from '../controllers/product';

const router = Router();


// clase router para que mapee 



// obtener productos
// http://localhost:3000/api/products---- get
router.get('/' , getProducts)




// obtener producto por id
// :id' : es el parametro de cliente 
// http://localhost:3000/api/products/1 ---get
router.get('/:id' , getProduct)



// eliminando producto por id
http://localhost:3000/api/products/5  ----delete
router.delete('/:id' , deleteProduct)



// post agregando 
// http://localhost:3000/api/products--post
// body>raw>json
// {
//     "name":"coca cola",
//     "description":"bebida con coca cola",
//     "price":"5",
//     "stock":"100"
// }   
router.post('/' , postProduct)





// metodo para actulizar , recordar siempre poner el id debe ser igual en el endpoint(parametro) y el objeto su id aveces compara
// http://localhost:3000/api/products/5  ----put
// body > raw > json
// {
//     "id":5,
//     "name":"coca cola",
//     "description":"bebida con coca cola",
//     "price":"5",
//     "stock":"100"
// }       
router.put('/:id',updatetProduct)




// exportando pa usar en el server
export default router;