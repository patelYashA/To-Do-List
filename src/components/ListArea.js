import React, { useEffect, useState } from 'react'

const ListArea = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [task, setTask] = useState("")

    useEffect(() => {
        setTask(props.task)
    }, [props.task])

    function handleDelete(e) {
        props.onDelete(props.id)
    }

    function handleEdit() {
        setIsEdit(true)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onEdit()
        setIsEdit(false)
        setTask(task)
    }

    return (
        <div>{isEdit === true ? (<form>
            <input type="text" name='task' value={task} placeholder="Edit task" onChange={(e) => setTask(e.target.value)} />
            <button type='submit' className="btn btn-light" onClick={handleSubmit}><i className="bi bi-check-square-fill"></i></button>
        </form>) :
            (<p>{task} <button className="btn btn-light" onClick={handleEdit}><i className="bi bi-pencil-square"></i></button> <button className="btn btn-light" onClick={handleDelete}><i className="bi bi-trash-fill"></i></button></p>)}
        </div>
    )
}

export default ListArea
