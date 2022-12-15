import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
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
            navigate('/')
        }
    }

    return (
        <Routes>
            <Route path='/login' element={<Login doSetIsLogin={doSetIsLogin}/>}/>
            <Route path='/todo-app' element={<ToDoApp/>}/>
            <Route path='/' element={<ListApp/>}/>
        </Routes>
    );
}

export default RouterPage;