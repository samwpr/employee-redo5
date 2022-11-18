import './App.css';
import Employee from './components/Employee.js';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("Dev");
  const [employee, setEmployee] = useState([
    {name:"Sam", role:"dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name:"Tam", role:"dev", img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg"},
    {name:"Bam", role:"dev", img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"},
    {name:"Sam", role:"dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name:"Tam", role:"dev", img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg"},
    {name:"Bam", role:"dev", img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"}
  ]);
  return (
    <div className="App ">
      {showEmployee ? (
        <div className="App-wrapper flex flex-wrap justify-center">
          {employee.map((e)=>{return(
            <>
            <Employee name={e.name} role={e.role} img={e.img}/>
            </>
          )})}


        </div>
      ) : <p>No Access</p>}
    </div>
  );
}

export default App;
