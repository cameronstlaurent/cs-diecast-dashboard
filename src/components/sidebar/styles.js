import styled from 'styled-components';

const SideBarStyles   = styled.nav`
    box-shadow:  0 0 2px 1px grey;
    width: 28.7rem;
    height: 100%;
    background-color: #ffffff;
`;

 const SideBarItems = styled.ul`
// border: 2px solid black;
`;

const DashboardItem = styled.li`
    background-color: #e12b38;
    padding: 1rem 0;
    font-size: 1.75rem;
    padding-left: 6rem;
    color: #ffffff;
`

const SideBarItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.75rem;
    padding-left: 6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:nth-child(1){
        border-top: 2px solid gray;
    }
    &:nth-child(11){
        border-top: 2px solid gray;
    }
 `



export {SideBarStyles, SideBarItem, SideBarItems, DashboardItem}