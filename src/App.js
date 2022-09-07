import Create from './components/Create';
import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState } from 'react';

function App() {
  const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const [modal, setModal]= useState(false);
    const toggle=() =>{
      setModal(!modal);
    }
  return (
    <div className="App">
      <Navbar/>
      <button  className="btn btn-dark text-warning mt-1" onClick={()=> setModal(true)}>Add {day[new Date().getDay()]}'s Workout</button>
      <Create toggle={toggle} modal={modal} />
    </div>
  );
}

export default App;
