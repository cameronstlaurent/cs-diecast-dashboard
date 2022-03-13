import React from 'react'

import { signOut } from 'firebase/auth'
import {auth} from 'libs/firebase'

import {Button} from 'ui/buttons'
import {SideBarStyles} from './styles'
import ProductOptions from "./ProductOptions";

function SideBar (props){

    function onLogoutRequest(e){
        signOut(auth)
    }
    return(
        <SideBarStyles>
            <header>
                <h1>SideBar</h1>
            </header>
            <ProductOptions/>
                <Button onClick={onLogoutRequest}>Log Out</Button>    
        
        </SideBarStyles>
    )
}

export default SideBar