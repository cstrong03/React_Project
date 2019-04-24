import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"

class PokeGeneration extends Component{

constructor(props){
  super(props);
  this.state = {
    print:[]
  }
}

  gimmeI = () => {
    let counter=0;
    let i = this.props.poke.map(pokemon => {
      counter++;
      let srcLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        if (counter < 152){
          return (<div key={pokemon.entry_number}>
                <p>{pokemon.pokemon_species.name}</p>
                <img src={srcLink} alt='images'/>
            </div>)
        }
        })
        this.setState({
        print: i
      })
  }

  gimmeII = () => {
    let counter=0;
    let i = this.props.poke.map(pokemon => {
      counter++;
      let srcLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        if (counter > 151 && counter < 252){
          return (<div key={pokemon.entry_number}>
                <p>{pokemon.pokemon_species.name}</p>
                <img src={srcLink} alt='images'/>
            </div>)
        }
        })
        this.setState({
        print: i
      })
  }

  gimmeIII = () => {
    let counter=0;
    let i = this.props.poke.map(pokemon => {
      counter++;
      let srcLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        if (counter > 251 && counter < 387){
          return (<div key={pokemon.entry_number}>
                <p>{pokemon.pokemon_species.name}</p>
                <img src={srcLink} alt='images'/>
            </div>)
        }
        })
        this.setState({
        print: i
      })
  }

  gimmeIV = () => {
    let counter=0;
    let i = this.props.poke.map(pokemon => {
      counter++;
      let srcLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        if (counter > 386 && counter < 495){
          return (<div key={pokemon.entry_number}>
                <p>{pokemon.pokemon_species.name}</p>
                <img src={srcLink} alt='images'/>
            </div>)
        }
        })
        this.setState({
        print: i
      })
  }

  gimmeV = () => {
    let counter=0;
    let i = this.props.poke.map(pokemon => {
      counter++;
      let srcLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        if (counter > 494 && counter < 650){
          return (<div key={pokemon.entry_number}>
                <p>{pokemon.pokemon_species.name}</p>
                <img src={srcLink} alt='images'/>
            </div>)
        }
        })
        this.setState({
        print: i
      })
  }

  gimmeVI = () => {
    let counter=0;
    let i = this.props.poke.map(pokemon => {
      counter++;
      let srcLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`
        if (counter > 649 && counter < 721){
          return (<div key={pokemon.entry_number}>
                <p>{pokemon.pokemon_species.name}</p>
                <img src={srcLink} alt='images'/>
            </div>)
        }
        })
        this.setState({
        print: i
      })
  }



  render(){
    return(
      <div>
      <button onClick={()=>this.gimmeI()}>Red Green Blue Yellow</button>
      <button onClick={()=>this.gimmeII()}>Gold Sliver Crystal</button>
      <button onClick={()=>this.gimmeIII()}>Ruby Sapphire FireRed Leaf Green Emerald</button>
      <button onClick={()=>this.gimmeIV()}>Diamond Pearl Platinum HeartGold Soul Silver</button>
      <button onClick={()=>this.gimmeV()}>Black White Black2 White2</button>
      <button onClick={()=>this.gimmeVI()}>Omega Ruby X Alpha Sapphire Y</button>

      {this.state.print}
      </div>
    )
  }
}

export default PokeGeneration

//
// {
//   this.state.generation.map(game => {
//                 console.log(this.state.generation[0])
//     return(
//       <div key={game.url}>
//       <h3>{game.name}</h3>
//       </div>
//
//     )
//   })
// }



// constructor(props){
//   super(props);
//   this.state = {
//     generation: []
//   }
// }
// componentDidMount(){
//       this.displayGenerations();
// }
//
// displayGenerations(){
//   fetch(`https://pokeapi.co/api/v2/version-group`)
//     .then(response => response.json())
//     .then(data =>{
//       this.setState({
//         generation: data.results
//       })
//                 console.log(data.results)
//     })
// }
