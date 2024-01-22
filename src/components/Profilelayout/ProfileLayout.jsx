import React from 'react'
import Button from '../button/Button'
import "./ProfileLayout.scss"

export default function ProfileLayout({functions ,content , img , buttonContent}) {
  return (
    <div className='emty-Layout'>
        <img src={img} alt="bg-image" />
        <p className='emty-Layout-content'>{content}</p>
        <Button functions={functions}>{buttonContent}</Button>
    </div>
  )
}
