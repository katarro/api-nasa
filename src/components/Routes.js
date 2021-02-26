import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EspecificPokemon from './EspecificPokemon'
import Start from './Start'
import Pokedex from './Pokedex'
function Routes (props){
    const { pokemons } = props
    return(
        <Router>
        <Switch>
            <Route exact path="/pokemons/:id" >
                <EspecificPokemon />
            </Route>
            <Route exact path="/">
                <Start />
            </Route>
            <Route exact path="/pokemons">
                <Pokedex pokemons={pokemons} />
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes