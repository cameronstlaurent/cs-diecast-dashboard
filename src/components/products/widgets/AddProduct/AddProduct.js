import React, {useState} from 'react';
import {useNumberFormat} from 'hooks/useNumberFormat';
import {useAddNewProduct} from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import { ProductEditor } from "components/products/ProductEditor";
import {EditorFeedBack} from 'components/products/EditorFeedBack';
import ProductPreview from 'assets/images/240z.JPG';

const defaults={
   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
   name: "Product Name",
   price: 230.96,
   brand: "Product Brand"
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productBrand, setProductBrand] = useState(defaults.brand)
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
  const formatter = useNumberFormat()

  function handleProductName (name){
    setProductName(name)
  }

  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }

  function handleProductBrand (brand){
    setProductBrand(brand)
  }

  function handleProductDescription (description) {
    setProductDescription(description)
  }

  function handleSubmit (e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription,
      productBrand
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
    setProductBrand(defaults.brand)
    setProductDescription(defaults.description)
  }

      

  if (isWriting) {
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
  }else{
    return (
      <AddProductStyles  {...props}>
          <ProductEditor 
            productName={productName}
            productPrice={productPrice}
            productBrand={productBrand}
            productDescription={productDescription}
            handleProductDescription={handleProductDescription}    
            productImage={productImage}
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            handleProductBrand={handleProductBrand}
            setProductImage={setProductImage}
            handleSubmit={handleSubmit}
         />

      </AddProductStyles>
    )
  }
}

export default AddProduct