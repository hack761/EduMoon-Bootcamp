import React from 'react'

function Person(props) {
    // console.log(props)
    // background-color -> backgroundColor
    return (
        <div>
            <h1 style={{color:"orange"}}>I am {props.name}.</h1>
            <h3 style={{backgroundColor:"lightblue"}}>I work as a {props.job}.</h3>
            <h4>I love {props.hobby}.</h4>
        </div>
    )
}

export default Person
