import { useState } from "react";

export function Button() {
    //let count = 0;
    const [count, setCounter] = useState(0);

    function inc() {
        setCounter(count + 1);
    }

    return (
        <button onClick={inc}>{count}</button>
    );
}
