import React from 'react'

import {useGetProducts} from "hooks/useGetProduct";

import { DashboardPanelHeading, DashboardPanelStyles, DashboardPanelDisplay} from './styles';
import {ProductCard} from "components/ProductCard";

function AllProductsPanel  (title, ...props){

    const productData = useGetProducts()
    

    return(
        <DashboardPanelStyles>
            <DashboardPanelHeading>
                    <h2>Product Listings</h2>
            </DashboardPanelHeading>
            <DashboardPanelDisplay>

                    {productData? productData.map(product=><ProductCard key={product.uid} product={product}/>) :<p>there is no data</p>}
            </DashboardPanelDisplay>
        </DashboardPanelStyles>
    )
}

export default AllProductsPanel