import React from 'react'
import {SideBarStyles, SideBarItem, 
    SideBarItems, DashboardItem} from './styles'
import {AiOutlineDashboard} from "react-icons/ai"
import {FaUser} from "react-icons/fa"
import {FaUsers} from "react-icons/fa"
import {IoStarHalf} from "react-icons/io5"
import {FaShoppingCart} from "react-icons/fa"
import {ImBooks} from "react-icons/im"
import {AiFillTag} from "react-icons/ai"
import {GiPresent} from "react-icons/gi"
import {BsFillCreditCard2BackFill} from "react-icons/bs"
import {AiFillTrophy} from "react-icons/ai"
import {ImRocket} from "react-icons/im"
import {AiFillDollarCircle} from "react-icons/ai"
import {AiFillTags} from "react-icons/ai"
import {ImExit} from "react-icons/im"
import {Link} from "react-router-dom"
function SideBar  (props){
    return(
    <SideBarStyles>
        <SideBarItems>
            <DashboardItem>
            <AiOutlineDashboard class="icon" size="1.75rem"/>Dashboard
            </DashboardItem>
        </SideBarItems>
        <SideBarItems>
        <SideBarItem>
            <Link to="/dashboard">
            <FaUser class="icon" size="1.75rem"/>Vendors
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <FaUsers class="icon" size="1.75rem"/>Users
            </Link>
            </SideBarItem>
        </SideBarItems>
        <SideBarItems>
            <SideBarItem>
            <Link to="/dashboard">
            <IoStarHalf class="icon" size="1.75rem"/>Reviews
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <FaShoppingCart class="icon" size="1.75rem"/>Orders
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <ImBooks class="icon" size="1.75rem"/>Categories
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <AiFillTag class="icon" size="1.75rem"/>Brands
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <GiPresent class="icon" size="1.75rem"/>Products
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <BsFillCreditCard2BackFill class="icon" size="1.75rem"/>Payments
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
                <AiFillTrophy class="icon" size="1.75rem"/>Best Sellers
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <ImRocket class="icon" size ="1.75rem"/>Shipments
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <AiFillDollarCircle class="icon" size ="1.75rem"/>Pricing
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
                <AiFillTags class="icon" size="1.75rem"/>Promotions
            </Link>
            </SideBarItem>
        <SideBarItem>
            <Link to="/">
                <ImExit class="icon" size="1.75rem"/>Sign Out
            </Link>
            </SideBarItem>
        </SideBarItems>
    </SideBarStyles>
    )
}

export default SideBar 