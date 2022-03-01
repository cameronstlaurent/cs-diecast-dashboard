import React from 'react'
import {Link} from "react-router-dom"
import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar'
import {DashboardPanel} from '../../components/panels'

function DashBoardPage (props){

return(
<>
<nav>
            <ul>
                <li>
                    <Link to="/">LoginPage</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard Page</Link>
                </li>
            </ul>
        </nav>
    <AppBar/>
    <div class="dashboard-panel flex-container">
        <SideBar/>
        <DashboardPanel/>
    </div>
</>
)
}

export default DashBoardPage