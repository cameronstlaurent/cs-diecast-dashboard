import React from 'react'

import { DashboardPanelHeading, DashboardPanelStyles, DashboardPanelText, DashboardPanelDisplay, DashboardPanelCard, DashboardPanelCardHeading,DashboardPanelCardContent, DashboardPanelCardPriceMake, DashboardPanelCardDescription} from './styles';

import {Button} from './../../ui/buttons';

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
                <DashboardPanelCard>
                    <img class="card-img" src="images/240z.jpg" alt="the CS Diecast logo" />
                    <DashboardPanelCardContent>
                    <DashboardPanelCardHeading>
                            Dastun 240z
                    </DashboardPanelCardHeading>
                    <DashboardPanelCardPriceMake>
                            <p>Hot Wheels</p>
                            <p>$30</p>
                    </DashboardPanelCardPriceMake>
                    <DashboardPanelCardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DashboardPanelCardDescription>
                    </DashboardPanelCardContent>
                </DashboardPanelCard>
            </DashboardPanelDisplay>
        </DashboardPanelStyles>
    )
}

export default DashboardPanel