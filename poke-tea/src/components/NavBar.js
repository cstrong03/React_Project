import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import PokeGeneration from './Generation/PokeGeneration'
import Home from './Home'
import Contact from './Contact'


class Navbar extends Component{
  constructor(props){
    super(props);
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
      })
  }
  render(){
    const { pokemon } = this.state
    return(
      <div>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://www.pokemon.com/us/">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81dewrr6%2BWL._SL1500_.jpg" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <Link to='/home'>Home</Link>
            </a>

            <a class="navbar-item">
              <Link to='/pokegeneration'>PokeGeneration</Link>
            </a>

            <a class="navbar-item">
              <Link to='/contact'>Contact</Link>
            </a>

          </div>

        </div>
      </nav>

      <main>
          <Route exact path='/home' component={Home} />

          <Route exact path='/contact' render={Contact} />

          <Route exact path='/pokegeneration'
          render={()=> <PokeGeneration poke={pokemon} />}
            />
      </main>

      </div>


    )
  }
}

export default Navbar
