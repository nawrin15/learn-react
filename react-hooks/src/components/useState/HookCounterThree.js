import React, {useState} from 'react'
//object state
function HookCounterThree() {
  
  const [name, setName] = useState({firstName: "", lastName: ""})

  return (
    <div>
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
        <input type="text" alue={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
        <h2>first name: {name.firstName}</h2>
        <h2>last name: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterThree;