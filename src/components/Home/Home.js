import React, { Component } from 'react';
import './Home.css';
import data from './../../modals/data.json';

// Component
import Track from './../Track/Track';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      isShowPlayer: false
    }
    this.audio = new Audio();
  }

  onTogglePlay = (id) => {
    return () => {
      this.audio.src = data.music[id-1].source;
      this.setState({ 
        play: !this.state.play 
      }, () => {
        this.state.play ? this.audio.play() : this.audio.pause()
      });
    }
  }
  
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
                id={track.id}
                genre={track.genre}
                onTogglePlay={ this.onTogglePlay(track.id) }
                isPlay={ this.state.play }
                />
            );
          })
        }
      </div>
    );
  }
}

export default Home;