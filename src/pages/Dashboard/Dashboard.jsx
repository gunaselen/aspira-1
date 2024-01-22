import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import "./Dashboard.scss"
import TimeBasedGreeting from '../../components/TimeBasedGreeting/TimeBasedGreeting'
import Courses from '../../components/courses/Courses'
import { AlertIcon, CoursesIcon, RewardsIcon } from '../../utils/images'
import {Cards} from '../../components/cards/Cards'
import {SeeAll, SubTitele} from '../../components/subTitele/SubTitele'
import YourChartComponent from '../../components/chat'
import Alert from '../../components/alert/Alert'


export default function Dashboard() {
  const [alertIcon,setAlertIcon]=useState(false)
   
  return (
    <>
    <Layout header={"Dashboard"}>

  

   


    
      <div className="dashboard-inner">
        <div className="dashboard-left">
        <TimeBasedGreeting/>
      <div className='course-info'>
        <Courses img={CoursesIcon} count={7} color={"LightningYellow"} name={"My Courses"} />
        <Courses img={CoursesIcon} count={6} color={"LawnParty"} name={"Completed Courses"} />
        <Courses img={RewardsIcon} count={0} color={"Pear"} name={"Certification & Rewards"} />
      </div>
      <div className="header-section">
        <SubTitele>My Courses</SubTitele>
        <SeeAll/>
      </div>
      <div className='course-info'>
        <Cards img={CoursesIcon}  stage={"Web Development"}  title={"Stage - 1"} percent={100}/>
        <Cards img={CoursesIcon}  stage={"UX/UI Design"}  title={"Stage - 1"} percent={10} />

      </div>
      <div className='course-info'>
        <YourChartComponent chartId={"doughnut"} chartType ={"doughnut"} header={"Productivity Overview"}/>
        <YourChartComponent chartId={"bar"} chartType ={"bar"} header={"Timesheet Overview"}/>
       

      </div>
        </div>
        <div className={`dashboard-right ${alertIcon? "active" :""}`}>
        


        <Alert/>
        </div>
        <div className="alert-icon" onClick={() =>setAlertIcon(!alertIcon) }>
<img src={AlertIcon} alt=""  />
</div>
        





      </div>
    
      </Layout>
    </>
  )
}
