import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CN from './CreateNote';
import './App.css';
import Note from './Note';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pmd from './projectmanager/Pmd';
import Hrd from './hr/Hrd';
import Adm from './admin/Adm';

const  App = () => {

  const [addItem , setItem] = useState([]);

  const addNote = (note) => {
    // alert("hello!");
    setItem((preval)=>{
      return[...preval,
      note
      ];
    });

 
    console.log(note);
  }

  const delitem = (id) =>{

    setItem((preval)=>{
   
        preval.filter((currentval,indx)=>{
              return indx !== id;
        })
      
    })
  }
 

  return (
<>
{/* <Pmd/> */}
{/* <Hrd/> */}
<Adm/>
    {/* <Header/>
   
    <CN  passNote = {addNote}/>
    
  <div className="row">


 {   addItem.map((val,index)=> {
      return <Note
            key = {index}
            id={index}
            title = {val.title}
            content = {val.content}
            deleteItem = {delitem}
      />
    }) }
 
    </div>
   */}
  
</>
  );
}

export default App;
