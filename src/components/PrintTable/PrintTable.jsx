import tableData from "../../Data/data"; 
import './PrintTable.css'
import { v4 as uuidv4 } from 'uuid';


  function PrintTable ({addedColumns}){
    
    
   let columnsData = tableData.map((item) => {
     return (addedColumns.map((el) => item[el]));
   });
   
 
   return(
     <div>
      { (addedColumns.length === 0) 
      ? 
      <p className={'warning'}>Empty! Select columns!</p> 
      :
      <div className='table'>
          <div className='table_title'>
            {
              addedColumns.map((item) => 
                <p key={uuidv4()} className='table_data name'>
                  {item}
                </p>
            )}
          </div>
            {
              columnsData.map((item) => 
              <div key={uuidv4()} className='table_title'>
                {item.map((el)=>
                  <p key={uuidv4()} className='table_data'>
                    {el}
                  </p>
                )}
              </div> 
            )}
      </div>
      }
     </div>
   );
 }
 export default PrintTable;