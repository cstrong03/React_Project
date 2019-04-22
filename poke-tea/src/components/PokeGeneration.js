import React, { Component } from 'react'

class PokeGeneration extends Component{
  constructor(props){
    super(props);
    this.state = {
      generation: {}
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
    fetch(`https://pokeapi.co/api/v2/generation/generation-ii/`)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
      })
  }


  render(){
    this.handleOnClick()
    return(
      <div>Pokemon</div>
    )
  }
}

export default PokeGeneration
