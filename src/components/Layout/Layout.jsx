import React, { useState } from 'react'
import "./Layout.scss"
import SideBar from '../side-bar/SideBar'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ProfileMenu from '../ProfileMenu/ProfileMenu'

export default function Layout(props) {

  const [active, SetActive] = useState(false);
  const { header } = props
  const myProfile = header == "My Profile"


  const Active = () => {
    SetActive(!active)
    console.log(active)
  }
  
  return (
    <div className='main-section'>
      <SideBar className="sid-basssr" active={active} profile ={myProfile?true:false} />
      <div className={`right-section ${myProfile?"profilepage":""}`} >
        <Header header={header} active={Active} />
        {
          myProfile ?
            <div className='inner-section profile-list'>
              <ProfileMenu />
             <div className='profile-list-inner-section'> {props.children}</div>
            </div>

            :
            <div className='inner-section'>
              {props.children}
            </div>
        }

        <Footer />
      </div>

    </div>
  )
}
