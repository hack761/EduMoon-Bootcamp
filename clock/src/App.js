import React from "react";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    )
  }


  tick(){
    this.setState({
      date:new Date()
    })
  }

  render(){
    return (
      <div style={{display:'flex',width:'100%',height:'300px',justifyContent:'center',alignItems:'center'}}>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;
