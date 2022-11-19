import './App.css';
import Employee from './components/Employee.js';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("Dev");
  const [employee, setEmployee] = useState([
    {name:"Salary", role:"$4,200", img:"https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {name:"Assets", role:"$69,000", img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg"},
    {name:"Debts", role:"$3,200", img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"},
    {name:"Shopping", role:"$140", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name:"Food", role:"$788", img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg"},
    {name:"Transport", role:"$245", img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"}
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
