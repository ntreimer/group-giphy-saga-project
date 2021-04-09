import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';


function App(props) {
  return (
    <div>

      <header className='header'>
        <h1>Giphy Search!</h1>
      </header>

      <Router>
        <Route path='/' exact>
          <SearchList />
        </Route>
        <Route path='/favorites' exact>
          <FavoritesList />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
