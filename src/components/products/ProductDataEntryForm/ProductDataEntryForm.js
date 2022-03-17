import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductDescription, ProductName, ProductPrice} from './styles'
import {Label, Input} from 'ui/forms'
import {TextArea} from 'ui/forms/textarea'
import {ProductImageDropBox} from '../ProductImageDropBox';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
           <ProductImage>
              <Label>Product Image</Label>
              <ProductImageDropBox setProductImage={setProductImage}/>
           </ProductImage>
            <fieldset>
           <ProductName>
              <Label>Product Name</Label>
              <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
           </ProductName>

           <ProductPrice>
              <Label>Product Price</Label>
              <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
           </ProductPrice>
           </fieldset>
              
           <ProductDescription>
              <Label>Product Description</Label>
              <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} rows={6}/>
           </ProductDescription>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm