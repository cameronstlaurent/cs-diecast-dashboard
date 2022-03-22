import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AiFillEdit} from 'react-icons/ai';
import {MdOutlineAddCircle} from 'react-icons/md';
import {TiThSmall} from 'react-icons/ti';

const ProductOptionStyles = styled.ul`
    font-size: 1.75rem;
    li {
        padding-left: 3rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

function ProductOptions (props){
    return(
        <ProductOptionStyles>
            <li>
                <Link to="/dashboard"><TiThSmall className="icon" size="1.75rem"/>view all products</Link>
            </li>
            <li>
                <Link to="add"><MdOutlineAddCircle className="icon" size="1.75rem"/>add a product</Link>
            </li>
            <li>
                <Link to="edit"><AiFillEdit className="icon" size="1.75rem"/>edit a product</Link>
            </li>
        </ProductOptionStyles>
    );
}

export default ProductOptions