import styled from 'styled-components'

const FourOhFourPageStyles = styled.section`
    height: 100vh;
    min-height: 800px;
    background-color: rgba(0,0,0,0.05);
    padding-top: 15vh;

    .logo {
        width: 20rem;
        padding-bottom: 3rem;
    }
    .four-oh-four {
        width: 50rem;    
        margin: auto;
        display: flex;
    }
    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
    }
    p {
        font-size: 3rem;
        font-weight: bold;
        padding-bottom: 3rem;
        color: #1e1e1e;
        text-align: center;
        max-width: 500px;
        margin: auto;
    }
`;


export {FourOhFourPageStyles}