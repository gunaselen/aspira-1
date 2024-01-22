import React from 'react'
import "./Courses.scss"
import { ReactSVG } from 'react-svg'

export default function Courses(props) {
    const {img , count  , color , name} = props
  return (
    <div className='courses-card'>
        <div className={`courses-card-img ${color}`}>
          <ReactSVG src={img}  />
          </div>
        <div className="courses-card-text">
            <h1 className='courses-card-count'>{count&&count || 0 }</h1>
            <p className='courses-card-name'>{name}</p>
        </div>
    </div>
  )
}
