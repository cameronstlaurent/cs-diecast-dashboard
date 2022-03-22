import React, {useState} from 'react';
import {useNumberFormat} from 'hooks/useNumberFormat';
import {useAddNewProduct} from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import { ProductEditor } from "components/products/ProductEditor";
import ProductPreview from 'assets/images/240z.JPG';

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('230.96')
  const [productDescription, setProductDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }

  function handleProductDescription (description) {
    setProductDescription(description)
  }

  function handleSubmit (e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
  }

      

  if (isWriting) {
    return<h1>Editor feedback component</h1>
  }else{
    return (
      <AddProductStyles  {...props}>
          <ProductEditor 
            productName={productName}
            productPrice={productPrice}
            productDescription={productDescription}
            handleProductDescription={handleProductDescription}    
            productImage={productImage}
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}
            handleSubmit={handleSubmit}
         />

      </AddProductStyles>
    )
  }
}

export default AddProduct