import React from 'react';
import Product from './Product';
import i14 from './image/i14.jpg';
import i12 from './image/i12.jpg';
import s22 from './image/S22Ultra.webp';
import s21 from './image/galaxys21_ultra.jpg';
import m11 from './image/m11.png';
import mp from './image/mp.jpg';


export default function Products() {
    const products = [
        {id:1,name:'iphone 14 pro max' ,photo:i14},
        {id:1,name:'iphone 12 pro max' ,photo:i12},
        {id:1,name:'samsung s22 ultra' ,photo:s22},
        {id:1,name:'samsung s21 ultra' ,photo:s21},
        {id:1,name:'mi 11 ultra' ,photo:m11},
        {id:1,name:'mi 11 pro' ,photo:mp},




    ];
  return (
<>
<div className="container">
    <h2>Welcome to our mobile phone store</h2>
    <div className="row">{
        products.map((product)=> {
            return <Product {...product} key={product.id}/>


        }) }

    </div>

</div>
</> 

)
}
