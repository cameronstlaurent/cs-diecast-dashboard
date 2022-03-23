import React from 'react'
import {SideBarStyles, SideBarItem, 
    SideBarItems, DashboardItem} from './styles'
/* icons */
import {Link} from "react-router-dom"
import {signOut} from 'firebase/auth'
import {auth} from 'libs/firebase'
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
import ProductOptions from './ProductOptions'

function SideBar  (props){

    function onLogoutRequest(e) {
        signOut(auth)
    }
    return(
    <SideBarStyles>
        <SideBarItems>
            <DashboardItem>
            <AiOutlineDashboard className="icon" size="1.75rem"/>Dashboard
            </DashboardItem>
        </SideBarItems>
        <ProductOptions/>
        <SideBarItems>
        <SideBarItem>
            <Link to="/dashboard">
            <FaUser className="icon" size="1.75rem"/>Users
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <FaUsers className="icon" size="1.75rem"/>Vendors
            </Link>
            </SideBarItem>
        </SideBarItems>
        <SideBarItems>
            <SideBarItem>
            <Link to="/dashboard">
            <IoStarHalf className="icon" size="1.75rem"/>Reviews
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <FaShoppingCart className="icon" size="1.75rem"/>Orders
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <ImBooks className="icon" size="1.75rem"/>Categories
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <AiFillTag className="icon" size="1.75rem"/>Brands
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <GiPresent className="icon" size="1.75rem"/>Products
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <BsFillCreditCard2BackFill className="icon" size="1.75rem"/>Payments
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
                <AiFillTrophy className="icon" size="1.75rem"/>Best Sellers
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <ImRocket className="icon" size ="1.75rem"/>Shipments
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
            <AiFillDollarCircle className="icon" size ="1.75rem"/>Pricing
            </Link>
            </SideBarItem>
            <SideBarItem>
            <Link to="/dashboard">
                <AiFillTags className="icon" size="1.75rem"/>Promotions
            </Link>
            </SideBarItem>
        <SideBarItem>
            <Link onClick={onLogoutRequest} to="/">
                <ImExit className="icon" size="1.75rem"/>Sign Out
            </Link>
            </SideBarItem>
        </SideBarItems>
    </SideBarStyles>
    )
}

export default SideBar 