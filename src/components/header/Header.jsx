import React from 'react'
import "./Header.scss"
import { HambergerIcon, NotificationIcon, ProfileIcon } from '../../utils/images'
import { ReactSVG } from 'react-svg'
import { Link, NavLink } from 'react-router-dom'

export default function Header(props) {
    const{header,active} = props
  return (
    <div className='header'>
        <div className="header-left">
        <ReactSVG className='HambergerIcon' src={HambergerIcon} onClick={active}/>
        <h1 className='header-text'>{header&&header}</h1>
        </div>
       
        <div className="header-right">
            <div className='notifaction'><img src={NotificationIcon} alt="" /></div>
            <NavLink to={"/profile/general"}>
            <div className="header-profile">
                <div className="header-profile-img"><img src={ProfileIcon} alt="" /></div>
                <div className="header-profile-section">
                    <p className='header-profile-id'>ID:AS0101</p>
                    <h6 className='header-profile-name'>Rio Johnson</h6>
                </div>
            </div>
            </NavLink>

        </div>
    </div>
  )
}
