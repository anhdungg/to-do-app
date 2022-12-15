import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import './ToDoApp.css'
import todo_image_background from '../image/todo_app_background.jpg';

const ToDoApp = () => {

    const [inputNameTask, setInputNameTask] = useState('');
    const [cookies, setCookies] = useCookies(['user'])
    const [isOpenAddNew, setIsOpenAddNew] = useState(false);
    const [listTask, setListTask] = useState([]);

    useEffect(() => {
        if (cookies.toDoListDB !== undefined) {
            setListTask([...cookies.toDoListDB]);
        }
    }, [])

    const doOpenAdd = (e) => {
        if (!isOpenAddNew) {
            setIsOpenAddNew(true);
        } else {
            listTask.push({
                id: listTask.length,
                name: inputNameTask,
                statusTask: false, 
                statusEdit: false
            })
            setInputNameTask('');
            setIsOpenAddNew(false);
            setListTask([...listTask]);
            saveData(listTask);
        }
    }

    const doEditTask = (idTask) => {
        listTask.forEach((task) => {
            if (task.id === idTask) {
                task.statusEdit = true;
                setInputNameTask(task.name);
            } else {
                task.statusEdit = false;
            }
        })
        setListTask([...listTask]);
        saveData(listTask);
    }

    const doCancelEdit = (idTask) => {
        listTask[idTask].statusEdit = false;
        setInputNameTask('');
        setListTask([...listTask]);
        saveData(listTask);
    }

    const doUpdateTask = (idTask) => {
        listTask[idTask].name = inputNameTask;
        listTask[idTask].statusEdit = false;
        setInputNameTask('');
        setListTask([...listTask]);
        saveData(listTask);
    }

    const doDoneTask = (idTask) => {
        listTask[idTask].statusTask = true;
        setListTask([...listTask]);
        saveData(listTask);
    }

    const doDeleteTask = (idTask) => {
        let temp = [];
        listTask.forEach(task => {
            if (task.id != idTask){
                temp.push(task);
            }
        })
        setListTask([...temp]);
        saveData(temp);
    }

    const saveData = (data) => {
        setCookies('toDoListDB', data, { path: '/' , maxAge: 60 * 60 * 24 * 30});
    }

    return (
        <div className="body_todo_app">
            <div className="container-fluid container-md pt-5 pb-5">
                <div className="card rounded">
                    <div className="header">
                        <img src={todo_image_background} alt="Todo App" className="card-img-top"/>
                        <div className="title__caption">
                            <h1 className="title title--primary">Todo's</h1>
                            <h2 className="title title--secondary">to-do list</h2>
                        </div>
                    </div>
                    
                    <div className="card-body ps-0 pe-0">
                        <div className='d-flex justify-content-center pt-0'>
                            <div className="search-box ">
                                <button className="btn-search" onClick={(e) => {doOpenAdd(e)}}>
                                    <i className="fa fa-plus-circle"></i>
                                </button>
                                <input type="text" className={isOpenAddNew ? "input-create-open" : "input-create"} value={inputNameTask} placeholder="Create new task..."
                                    onChange={(e) => {setInputNameTask(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="">
                            <ul className="list__container list__container--primary ps-0">
                                {
                                    listTask.map((item, index) => (
                                        <li key={index} className="list__item list__item--primary">
                                            {
                                                item.statusEdit ? 
                                                    <div className="d-flex bd-highlight mt-1 mb-1 ms-1 me-2">
                                                        <input type="text" className="form-control me-auto bd-highlight" id="exampleFormControlInput1" 
                                                            value={inputNameTask} onChange={(e) => {setInputNameTask(e.target.value)}}/>
                                                        <span className="text-success p-2 bd-highlight" onClick={() => {doUpdateTask(item.id)}}><i className="fas fa-check"></i></span>
                                                        <span className="text-danger p-2 bd-highlight" onClick={() => {doCancelEdit(item.id)}}><i className="fa fa-times"></i></span>
                                                    </div>
                                                :
                                                    <label htmlFor="list-input1" className="list-input-label">
                                                        <span className={item.statusTask ? "text--primary me-auto p-0 bd-highlight text-decoration-line-through" : "text--primary me-auto p-0 bd-highlight"}>{item.name}</span>
                                                        {
                                                            item.statusTask ?
                                                                <span className="text-danger p-2 bd-highlight" onClick={() => {doDeleteTask(item.id)}}><i className='fas fa-trash-alt'></i></span>
                                                            :
                                                                <>
                                                                    <span className="text-success p-2 bd-highlight" onClick={() => {doDoneTask(item.id)}}><i className="fas fa-check"></i></span>
                                                                    <span className="text-info p-2 bd-highlight" onClick={() => {doEditTask(item.id)}}><i className="fas fa-edit"></i></span>
                                                                    <span className="text-danger p-2 bd-highlight" onClick={() => {doDeleteTask(item.id)}}><i className='fas fa-trash-alt'></i></span>
                                                                </>
                                                        }
                                                    </label> 
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoApp;