import styled from 'styled-components';



const ProductCardStyles = styled.div`
    box-shadow:  0 0 2px 1px grey;
    width: 31rem;
    border-radius: 4px;
    background-color: #f3f4f6;
    .card-img {
        border-radius: 4px 4px 0px 0px;
        height:20rem;
        width: 100%; 
        object-fit: cover;
    }
`;

const ProductCardContent = styled.div`
    padding: 2rem 3rem;
    h3{
        font-size: 3rem;
        font-weight: bold;
    }
    h4 {
        font-size: 2.4rem;
        font-weight: 600;
    }
    p {
        font-size: 1.6rem;
        padding-top 1rem;
    }
`;

export {ProductCardStyles, ProductCardContent}