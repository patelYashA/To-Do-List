import React, { useState } from 'react'

const CreateArea = (props) => {
    const [task, setTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(task)
        setTask("")
    }

    return (
        <div>
            <form>
                <input type="text" name='task' value={task} placeholder="Add task" onChange={(e) => setTask(e.target.value)} />
                <button type='submit' className="btn btn-light" onClick={handleSubmit}><i className="bi bi-plus-circle-fill"></i></button>
            </form>
        </div>
    )
}

export default CreateArea
