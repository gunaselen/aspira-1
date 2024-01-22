import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProfileLayout from '../../components/Profilelayout/ProfileLayout'
import Button from '../../components/button/Button'
import { SubTitele } from '../../components/subTitele/SubTitele'
import { EducationIcon } from '../../utils/images'

export default function Skills() {

  const skill = [
    {
      id:1,
      cours:"ui"
    },
    {
      id:2,
      cours:"ui developer"
    },
    {
      id:3,
      cours:"IOS developer"
    },
    {
      id:4,
      cours:"UX designer"
    },
    {
      id:5,
      cours:".net"
    },
  ]
  return (
    <>
    <Layout header={"My Profile"}>
<div className="profile-section">



{  
  (!skill.length==0)?
  <>
  <div className='tabel-header'>
  <SubTitele>
    {"Skills"}
  </SubTitele>

  <Button functions={""}>+ Add {"Skills"}</Button>
</div>
<SubTitele>
Your Skills{skill.length}
  </SubTitele>
  <div className="skils-section">
    {
      skill.map((iterm ,index) =>{
        return(
          <p key={index} >{iterm.cours} <span onClick={()=> console.log(iterm.id)}>&times;</span></p>
        )
      })
    }
  </div>




</>
  :
  <ProfileLayout  content={"No Educational records found"} img={EducationIcon} buttonContent={"+ Add Skills"}/>
}

</div>
    </Layout>
    </>
  )
}
