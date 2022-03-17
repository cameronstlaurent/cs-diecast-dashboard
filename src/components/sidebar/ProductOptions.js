import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ProductOptionStyles = styled.ul`
    font-size: 1.75rem;
    li {
        padding-left: 6rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

function ProductOptions (props){
    return(
        <ProductOptionStyles>
            <li>
                <Link to="/dashboard">view all products</Link>
            </li>
            <li>
                <Link to="add">add a product</Link>
            </li>
            <li>
                <Link to="edit">edit a product</Link>
            </li>
        </ProductOptionStyles>
    );
}

export default ProductOptions