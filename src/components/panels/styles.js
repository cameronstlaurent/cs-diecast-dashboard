import styled from 'styled-components';

const DashboardPanelStyles = styled.div`
    margin: 5rem auto;
    width: 100%;
    max-width: 1400px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow:  0 0 2px 1px grey;
`;

const DashboardPanelHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 8px 8px 0px 0px;
    background-color: rgba(0,0,0,0.05);
    
`;

const DashboardPanelDisplay = styled.div`
    border-radius: 0px 0px 8px 8px;
    border-top: none;
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
`;


const DashboardPanelText = styled.h2`
    font-size: 3rem;
`

const DashboardPanelCard = styled.div`
    box-shadow:  0 0 2px 1px grey;
    width: 31rem;
    margin-right: 3rem; 
    margin-top: 2rem;
    border-radius: 8px;
`

const DashboardPanelCardContent = styled.div`
    padding: 2rem 3rem;
`

const DashboardPanelCardHeading = styled.h3`
    font-size: 3rem;
    text-align: center;
`

const DashboardPanelCardPriceMake = styled.div`
    display: flex;
    justify-content:space-between;
    padding: 1rem 0;
    font-size: 2rem;
    border-bottom: 1px solid gray;
`

const DashboardPanelCardDescription = styled.p`
    font-size: 1.6rem;
`

export {DashboardPanelStyles, DashboardPanelHeading, DashboardPanelText, DashboardPanelDisplay, DashboardPanelCard, DashboardPanelCardContent, DashboardPanelCardHeading, DashboardPanelCardPriceMake, DashboardPanelCardDescription}