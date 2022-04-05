import React from 'react';

import {ProductCardStyles, ProductCardContent} from './styles'


function ProductCard ({children, product, ...props})  {
const {productName, productPrice, productBrand, imageUrl, productDescription} = {...product}
  return (
        <ProductCardStyles  {...props}>
           <img className="card-img" src={imageUrl} alt="Datsun 240z" />
                    <ProductCardContent>
                            <h3>{productName}</h3>
                            <h4>{productBrand}</h4>
                            <h4>${productPrice}</h4>
                            <p>{productDescription}</p>
                    </ProductCardContent>
        </ProductCardStyles>
  )
}

export default ProductCard