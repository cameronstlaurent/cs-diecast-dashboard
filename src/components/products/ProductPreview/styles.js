import styled from 'styled-components';



const ProductPreviewStyles  = styled.aside`
      /* styles */
     box-shadow:  0 0 2px 1px grey;
     width: 31rem;
     border-radius: 4px;
     background-color: #e5e7eb;
`;

const ProductName = styled.h2`
     font-weight:700;
     font-size:3rem;
`;

const ProductPreviewContent = styled.div`
          padding: 2rem 3rem;
`


const ProductImage = styled.div`
     display: block;
     img {
          border-radius: 4px 4px 0px 0px;
          height:20rem;
          width: 100%; 
          object-fit: cover;
     }
`;


const ProductPrice = styled.h4`
     font-size: 2.4rem;
     font-weight: 600;
`;

const ProductDescription = styled.p`
     font-size: 1.6rem;
     color: #1e1e1e;
     padding-top 1rem;
`

export {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductPreviewContent}