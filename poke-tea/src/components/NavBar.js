import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import PokeGeneration from './PokeGeneration'
import PokeList from './PokeList'
import PokeInfo from './PokeInfo'

class Navbar extends Component{
  render(){
    return(
      <div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/pokegeneration'>PokeGeneration</Link>
            </li>
            <li>
              <Link to='/pokelist'>PokeList</Link>
            </li>
            <li>
              <Link to='/pokeInfo'>PokeInfo</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Route path='/pokegeneration' component={PokeGeneration} />
          <Route path='/pokelist' component={PokeList} />
          <Route path='/pokeinfo' render={PokeInfo} />
        </main>
      </div>

    )
  }
}

export default Navbar
