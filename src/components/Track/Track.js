import React, { Component } from 'react';
import './Track.css';

// Component

class Track extends Component {
  constructor() {
    super();
    this.state = {
      play: false
    }
    this.audio = new Audio();
  }

  togglePlay = (source) => {
    return () => {
      this.audio.src = source;
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="track-thumbnail">
          <img src={this.props.thumbnail} alt="" />
        </div>
        <div className="track-information">
          <h3>{this.props.title}</h3>
          <p>{this.props.artist}</p>
        </div>
        <button className="button-play" onClick={this.togglePlay(this.props.source)}>{this.state.play ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
      </div>
    );
  }
}

export default Track;