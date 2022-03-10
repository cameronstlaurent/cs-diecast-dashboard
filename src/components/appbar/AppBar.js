 import React from 'react'
 
 import {IoNotificationsOutline} from "react-icons/io5"
 import {IoIosSettings} from "react-icons/io"
 import {FaUser} from "react-icons/fa"
 import {MdEmail} from "react-icons/md"
 import {AppBarStyles, AppBarItem, AppBarItems} from './styles'
 import {IconButton} from './../../ui/buttons'
 
 
 import {Link} from "react-router-dom"
 function AppBar  (props){
     return(
       <AppBarStyles> 
          <AppBarItems>
              <AppBarItem>
                <Link to="/dashboard">
                  <img src="images/logo.png" alt="car"/>
                </Link>
              </AppBarItem>
              <AppBarItem>
                <IconButton><FaUser color="#1e1e1e" size="2rem"/></IconButton>
                <IconButton><MdEmail color="#1e1e1e" size="2rem"/></IconButton>
                <IconButton><IoNotificationsOutline color="#1e1e1e" size="2rem"/></IconButton>
                <IconButton><IoIosSettings color="#1e1e1e" size="2rem"/></IconButton>
              </AppBarItem>
          </AppBarItems>
       </AppBarStyles>
     )
 }
 
 export default AppBar 