import {useState, useEffect} from 'react'
import {ref, get} from 'firebase/database'

import {db} from 'libs/firebase'
function useGetProducts(){
    const [productData, setProductData] = useState(null)

   useEffect(()=>{
        async function getProductData(){
         // firebase RTD get set the productData state
         const productRef = ref(db, 'products')
         const productDataSnapShot = await get(productRef)
         console.log(productDataSnapShot.val())
         setProductData(Object.values(productDataSnapShot.val()))
         }
         getProductData()
    },[])

    return productData

}

export {useGetProducts}