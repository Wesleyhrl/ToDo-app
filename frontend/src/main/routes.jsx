import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from '../pages/Todo';


export default function Navigator(props) {
    return (
        <div className="container">
            <Routes>
                <Route exact path="/todos" element={<Todo />} />
                <Route path="*" element={<Todo />} />
            </Routes>
        </div>
    )
}