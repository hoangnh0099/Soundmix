import React, { Component } from 'react';
import './Home.css';
import data from './../../modals/data.json';

// Component
import Track from './../Track/Track';

class Home extends Component {
  
  
  render() {
    return (
      <div className="Home">
        <h1>Track</h1>
        {
          data.music.map((track, index) => {
            return (
              <Track 
                key={index} 
                artist={track.artist}
                thumbnail={track.thumbnail}
                title={track.title}
                source={track.source}
                id={track.id} />
            );
          })
        }
      </div>
    );
  }
}

export default Home;