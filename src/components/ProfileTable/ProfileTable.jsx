import React, { useState } from 'react'
import Button from '../button/Button'
import { SubTitele, } from '../subTitele/SubTitele';
import "./ProfileTable.scss"
import Pagnation from '../pagnation/pagnation';
import { DeleteIcon, EditIcon, pdfIcon } from '../../utils/images';
import Popup from '../popup/Popup';


export default function ProfileTable({ tabelHeaders, values, subTitele }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='tabel-header'>
        <SubTitele>
          {subTitele}
        </SubTitele>

        <Button functions={openModal}>+ Add {subTitele}</Button>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {tabelHeaders.map((header, index) => {
                return <th key={index}>{header.tabelHeader}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {
              values.map((item, index) => (
                <tr key={index}>
                  {tabelHeaders.map((header, indexs) => (

                    <td key={header}>
                      {header.datavalue === 'certificates' || header.datavalue === 'actions' ||header.datavalue === '#' ? (<>

                        {header.datavalue === 'certificates' ?


                          <a href={item[header.datavalue]} target="_blank" rel="noopener noreferrer">
                            <img src={pdfIcon} alt="" />

                          </a>
                          : header.datavalue === 'actions' ? <>
                            <span  onClick={(e)=>console.log(item.id)}> <img src={EditIcon} alt="" />
                            </span>
                            <span > <img src={DeleteIcon} alt="" />
                            </span>
                          </> 
                          : 
                          index+1 }
                      </>
                      ) : (
                        item[header.datavalue]
                      )}
                      {item[header.datavalue]}
                    </td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Pagnation itemsPerPage={4} />
      <Popup  isOpen={isModalOpen} onRequestClose={closeModal}>
      <h2>Another Component</h2>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>
      </Popup>
    </>
  )
}
