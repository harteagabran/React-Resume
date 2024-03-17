import React from "react";

export default function Header({name = "", email=""}) {
    return (
    <div className="col">
        <h1 className="text-center display-1 fw-bold">{name}</h1>
        <p className="text-center text-gray"><i>{email}</i></p>
    </div>
    )
}