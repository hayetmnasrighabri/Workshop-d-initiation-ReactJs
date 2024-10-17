import React, { useEffect, useState } from 'react'


function Home() {
  const [name,setName]=useState('home')
  const [form, setForm]=useState('')
  const onChange=(e)=>{
  setForm(e.target.value)    
  }
  const changeName=()=>{
    setName(form)
  }
  useEffect(()=>{
    alert(name)
  },[name])
  return (
    <div>
      <h1>{name}</h1>
      <input name='name' type='text'  value={form} onChange={onChange}/>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}

export default Home
