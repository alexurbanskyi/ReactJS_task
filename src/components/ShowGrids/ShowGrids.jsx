import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './ShowGrids.css'

function ShowGrids({Columns}){
   
   return(
      <div>
         {
            Columns.map((item) => <p key={uuidv4()} className='grid_name'>{item}</p>)
         }
      </div>
   );
}

export default ShowGrids