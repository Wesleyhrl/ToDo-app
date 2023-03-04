import React from "react";
import "./PageHeader.css"

export default function pageHeader(props) {
    return (
        <header className="header">
            <div>
                <span className="me-3">{props.name}</span> <small>{props.small}</small>
            </div>
            <hr />
        </header>
    )
}