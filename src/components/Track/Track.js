import React, { Component } from 'react';
import './Track.css';

// Component

class Track extends Component {
  render() {
    
    return (
      <div className="Track">
        <div className="track-thumbnail">
          <img src={this.props.thumbnail} alt="" />
          <button
            className="button-pause"
            onClick={this.props.onPause}>
            <i className="fas fa-pause"></i>
          </button>
        </div>
        <div className="track-information">
          <h3 onClick={this.props.onPlay}>{this.props.title}</h3>
          <div className="track-sub-information">
            <p>{this.props.artist}</p>
            <span>#{this.props.genre}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;