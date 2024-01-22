import React from 'react'
import "./Button.scss"

export default function Button(props) {
    const {fill,type,functions , disabledButton} = props
  return (
    <>
    <button type={type? type :"button"} className={fill?"full-width":""} onClick={functions} disabled={disabledButton}>{props.children}</button>
    </>
  )
}
