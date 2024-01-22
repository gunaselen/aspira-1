import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/AuthenticationScreens/LoginPage'
import ResetPasswordpage from '../pages/AuthenticationScreens/ResetPasswordpage'
import Dashboard from '../pages/Dashboard/Dashboard'
import MyLearnings from '../pages/MyLearnings/MyLearnings'
import MyProgress from '../pages/MyProgress/MyProgress'
import MyProjects from '../pages/MyProjects/MyProjects'
import Interviews from '../pages/Interviews/Interviews'
import Rewards from '../pages/Rewards/Rewards'
import MyProfile from '../pages/MyProfile/MyProfile'
import General from '../pages/MyProfile/General'
import Education from '../pages/MyProfile/Education'
import Experience from '../pages/MyProfile/Experience'
import Certificate from '../pages/MyProfile/Certificate'
import Projects from '../pages/MyProfile/Projects'
import Skills from '../pages/MyProfile/Skills'
import Languages from '../pages/MyProfile/Languages'
import SocialAccount from '../pages/MyProfile/SocialAccount'
import Document from '../pages/MyProfile/Document'

function Navigate() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='reset-password' element={<ResetPasswordpage/>}/>
        <Route path='' element={<Dashboard/>}/>
        <Route path='my-learnings' element={<MyLearnings/>}/>
        <Route path='my-progress' element={<MyProgress/>}/>
        <Route path='my-projects' element={<MyProjects/>}/>
        <Route path='interviews' element={<Interviews/>}/>
        <Route path='rewards' element={<Rewards/>}/>
        <Route path='profile' element={<MyProfile/>}/>
        
        <Route path='/profile/education' element={<Education/>}/>
        <Route path='/profile/experience' element={<Experience/>}/>
        <Route path='/profile/certificate' element={<Certificate/>}/>
        <Route path='/profile/projects' element={<Projects/>}/>
        <Route path='/profile/skills' element={<Skills/>}/>
        <Route path='/profile/languages' element={<Languages/>}/>
        <Route path='/profile/social-account' element={<SocialAccount/>}/>
       
        
        <Route path='/profile/document' element={<Document/>}/>
        <Route path='/profile/general' element={<General/>}  component={General}/>


{/* 
        <Route path='/profile/:productID' element={<General/>}  component={General}/>
        <Route path='/profile/general' element={<General/>}  component={General}/>
         */}

       

        
        
    </Routes>
    </BrowserRouter>

  )
}

export default Navigate
