import React, { use } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
        }
    }
  return (
    <div className="create_form">
        <input type="text" placeholder="Enter task" onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create