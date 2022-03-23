import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductBrand, ProductDescription, ProductPreviewContent} from './styles';


function ProductPreview ({children, productName, productPrice, productBrand, productDescription, productImage, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
           <ProductImage>
             <img src={productImage.previewImage} alt="datsun 240z" width="320" height="184"/>
           </ProductImage>
           <ProductPreviewContent>
           <ProductName>{productName}</ProductName>
           <ProductPrice>${productPrice}</ProductPrice>
           <ProductBrand>{productBrand}</ProductBrand>
           <ProductDescription>{productDescription}</ProductDescription>
           </ProductPreviewContent>
        </ProductPreviewStyles>
  )
}

export default ProductPreview