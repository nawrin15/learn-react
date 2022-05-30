import React, {useState, useEffect} from 'react'

function HookCounterOne_2() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // only update change value
  useEffect(() => {
      console.log("useEffect - Updating document title")
      document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne_2;