import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  

  handleKeyDown = (event) => {
    // switch (event.key) {
    //   case 'a':
    //     resize('+')
    //   case 's':
    //     resize('-')
    // }

    if (event.key === 'a') {
          resize('+')
    } else if (event.key === 's') {
          resize('-')
    }

  }

  handleClick = (event) => {
    toggleCycling()
  }

  
  render() {
    return (
      <canvas onKeyPress={this.handleKeyDown}
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
