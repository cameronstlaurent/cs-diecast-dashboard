import React from 'react';

import {ProductCardStyles, ProductCardContent} from './styles'

import ProductImage from 'assets/images/240z.JPG';

function ProductCard ({children, ...props})  {
  return (
        <ProductCardStyles  {...props}>
           <img className="card-img" src={ProductImage} alt="Datsun 240z" />
                    <ProductCardContent>
                        <h3>Dastun 240z</h3>
                                <h4>Hot Wheels</h4>
                                <h4>$30</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </ProductCardContent>
        </ProductCardStyles>
  )
}

export default ProductCard