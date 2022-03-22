import React from 'react'

import { DashboardPanelHeading, DashboardPanelStyles, DashboardPanelDisplay} from './styles';

import {ProductCard} from "components/ProductCard";

function AllProductsPanel  (title, ...props){
    return(
        <DashboardPanelStyles>
            <DashboardPanelHeading>
                    <h2>Product Listings</h2>
            </DashboardPanelHeading>
            <DashboardPanelDisplay>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </DashboardPanelDisplay>
        </DashboardPanelStyles>
    )
}

export default AllProductsPanel