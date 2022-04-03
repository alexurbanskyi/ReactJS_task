import React from 'react'
import MyButton from '../MyButton/MyButton'
import ShowGrids from '../ShowGrids/ShowGrids'
import './Modal.css'

function Modal({modalShow, setModalShow, addedColumns, setAddedColumns, remainingColumns, setRemainingColumns}) {
   
  

  return (
   <div className={modalShow ? 'modal active' : 'modal'}>
      <div className={modalShow ? 'modal_content active' : 'modal_content'}>
         <h2 className='modal_title'>
            Select columns for the grid
         </h2>
         <div className='grids_wrapper'>
            <div className='grids'>
               <ShowGrids Columns={remainingColumns}/>
            </div>
            <div className='grids'>
               <ShowGrids Columns={addedColumns}/>
            </div>
         </div>
         <div className='btn_holder'>
            <MyButton onClick={()=>setModalShow(false)}>Apply</MyButton>
         </div>
      </div>
   </div>
  )
}

export default Modal
// className={modalShow ? 'modal active' : 'modal'}