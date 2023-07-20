import React, { useContext, useState } from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import { AppContext } from '../contexts/app_context'


function Rightcolumn(props) {

  //destructure the needed data (selected) from our app Context
let { selected } = useContext(AppContext)

  return (
    <div className="rightColumn">
                <Header container={"right"}/>
              <div className="selectedEmployee">
                <div className="selectedMain">
                <img className="profileImg" src={selected.image} alt="profile image"/>
        <p className='bold'> {selected.name}</p>
        <p> {selected.role}</p>
                </div>
                <div className="selectedOffice">
                  <p className='bold'>Call Office</p>
                  <p>{selected.office}</p>
                </div>
                <div className="selectedMobile">
                <p className='bold'>Call Mobile</p>
                  <p>{selected.mobile}</p>
                </div>
                <div className="selectedSms">
                <p className='bold'>SMS</p>
                  <p>{selected.sms}</p>
                </div>
                <div className="selectedEmail">
                <p className='bold'>Email</p>
                  <p>{selected.email}</p>
                </div>
              </div>
        </div>
        
  )
}

export default Rightcolumn