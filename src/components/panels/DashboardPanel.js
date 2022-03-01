import React from 'react'
import { DashboardPanelHeading, DashboardPanelStyles, DashboardPanelText, DashboardPanelDisplay } from './styles'
import {Button} from './../../ui/buttons'

function DashboardPanel  (props){
    return(
        <DashboardPanelStyles>
            <DashboardPanelHeading>
                <DashboardPanelText>
                    Product Listings
                </DashboardPanelText>
                <Button>Add Product</Button>
            </DashboardPanelHeading>
            <DashboardPanelDisplay>
            </DashboardPanelDisplay>
        </DashboardPanelStyles>
    )
}

export default DashboardPanel