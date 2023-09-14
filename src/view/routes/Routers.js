import React from 'react';
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import Topic from "../pages/Topic";
import Search from "../pages/Search";
import {Route, Routes} from "react-router";

const Routers = () => {

    return (
        <Routes>
            <Route path="/signin" element={<SignIn/>}/>
            <Route exact path="/" element={<Home/>} index/>
            <Route path="/search/:category/:query" element={<Search/>}/>
            <Route exact path="/topics/:slug" element={<Topic/>}/>
            <Route element={<NotFound/>}/>
        </Routes>
    )
}

export default Routers;
