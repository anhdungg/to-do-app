import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect } from "react";
import { useCookies } from 'react-cookie';
import Login from "../login/Login";
import ListApp from '../list_app/ListApp';
import ToDoApp from '../to_do/ToDoApp';

const RouterPage = () => {

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(['user'])

    useEffect (() => {
        if (cookies.isLogin != 'true') {
            navigate('/login')
        }
    }, [])

    const doSetIsLogin = (statusLogin) => {
        setCookies('isLogin', statusLogin, { path: '/' , maxAge: 60 * 60 * 24 * 30});
        if (statusLogin) {
            navigate('/to-do-app')
        }
    }

    return (
        <Routes>
            <Route path='/to-do-app/login' element={<Login doSetIsLogin={doSetIsLogin}/>}/>
            <Route path='/to-do-app/todo-app' element={<ToDoApp/>}/>
            <Route path='/to-do-app' element={<ListApp/>}/>
        </Routes>
    );
}

export default RouterPage;