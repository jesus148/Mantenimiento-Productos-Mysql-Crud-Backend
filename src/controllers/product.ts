


import {Request , Response }from 'express';
import Producto from '../models/producto';



// clase controller para la logica del backend


// obtener productos
export const getProducts = async ( req : Request , res : Response) => {

    // obtiene el listado de productos usando la clasemodelo
    const listProduct = await Producto.findAll();

    // respondiendo cliente
    res.json(
        // mgs:'getProducts'
        listProduct
    )
}



// obtener productos por id
// http://localhost:3000/api/products/1
export const getProduct = async( req : Request , res : Response) => {

    // obteniendo el id del cliente
    const {id} = req.params;

    // buscando el producto por el id o el pk
    const product= await Producto.findByPk(id);

    // si existe
    if(product){
        res.json(product);
    
        // si no existe
    }else{
        // respondiendo al cliente
        res.status(400).json({
            msg:`no existe el producto con el id ${id}`
        })
    }


    // // respondiendo cliente
    // res.json({
    //     mgs:'getProducts',
    //     // id:req.params.id //respondiendo al cliente su id ingresado como parametro
    //     id:id
    // })
}










// delete product por id
export const deleteProduct =async ( req : Request , res : Response) => {

    // obteniendo el id del cliente
    const {id} = req.params;

    // buscando el producto por el id o el pk
    const product= await Producto.findByPk(id);


        // si no existe
        if(!product){
            res.status(404).json({
                msg:`no existe un producto con el id ${id}`
            })
        }else{
            // y si existe lo elimina
            await product.destroy();
            res.json({
                mgs:'producto eliminado correctamente',
            })
        }
    
    // // respondiendo cliente
    // res.json({
    //     mgs:'getProducts',
    //     // id:req.params.id //respondiendo al cliente su id ingresado como parametro
    //     id:id
    // })
}










//agregando producto
export const postProduct = async ( req : Request , res : Response) => {

    // obteniendo el cuerpo del cliente
    const {body} = req;

    // ok
    try{
        // agrega el producto
        await Producto.create(body);
    
        // respondiendo cliente
        res.json({
            mgs:'el producto fue agregado correctamente'
        })
    // error 
    // ejemplo en caso la bd tenga limitado sus validaciones xejemplo el campo name admite solo 45 caracteres a mas seria eror
    }catch(error){
        console.log(error);
        res.json({
            msg:`upps ocurrio un error, comuniquese con soporte`
        })
    }

}







//actualizando producto
export const updatetProduct = async ( req : Request , res : Response) => {

    // obteniendo el cuerpo del cliente
    const {body} = req;

    //obteniendo el parametro del cliente
    const {id} = req.params;

    try{
        
            // buscando el producto por el id o el pk
            const product= await Producto.findByPk(id);
        
            // verifica si existe
            if(product){
                await product.update(body);
                res.json({
                    msg:'el producto fue actualizado con exito'
                })
            }else{
                res.status(404).json({
                    msg:`no existe un producto con el id ${id}`
                })
            }

    }catch(error){
        console.log(error);
        res.json({
            msg:`upps ocurrio un error, comuniquese con soporte`
        })
    }

}