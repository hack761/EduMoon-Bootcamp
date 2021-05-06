import React from 'react';
import Video from './Video';

class VideoContainer extends React.Component{
    render(){
        return(
            <div class="videos">
            <h1>Recommended</h1>
            <div class="videos__container">
                <Video/>
                <Video/>
                <Video/>
                <Video/>
            </div>
            </div>
        );
    }
}

export default VideoContainer;