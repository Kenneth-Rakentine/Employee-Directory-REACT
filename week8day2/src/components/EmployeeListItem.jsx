import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function EmployeeListItem(props) {
    let { setSelected, employeedata } = useContext(AppContext)
  return (
    <div className='employee'onClick={()=>setSelected(employeedata[props.index])}>
        <img className="profileImg" src={props.employee.image} alt="profile image"/>
        <div>
        <p className='bold'> {props.employee.name}</p>
        <p> {props.employee.role}</p>
        </div>
    </div>
  )
}

export default EmployeeListItem