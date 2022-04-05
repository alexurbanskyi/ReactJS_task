import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import MyButton from './components/MyButton/MyButton';
import PrintTable from './components/PrintTable/PrintTable';
import tableData from './Data/data';

function App() {

  const defaultTab = ['brand', 'color', 'year'];
  const allColumns = Object.keys(tableData[0]);
  const remain = allColumns.filter(i => defaultTab.indexOf(i) < 0)
  
  // console.log('Дані - ', tableData);
  // console.log('всі можливі колонки ',allColumns) 
  // console.log('початкові  додані колонки', defaultTab);
  // console.log('недодані колонки',remain) 

  const [addedColumns, setAddedColumns] = useState(defaultTab);
  const [remainingColumns, setRemainingColumns] = useState(remain)
  const [modalShow, setModalShow] = useState(false);
  


  return (
    <div className="App">
      <div className='table_header'>
        <p>
          Car Info
        </p>
        <MyButton onClick={()=>setModalShow(true)}>Select Grid Columns</MyButton>
      </div>
      <PrintTable addedColumns={addedColumns}/>
      <Modal 
        modalShow={modalShow} 
        setModalShow={setModalShow} 
        addedColumns={addedColumns} 
        setAddedColumns={setAddedColumns} 
        remainingColumns={remainingColumns} 
        setRemainingColumns={setRemainingColumns}
      />
    </div>
  );
}

export default App;
