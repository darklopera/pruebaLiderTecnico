import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Login />}/>
                <Route exact path="/home" element={<Home />}/>
            </Switch>
        </BrowserRouter>
    )
}