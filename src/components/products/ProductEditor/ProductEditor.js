import React from 'react';

import {ProductDataEntryForm} from "./../ProductDataEntryForm";
import {ProductPreview} from "./../ProductPreview";
import {ProductEditorStyles} from './styles';

function ProductEditor ({children, productName, productPrice, productBrand, productDescription, productImage, handleSubmit, handleProductName, handleProductPrice, handleProductBrand, handleProductDescription, setProductImage, ...props})  {
  console.log(productBrand)
  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm 
           handleProductName={handleProductName}
           handleProductPrice={handleProductPrice}
           handleProductBrand={handleProductBrand}
           handleProductDescription={handleProductDescription}
           setProductImage={setProductImage}
           handleSubmit={handleSubmit}
           />
           <ProductPreview 
           productName={productName}
           productPrice={productPrice}
           productBrand={productBrand}
           productDescription={productDescription}
           productImage={productImage}
           />
        </ProductEditorStyles>
  )
}

export default ProductEditor