import styled from 'styled-components';



const ProductDataEntryFormStyles  = styled.form`
    width: 380px;
    input:focus, textarea:focus{
        border-color: #e12b38;
        background-color: #eff6ff;
        outline-color: #e12b38;
    }
    fieldset{
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
`;

const ProductImage = styled.div`
`;

const ProductName = styled.div`
    flex:3.5;
`;

const ProductPrice = styled.div`
    flex:1.5;
`;

const ProductBrand = styled.div`
flex-basis: 100%;
margin-bottom: 1.5rem;
`;

const ProductDescription = styled.div`
    textarea{
        resize: none;
        font-size:1.6rem;
        border: none;
        border-radius: 2px;
        box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
    }
`;



export {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductBrand, ProductDescription}