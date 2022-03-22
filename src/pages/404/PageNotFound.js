import React, {useState} from 'react';

import {Link} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from 'libs/firebase';
import {Button} from 'ui/buttons';
import {FourOhFourPageStyles} from './styles';
import FourOhFourSvg from 'assets/images/404.svg';
import Branding from 'assets/images/logo.svg';

function PageNotFound  (props){
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user)=>{
        if (user){
            setIsUser(true)
        }else{
            setIsUser(false)
        }
    })
    return( 
        <>
           <aside>
               <FourOhFourPageStyles>
                   <div class="inner-container">
                   <img className="logo" src={Branding} alt="CS Diecast Logo"/>
                   <img className="four-oh-four" src={FourOhFourSvg} alt="error code 404"/>
                   <p>It appears that this page was too fast and too furious to be found.</p>
                   {
                       isUser? <Link to='/dashboard'><Button>back to safety</Button></Link> : <Link to='/'><Button>back to safety</Button></Link>
                   }
                   </div>
               </FourOhFourPageStyles>
           </aside>
        </>
    )
}

export default PageNotFound 