import React from 'react'
import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar'
import {DashboardPanel} from '../../components/panels'

function DashBoardPage (props){

return(
<>
    <AppBar/>
    <div className="dashboard-panel flex-container">
        <SideBar/>
        <DashboardPanel/>
    </div>
</>
)
}

export default DashBoardPage