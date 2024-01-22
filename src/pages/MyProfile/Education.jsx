import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProfileLayout from '../../components/Profilelayout/ProfileLayout'
import { EducationIcon } from '../../utils/images'
import ProfileTable from '../../components/ProfileTable/ProfileTable'

export default function Education() {

  const tabelHeaders = [
    {
      id:1,
      tabelHeader:"#",
      datavalue:"#",

    },
    {
      id:2,
      tabelHeader:"Collessssge/Institute",
      datavalue:"collessssgeInstitute",

    },
    {
      id:3,
      tabelHeader:"Degree",
      datavalue:"degree",

    },
    {
      id:4,
      tabelHeader:"Major",
      datavalue:"major",

    },
    {
      id:5,
      tabelHeader:"Grade / %",
      datavalue:"grade",

    },
    {
      id:5,
      tabelHeader:"Start Year",
      datavalue:"startYear",

    },
    {
      id:7,
      tabelHeader:"End Year",
      datavalue:"endYear",

    },
    {
      id:8,
      tabelHeader:"Certificates",
      datavalue:"certificates",

    },
    {
      id:9,
      tabelHeader:"Actions",
      datavalue:"actions",

    }];
  const values = [
    {
      id: 1,
    
      collessssgeInstitute:"Guru Nanak College",
      degree:"Bsc",
       major:"Computer Science",
        grade:"86.3%",
         startYear:"2017",
         endYear:"2021",
         certificates:"",
         actions:""
    },
    {
      id: 2,
    
      collessssgeInstitute:"Guru Nanak College",
      degree:"Bsc",
       major:"Computer Science",
        grade:"86.3%",
         startYear:"2017",
         endYear:"2021",
         certificates:"",
         actions:""
    }
  ];
  return (
    <>
    <Layout header={"My Profile"}>
      <div className="profile-section">

        {
          (!values.length==0)? 
          <ProfileTable tabelHeaders={tabelHeaders} values={values} subTitele={"Education"} />
           :
           <ProfileLayout  content={"No Educational records found"} img={EducationIcon} buttonContent={"+ Add Education"}/>
        }
       
      

      </div>

    </Layout>
    </>
  )
}
