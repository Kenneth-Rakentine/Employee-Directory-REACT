import React from 'react'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'
import { useContext } from 'react'


function EmployeeList(props) {
let {employeedata} = useContext(AppContext)

  return (
    <div className="employees">
            
              {employeedata.map((employee, index)=>{
                return <EmployeeListItem employee={employee} index={index}/>
              })}
            
           
     </div>
  )
}

export default EmployeeList