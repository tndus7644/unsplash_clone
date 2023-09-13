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
            <Route path="/signin" Component={SignIn}/>
            <Route exact path="/" Component={Home}/>
            <Route path="/search/:category/:query" Component={Search}/>
            <Route exact path="/topics/:slug" Component={Topic}/>
            <Route component={NotFound}/>
        </Routes>
    )
}

export default Routers;
