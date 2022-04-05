import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton'
import { v4 as uuidv4 } from 'uuid';
import './Modal.css'

function Modal({modalShow, setModalShow, addedColumns, setAddedColumns, remainingColumns, setRemainingColumns}) {

   const [dragItem, setDragItem] = useState('');
   const [value, setValue] = useState('');
   
  function del(id){
     let temp = addedColumns.filter((el)=>(el !== id))
     setAddedColumns(temp)
   setRemainingColumns([...remainingColumns,id]);
   }

   function dragStart(e,item){
      console.log(item)
      setDragItem(item)
      console.log(dragItem)
    }

    let filtredGrids =  remainingColumns.filter((el)=>el.includes(value))
    console.log(filtredGrids)

  return (
   <div className={modalShow ? 'modal active' : 'modal'}>
      <div className={modalShow ? 'modal_content active' : 'modal_content'}>
         <h2 className='modal_title'>
            Select columns for the grid
         </h2>
         <div className='grids_wrapper'>
            
            <div className='grids'>
               {
                  (remainingColumns.length === 0) 
                  ?  
                 <p className={'warning'}>All columns added</p> 
                 :
               <div className='remain_wrapper'>

               <input className='input' placeholder='Search' value={value} onChange={(e)=>setValue(e.target.value)}></input>
               {
                  filtredGrids.map((item) => 
               <div 
                  className='remain' 
                  key={item}
                  draggable={true}
                  onDragStart={(e)=> dragStart(e,item)}
                  >
                  {item}
               </div>)
               }
               </div>

               }
            </div>

            <div 
               className='grids'
               onDragOver= {(e)=>{
                  e.preventDefault()
                }}
                onDrop={(e)=>{
                  e.preventDefault()
                  setAddedColumns ([...addedColumns, dragItem])
                  let temp = remainingColumns.filter((el)=> el!==dragItem);
                  console.log(temp)
                  setRemainingColumns(temp) 
                  setValue('');     
               }}
               >

               {
               (addedColumns.length === 0) 
                ?  
               <p className={'warning'}>No added columns</p> 
               :
               <div className='add_wrapper'>

                 {addedColumns.map((item) => 
                     <div className='added' key={uuidv4()}>       
                        <p>{item}</p>
                        <p className='delete' id={item} onClick={(event)=> del(event.target.id)}>x</p>
                     </div> )
                  }
               </div>
               }

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
