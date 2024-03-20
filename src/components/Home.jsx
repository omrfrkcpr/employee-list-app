import React, { useState } from 'react'
import List from './List';
import data from '../helper/data';

function Home() {
    const [employees, setEmployees] = useState(data);
    // console.log(data);
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(5)
  
    const handlePrev =()=>{
      if(from>1 && to>5) {
        setFrom(from-5)
        setTo(to-5)
      }
    }
  
    const handleNext =()=>{
      if(from<16 && to<20) {
        setFrom(from+5)
        setTo(to+5)
      }
    }
  
    const filterEmployees =(arr)=>{
      const newArray = arr.slice(from-1, to)
      return newArray
    }
   
    return (
      <main>
        <section className="container">
          <h3>Employee List</h3>
          <h5>
            (Employees {from} to {to})
          </h5>
          <List employees={filterEmployees(employees)}/>
          <div className='btns'>
            <button onClick={handlePrev} >Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </section>
      </main>
    );
  }

export default Home