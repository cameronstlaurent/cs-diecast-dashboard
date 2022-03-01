import styled from 'styled-components';

const DashboardPanelStyles = styled.div`
    margin: 5rem;
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow:  0 0 2px 1px grey;
`;

const DashboardPanelHeading = styled.div`
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-radius: 8px 8px 0px 0px;
    
`;

const DashboardPanelDisplay = styled.div`
    border-radius: 0px 0px 8px 8px;
    border-top: none;
`;

const DashboardPanelText = styled.h2`
    font-size: 3rem;
`

export {DashboardPanelStyles, DashboardPanelHeading, DashboardPanelText, DashboardPanelDisplay}