import styled from 'styled-components';

const DashboardPanelStyles = styled.section`
    margin: 5rem auto;
    width: 100%;
    max-width: 1343px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow:  0 0 2px 1px grey;
`;

const DashboardPanelHeading = styled.div`
    padding: 1rem 2rem;
    border-radius: 8px 8px 0px 0px;
    background-color: rgba(0,0,0,0.05);
    h2 {
        font-size: 3rem;
    font-weight: bold;
    }
    
`;

const DashboardPanelDisplay = styled.div`
    border-radius: 0px 0px 8px 8px;
    border-top: none;
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;




export {DashboardPanelStyles, DashboardPanelHeading, DashboardPanelDisplay}