import React from 'react'
import './todolist.css'
import { Scrollbars } from 'react-custom-scrollbars';


function TodoList(props) {
    return (
        <>
            <div className="container">
                <div className="wrap">
                    <div className="todo_title">
                        <h1>Add your Daily List</h1>
                        <p>Your added items {props.showItem.length}</p>
                    </div>
                    <div className="todo_input">
                        <input type="text" placeholder="Add task here..." onChange={props.inputChangeListener} />
                        <button className="btn"><i onClick={props.addDataHandler} className="fas fa-plus"></i></button>
                    </div>
                    <div className="todo_list">
                        <Scrollbars>
                            {
                                props.showItem.map((item, index) => {
                                    return (
                                        <div className="show_item" key={index}>
                                            <p>{item.name}</p>
                                            <button className="btn_icon" onClick={() => props.deleteItems(item.id)} ><i className="fas fa-trash"></i></button>
                                        </div>
                                    );
                                })
                            }
                        </Scrollbars>
                    </div>
                    <div className="remove_item">
                        <button className="button" onClick={props.clearListHandler}>Clear All</button>
                    </div>
                    <div className="footer">
                        <p>Developer by <a href="https://facebook.com/devsabirul80" target="blank" >shishir</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList;
