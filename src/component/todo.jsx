import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import todo from "../images/todo.jpg";

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([])

    const AddItem = () => {
        if (!inputData) {
            alert("Add Item Could'nt Blank")
        } else {
            setItems([...items, inputData])
            setInputData('')
        }
    }
    const DelItem = (id) => {
        const updatedItems = items.filter((elem, index) => {
            return index !== id
        })
        setItems(updatedItems);
    }
    const removeAll = () => {
        setItems([]);
    }
    return (<>
        <div className="container">
            <div className="row m-4">
                <div className="col-6 mx-auto">
                    <div className="card shadow">
                        <div className="card-header d-flex justify-content-between">
                            <h3>ToDoList</h3>
                            <img src={todo} alt="todolist" className="img-fluid todo_img" />
                        </div>
                        <div className="card-body">
                            <div className="additems">
                                <div className="input-group mb-3">
                                    <input type="text" name="addlist" placeholder="Add List Here..." className="form-control form-control-sm" aria-describedby="basic-addon2"
                                        value={inputData}
                                        onChange={(e) => setInputData(e.target.value)}
                                    />
                                    <span className="input-group-text add-btn" id="basic-addon2"><i className="fa-solid fa-circle-plus" onClick={AddItem}></i></span>
                                </div>
                            </div>
                            <div className="showItems mb-3">
                                {items.map((elem, index) => {
                                    return (
                                        <div className="eachItem d-flex justify-content-between mb-3" key={index}>
                                            <p>{elem}</p><i className="fa-solid fa-trash-can" title="Delete Item" onClick={() => DelItem(index)}></i>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Clear All List */}
                            <div className="showItems ">
                                <div className="d-grid gap-2 col-6 mx-auto mb-2">
                                    <button className="btn btn-outline-danger" type="button" onClick={removeAll}>Clear All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Todo;
