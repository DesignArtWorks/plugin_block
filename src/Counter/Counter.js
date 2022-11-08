import React from "react";

const Counter = () =>{
    const [count, setCount] = React.useState(0);

    function handleClick(event) {
        event.preventDefault();

        setCount((previousValue)=>{
            return previousValue + 1;
        });
    }

    return <a href="#" onClick={handleClick}>Counter: {count}</a>
}

export default Counter;