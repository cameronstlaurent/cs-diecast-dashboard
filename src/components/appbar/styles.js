import styled from 'styled-components';

const AppBarStyles   = styled.nav`
    box-shadow:  0 0 2px 1px grey;
    padding: 1rem 3rem;
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li`
`

export {AppBarStyles, AppBarItem, AppBarItems}