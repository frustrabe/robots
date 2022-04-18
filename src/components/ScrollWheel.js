import React from "react";

//props
//state
//!children!
// We create our Scroll Wrapping of CardList using 'props.children'
//With this method we are able to create reusable components

const ScrollWheel = (props) => {
    //props.children is here (in return) by default, being part of React
    return (
        <div style={{ overflowY: 'scroll', border: '0px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
}

export default ScrollWheel;