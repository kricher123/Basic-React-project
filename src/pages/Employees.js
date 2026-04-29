import '../index.css';
import Employee from '../components/Employee'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

function Employees() {
  const [role,setRole] = useState('GIS Analyst');
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {
        id:1,
        name : "Diana",
        role : "Engineer",
        experience : "senior",
        img : 'https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg'
      },
      {
        id:2,
        name : "John",
        role : role,
        experience : "senior",
        img : 'https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg'
      },
      {
        id:3,
        name : "David",
        role : "HR",
        experience : "senior",
        img : 'https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg'
      },
      {
        id:4,
        name : "Jane",
        role : "Whomegalul",
        experience : "senior",
        img : 'https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg'
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee)=>{
      if(id==employee.id){
        return{...employee,name:newName,role:newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name,role,img){
    const newEmployee = {
      id:uuidv4(),
      name:name,
      role:role,
      img:img
    };
    setEmployees([...employees, newEmployee])
  }

  console.log("Inside App return")
  return (
    <div className="App bg-gray-300 min-h-screen px-2 py-2">
      {showEmployees ?(
        <>
        <div className = "flex flex-wrap justify-center">
            {employees.map((employee)=>{
              const editEmployee = (
                <EditEmployee id={employee.id}
                name = {employee.name}
                role = {employee.role}
                updateEmployee = {updateEmployee}
                />
              )
              return(
                <Employee
                key = {employee.id}
                id = {employee.id}
                name = {employee.name}
                role = {employee.role}
                img = {employee.img}
                editEmployee = {editEmployee}/>
              );
            })}
            </div>
          <AddEmployee newEmployee = {newEmployee}/>
        </>
      ):(
        <p>Cannot access the Employees</p>
      )}
    </div>
  );
}

export default Employees;
