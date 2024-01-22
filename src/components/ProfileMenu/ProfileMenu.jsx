import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./ProfileMenu.scss"


export default function ProfileMenu() {
    const pathname = useLocation().pathname
    const values =[
        {
            id:1,
           
            list:"General",
            pathname:"/profile/general"
        },
        {
            id:2,
           
            list:"Education",
            pathname:"/profile/education"
        }, {
            id:3,
           
            list:"Experience",
            pathname:"/profile/experience"
        }, {
            id:4,
           
            list:"Certificate",
            pathname:"/profile/certificate"
        }, {
            id:5,
           
            list:"Projects",
            pathname:"/profile/projects"
        }, {
            id:6,
           
            list:"Skills",
            pathname:"/profile/skills"
        }, {
            id:7,
           
            list:"Languages",
            pathname:"/profile/languages"
        }, {
            id:8,
           
            list:"Social Account",
            pathname:"/profile/social-account"
        }, {
            id:9,
           
            list:"Document",
            pathname:"/profile/document"
        }
    ]
  return (
    <ul className='Profile-menu'>
          {values?.map((value ) => {
 return(
  
 <li  className={`${pathname === value.pathname ? "active Profile-menu-list" : "Profile-menu-list"}`}><Link  key={value.id} to={value.pathname} > <span>{value.list}</span></Link></li>

 )
          })}
         
        </ul>
  )
}
