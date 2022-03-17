import React from 'react'

import { DashboardPanelHeading, DashboardPanelStyles, DashboardPanelDisplay} from './styles';


function EditProductPanel(title, ...props){
    return(
        <DashboardPanelStyles>
            <DashboardPanelHeading>
                <h2>Edit a Product</h2>
            </DashboardPanelHeading>
            <DashboardPanelDisplay>
            </DashboardPanelDisplay>
        </DashboardPanelStyles>
    )
}

export default EditProductPanel