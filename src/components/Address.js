import React from "react";

export default function Address({address = []}) {
    return (
    <div id="address" className="d-flex flex-column col-3 text-center justify-content-center">
        {address.map(line => (
            <b className="fs-6">{line}</b>
        ))}
    </div>
    )
}