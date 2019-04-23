import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import I from './I'

class PokeGeneration extends Component{
  render(){
    return(
      <div>
        <ol>
          <li>
            <Link to='/red'>Red-Blue Version</Link>
          </li>
          <li>
            <Link to='/red'>Yellow Version</Link>
          </li>
          <li>
            <Link to='/red'>Gold-Silver Version</Link>
          </li>
          <li>
            <Link to='/red'>Crystal Version</Link>
          </li>
          <li>
            <Link to='/red'>Ruby-Sapphire Version</Link>
          </li>
          <li>
            <Link to='/red'>Emerald Version</Link>
          </li>
          <li>
            <Link to='/red'>LeafGreen-FireRed Version</Link>
          </li>
          <li>
            <Link to='/red'>Diamond-Pearl Version</Link>
          </li>
          <li>
            <Link to='/red'>Platinum Version</Link>
          </li>
          <li>
            <Link to='/red'>HeartGold-SoulSilver Version</Link>
          </li>
          <li>
            <Link to='/red'>Black-White Version</Link>
          </li>
          <li>
            <Link to='/red'>Colosseum Version</Link>
          </li>
          <li>
            <Link to='/red'>Black2-White2 Version</Link>
          </li>
          <li>
            <Link to='/red'>X-Y Version</Link>
          </li>
          <li>
            <Link to='/red'>OmegaRuby-AlphaSapphire Version</Link>
          </li>
        </ol>

        <main>
          <Route path='/red' render={I} />
        </main>
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
