import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'

const getLocalDAta = () => {
    const lists = localStorage.getItem("myToDoList")
    if (lists) {
        return JSON.parse(lists)
    } else {
        return []
    }
}
function TodoListControl() {
    const [input, setInput] = useState("");
    const [items, setItem] = useState(getLocalDAta());

    const inputChangeListener = e => {
        const newInput = e.target.value
        setInput(newInput)
    }
    const addDataHandler = () => {
        if (!input) {
            alert("Please fill your list")
        } else {
            const newInput = {
                id: new Date().getTime().toString(),
                name: input
            }
            setItem([...items, newInput])
        }
    }
    const clearListHandler = () => {
        setItem([])
    }
    const deleteItems = index => {
        const updatedItems = items.filter((item) => {
            return item.id !== index;
        })
        setItem(updatedItems);
    }
    useEffect(() => {
        localStorage.setItem("myToDoList", JSON.stringify(items))
    }, [items])
    return (
        <div>
            <TodoList
                inputChangeListener={inputChangeListener}
                addDataHandler={addDataHandler}
                showItem={items}
                clearListHandler={clearListHandler}
                deleteItems={deleteItems}
            />
        </div>
    )
}

export default TodoListControl;
