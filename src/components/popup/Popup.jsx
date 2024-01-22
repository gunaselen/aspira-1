// import React from 'react'

// export default function Popup() {
//   return (
//     <div>Popup</div>
//   )
// }
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Popup = ({ isOpen, onRequestClose ,children }) => {
 



  return (
    <>
   
   <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
       {children}
      </Modal>
    </>
  );
};

export default Popup;
