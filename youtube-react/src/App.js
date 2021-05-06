import React from "react";
import youtube from "./api/youtube";
import Header from './components/Header';
import SideBar from "./components/SideBar";
import VideoContainer from "./components/VideoContainer";

class App extends React.Component {

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    console.log(response)
  } 



  render(){
    return (
      <div>
        <Header onFormSubmit={this.onTermSubmit}/>
        <div class="mainBody">
          <SideBar/>
          <VideoContainer/>
        </div>
      </div>
    );
  }
}

export default App;
