import React from 'react'

// function Person(){
//     return(
//         <div>

//         </div>
//     )
// }
class Person extends React.Component{
    // console.log(props)
    // background-color -> backgroundColor
    render(){
        return (
            <div>
                <h1 style={{color:"orange"}}>I am Karun.</h1>
                <h3 style={{backgroundColor:"lightblue"}}>I work as a Web Dev.</h3>
                <h4>I love Coding.</h4>
            </div>
        );
    }
}

export default Person
