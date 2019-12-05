import React from 'react';
import '../App.css';
import HomeScreenContainer from "./HomeScreenContainer";
import FavoriteRecipesContainer from "./FavoriteRecipesContainer";
import { Route, Switch } from 'react-router-dom';
import ChefsContainer from "./ChefsContainer";
import AllRecipesContainer from "./AllRecipesContainer";
import RecipeDetails from "../components/RecipeDetails";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomeScreenContainer} />
            <Route exact path='/favorites' component={FavoriteRecipesContainer} />
            <Route exact path='/chefs' component={ChefsContainer} />
            <Route exact path='/recipes' render={routerProps => <AllRecipesContainer {...routerProps}/>}/>
            <Route exact path='/recipes/:id' component={RecipeDetails} />
        </Switch>
    </div>
  );
}

export default App;
