import React from 'react'; 
import HelloWorldStyle from './hello-world.css';
import useProduct from 'vtex.product-context/useProduct';


const HelloWorld = (props : any) => {

    const { product }:any= useProduct();

    product.items //Trae los Sku del producto.  

    return (<div className={HelloWorldStyle.init}>{product.description} &#9996;</div>)
} 

export default HelloWorld;

