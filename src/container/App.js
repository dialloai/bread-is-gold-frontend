import React from 'react';
import HomeScreenContainer from "./HomeScreenContainer";
import FavoriteRecipesContainer from "./FavoriteRecipesContainer";
import { Route, Switch } from 'react-router-dom';
import ChefsContainer from "./ChefsContainer";
import AllRecipesContainer from "./AllRecipesContainer";
import RecipeDetailsContainer from "./RecipeDetailsContainer";
import WelcomeContainer from "./WelcomeContainer";
import ChefRecipesContainer from "./ChefRecipesContainer";

function App() {

  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomeScreenContainer} />
            <Route exact path='/welcome' component={WelcomeContainer}/>
            <Route exact path='/favorites' component={FavoriteRecipesContainer} />
            <Route exact path='/chefs' component={ChefsContainer} />
            <Route exact path='/recipes' render={routerProps => <AllRecipesContainer {...routerProps}/>}/>
            <Route exact path='/recipes/:id' render={routerProps => <RecipeDetailsContainer {...routerProps}/>} />
            <Route exact path='/recipes/chefs/:chefId' render={routerProps => <ChefRecipesContainer {...routerProps}/>} />
        </Switch>
    </div>
  );
}

export default App;
