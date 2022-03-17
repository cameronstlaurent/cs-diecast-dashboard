import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: 12px;
    color: rgb(71 85 105);
`;
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
<<<<<<< HEAD
    font-size:1.6rem;
=======
    font-size:1.125rem;
>>>>>>> 20d4a997f4292329a01c0d69e9dfff426d03c5b4
    padding: 0.35rem 0.5rem;

    ::placeholder{
        font-size: 14px;
        color: rgb(71 85 105);
    }
    :focus{
        background-color:  rgb(241 245 249);
    }
`;


export{Input, Label} ;