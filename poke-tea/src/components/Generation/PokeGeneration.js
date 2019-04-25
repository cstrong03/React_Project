import React, { Component } from 'react'


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
      <h1>Start clicking to see the pokemon series expand over the years</h1>

      <button class="button is-rounded" className="button-1"onClick={()=>this.gimmeI()}>Red Green Blue Yellow</button>
      <button class="button is-rounded" className="button-2"onClick={()=>this.gimmeII()}>Gold Sliver Crystal</button>
      <button class="button is-rounded" className="button-3"onClick={()=>this.gimmeIII()}>Ruby Sapphire FireRed Leaf Green Emerald</button>
      <button class="button is-rounded" className="button-4"onClick={()=>this.gimmeIV()}>Diamond Pearl Platinum HeartGold Soul Silver</button>
      <button class="button is-rounded" className="button-5"onClick={()=>this.gimmeV()}>Black White Black2 White2</button>
      <button class="button is-rounded" className="button-6"onClick={()=>this.gimmeVI()}>Omega Ruby X Alpha Sapphire Y</button>

      {this.state.print}
      </div>
    )
  }
}

export default PokeGeneration
