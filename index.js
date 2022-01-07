import React, { useState, useRef } from 'react';
import ReactDOM from "react-dom";
function Example() {
    const inputEl = useRef("Hello world"); 
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <input name="user" ref={inputEl} /> 
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

const rootElement = document.getElementById("root");


ReactDOM.render(<Example />, rootElement);

