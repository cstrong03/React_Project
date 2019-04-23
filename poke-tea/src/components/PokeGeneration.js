import React, { Component } from 'react'

class PokeGeneration extends Component{
  constructor(props){
    super(props);
    this.state = {
      generation: []
    }
  }

  displayGenerations(){
    fetch(`https://pokeapi.co/api/v2/version-group`)
      .then(response => response.json())
      .then(data =>{
        this.setState({
          generation: data.results
        })
      })
  }


  render(){
    this.displayGenerations();
    return(
      <div>
        {
          this.state.generation.map(game => {
            return(
              <div>
              <h3 key={game[0]}>{game.name}</h3>
              </div>

            )
          })
        }
      </div>
    )
  }
}

export default PokeGeneration
