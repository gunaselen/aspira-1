import React from 'react'
import "./SubTitele.scss"

function SubTitele(props) {
  return (
    <h1 className={`subTitele`} >
      {props.children}
    </h1>
  )
}
function SeeAll(props) {
  return (
    <h1 className={`SeeAll`} >
      See All
    </h1>
  )
}
function TitltLayout(props) {
  return (
    <div className="header-section">
      <SubTitele> {props.children}</SubTitele>
      <SeeAll/>

    </div>
  )
}


export  {SubTitele , SeeAll,TitltLayout}
