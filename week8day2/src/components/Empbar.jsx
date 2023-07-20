import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

function Empbar(props) {
  return (
    <div className="leftColumn">
    <Header container={"left"}/>
    <SearchBar/>
   
    <div className="employeeList">
    
      <EmployeeList/>

    </div>
    </div>
  )
}

export default Empbar
