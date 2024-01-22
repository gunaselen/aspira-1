import React, { useRef, useState } from 'react'
import './FormInput.scss'
import { CloseEye, OpenEye, PasteIcon } from '../../utils/images'



export default function FormInput(props) {
  const textRef = useRef(null);
  const [icon , setIcon]=useState(true)
    const{ label , placeholder,errorMSG,value ,required,type,textarea ,disabledInput,clipboard } = props
    // Clipboard text
    const handleCopyClick = () => {
      // Select the text inside the input element
      textRef.current.select();
      // Use the Clipboard API to copy the selected text to the clipboard
      document.execCommand('copy');
    };
  return (
    <>
    <div className='form-section'>
        <label className={disabledInput&&"disabled"}  htmlFor="rr">{label}</label>


        {
          textarea ?
          <>
          <textarea placeholder={placeholder ? placeholder :""} value={value} { ...required && required} className={errorMSG && "error"} disabled={disabledInput}>

          </textarea>
          {errorMSG && <span className='errorMSG'>{errorMSG}</span>}
          </>

          :

          <>
           {/* ref={clipboard?textRef:null} */}
           <input disabled={disabledInput} type = { type == "password" ? (icon ? "password" :"text")  :"text"}  name="" id="rr" placeholder={placeholder ? placeholder :""} value={value} { ...required && required} className={errorMSG && "error"}   />
        {errorMSG && <span className='errorMSG'>{errorMSG}</span>}
        {type && <span onClick={()=>setIcon(!icon)} className='eye-icon'><img src={icon ? CloseEye: OpenEye } alt="eye icon" /></span> }
        {clipboard && <span onClick={handleCopyClick} className='eye-icon'><img src={PasteIcon } alt="eye icon" /></span> }
          </>
        }
       

    </div>
    </>
  )
}
