import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../helper/data'

const Person = () => {
  
    const {username} = useParams()
    const navigate = useNavigate()

    return (
    <div>
    {data.map(({name, email, image, id})=>name===username &&(
    <div key={id}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h4>{email}</h4>
        <button onClick={()=>navigate(-1)} >GO HOME</button>
    </div>
    ))}

    </div>
  )
}

export default Person