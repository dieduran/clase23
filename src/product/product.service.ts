import { Injectable} from '@nestjs/common';

import {Product} from '../interfaces/product.interface';

@Injectable()
export class ProductService {
    private readonly products: Product[]= [];
    createProduct(product: Product){
        this.products.push(product);
    }

    findAll(): Product[]{
        return this.products;
    }

    async findOne(productoId: string): Promise<Product>{
        let salida=  await this.products.find( obj=>(obj.id=== parseInt(productoId)))
        if (!salida){
            return undefined
        }else{
            return salida
        }
    }

    async deleteProduct(productoId: string): Promise<Product>{
        let encontro=false
        let salida
        for (let i=0; i< this.products.length;i++)
        {   
            if(parseInt(productoId)===this.products[i].id){
                encontro=true
                salida=this.products[i]
                this.products.splice(i,1) //eliminamos la aparicion, deberia ser la unica
            } 
        }
        if(!encontro){
            return undefined
        }
        else{
            return salida
        }
    }

}
