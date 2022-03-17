import React from 'react'

import { DashboardPanelHeading, DashboardPanelStyles, DashboardPanelDisplay} from './styles';
import {AddProduct} from 'components/products/widgets/AddProduct';

function AddProductPanel(title, ...props){
    return(
        <DashboardPanelStyles>
            <DashboardPanelHeading>
                <h2>Add a Product</h2>
            </DashboardPanelHeading>
            <DashboardPanelDisplay>
                <AddProduct/>
            </DashboardPanelDisplay>
        </DashboardPanelStyles>
    )
}

export default AddProductPanel