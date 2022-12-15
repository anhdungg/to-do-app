import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

const Login = (props) => {
    const [heightMain, setHeightMain] = useState(0)
    const [isHiddenAlert, setIsHiddenAlert] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookies] = useCookies(['user'])
    const navigate = useNavigate();

    useEffect (() => {
        window.addEventListener("resize", () => {
            setHeightMain(window.screen.height-300);
        });
        if (cookies.isLogin == 'true') {
            navigate('/to-do-app')
        }
    });

    const doSubmit = () => {
        if (username !== 'DungLVA' && password !== 'DungLVA') {
            setIsHiddenAlert(false);
        } else {
            setIsHiddenAlert(true);
            props.doSetIsLogin(isHiddenAlert)
        }
    }

    return (
        <div className="container-fluid container-md pb-5" style={{height: heightMain}}>
            <div className="row mt-3">
                <div className="col">
                    <h2 className="text-center text-primary">
                        Welcome to web app using ReactJS
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-4"></div>
                <div className="col">
                    <img src={logo} alt="Logo react" className="img-fluid App-logo"/>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row mt-3 pb-5 mb-5">
                <div className="col">
                    <div className="card border-dark">
                        <div className="card-header">
                            <h1 className="text-center">Login to list app</h1>
                        </div>
                        <div className="card-body mb-5 ms-sm-5 me-sm-5">
                            <div className="alert alert-danger" role="alert" 
                                style={{display: isHiddenAlert ? 'none':'block'}}>
                                Username or password invalid!!!
                            </div>
                            <div className="form-floating mt-3">
                                <input type="text" className="form-control" id="username" 
                                    placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="form-floating mt-3">
                                <input type="password" className="form-control" id="password" 
                                    placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="text-center mt-3">
                                <button type="button" className="btn btn-primary ps-5 pe-5" 
                                    onClick={(e) => {doSubmit(e)}}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;