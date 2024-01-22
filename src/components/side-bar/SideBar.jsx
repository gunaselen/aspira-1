import React from 'react'
import "./SideBar.scss"
import { DashboardLogo, InterviewsIcon, MenuLogo, MyLearningsIcon, MyProgressIcon, MyProjectsIcon, RewardsIcon, dashboardIcon, logoutIcon } from '../../utils/images'
import { Link, useLocation } from 'react-router-dom'
import { ReactSVG } from 'react-svg'



export default function SideBar({active,profile}) {
    const pathname = useLocation().pathname

    const values =[
      {
          id:1,
          img:dashboardIcon,
          list:"Dashboard",
          pathname:"/"
      },
      {
          id:2,
          img:MyLearningsIcon,
          list:"My Learnings",
          pathname:"/my-learnings"
      }, {
          id:3,
          img:MyProgressIcon,
          list:"My Progress",
          pathname:"/my-progress"
      }, {
          id:4,
          img:MyProjectsIcon,
          list:"My Projects",
          pathname:"/my-projects"
      }, {
          id:5,
          img:RewardsIcon,
          list:"Rewards",
          pathname:"/rewards"
      }, {
          id:6,
          img:InterviewsIcon,
          list:"Interviews",
          pathname:"/interviews"
      }
  ]



    
  return (
    <div className={`side-bar ${active?'active':''} ${profile?'profile':''}`}>
        <div className="side-bar-logo">
            <img className='logo' src={DashboardLogo} alt="" />
            <img className='menulogo' src={MenuLogo} alt="" />
        </div>
        <ul className='menulist'>
          {values?.map((value ) => {
 return(
  
 <li  className={`${pathname === value.pathname ? "active navitem" : "navitem"}`}><Link  key={value.id} to={value.pathname} ><ReactSVG className='menu-icon' src={value.img}/> <span>{value.list}</span></Link></li>

 )
          })}
         
        </ul>

        <ul>
  
  <li  className="navitem"><Link to="/login"><ReactSVG className='menu-icon' src={logoutIcon}/> <span>Logout</span></Link></li>
 
 
          
         </ul>
       
    </div>
  )
}
