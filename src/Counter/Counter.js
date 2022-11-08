import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(0);
    let test1;

    React.useEffect(() => {
        let test = count.toString();
        localStorage.setItem('count', test);
    }, [count]);

    React.useEffect(() => {
        (localStorage.getItem('count')) ? setCount(parseInt(localStorage.getItem('count'))) : sessionStorage.getItem('count');
    }, [count]);

    if (count !== 0){
        test1 = count;
    } else {
        test1 = sessionStorage.getItem('count');
    }

    function handleClick(event) {
        event.preventDefault();

        setCount((previousValue) => {
            return previousValue + 1;
        });
    }

    return <a href={'/'} onClick={handleClick}>Counter: {test1}</a>
}

export default Counter;