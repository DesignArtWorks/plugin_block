import React from 'react';
const Header = (props) => {
    let [clock, setClock] = React.useState(Date().toLocaleString());

    setInterval(()=>{
        setClock(Date().toLocaleString());
    },1000)

    return <h1>Hello World! {props.name} <br/> {clock}</h1>;
}

export default Header;