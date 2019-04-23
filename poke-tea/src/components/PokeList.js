import React, { Component } from 'react'

class PokeList extends Component{
  constructor(){
    super();
    this.state = {
      pokemon: []
    }
  }

  componentDidMount(){
        this.handleOnClick()
  }

  handleOnClick(){
    fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
      .then(response => response.json())
      .then(data =>{
        this.setState({
          pokemon: data.pokemon_entries
        })
        console.log(data.pokemon_entries)
      })
  }


  render(){
    return(
      <div>

          {
            this.state.pokemon.map(pokemon => {
              if (pokemon.entry_number < 152) {
                return(
                  <p>{pokemon.pokemon_species.name}</p>
                  )
              }
            })
          }



      </div>
    )
  }
}

export default PokeList
