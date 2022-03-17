import styled from 'styled-components';



const ProductPreviewStyles  = styled.aside`
      /* styles */
      max-width: 360px;
      align-self: stretch;
      padding: 3rem 2rem;
      background-color: #f8fafc;
`;

const ProductName = styled.h2`
     font-wieght:700;
     font-size:2.25rem;
     line-height:2.5rem;
     letter-spacing: -0.5px;
     color: #1e293b;
     word-wrap: break-word;
`;


const ProductImage = styled.div`
     display: block;
     margin: 1rem auto;
     width: 300px;
     img {
          width: 100%;
          height: auto;
     }
`;


const ProductPrice = styled.p`
     font-size: 2rem;
     font-weight: 100;
     letter-spacing: -1px;
     color: #64748b;
     margin-top: -0.3rem;
     margin-bottom: 0.25rem;
`;

const ProductDescription = styled.p`
     font-size: 1.6rem;
     color: #94a3b8;
`

export {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription}