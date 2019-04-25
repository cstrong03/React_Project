import React, { Component } from 'react'
import soundfile from './PokemonTheme.mp3'

class Sound extends Component{
  constructor(props) {
  super(props);
  this.state = {
    play: false,
    pause: true,
  }
  this.audio = new Audio(soundfile);
}

play = () => {
  console.log('i was click')
this.setState({ play: true, pause: false })
  this.audio.play();
}

pause = () => {
this.setState({ play: false, pause: true })
  this.audio.pause();
}

render() {

return (
  <div>
    <button onClick={this.play}>Play</button>
    <button onClick={this.pause}>Pause</button>
  </div>
    );
  }
}
export default Sound
