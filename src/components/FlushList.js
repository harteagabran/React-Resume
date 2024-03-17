import React from "react";

export default function Section({points = []}) {
    return (
        <>
        {points.map(p => (
            <li className="list-group-item py-0">{p}</li>
        ))}
        </>
    )
}