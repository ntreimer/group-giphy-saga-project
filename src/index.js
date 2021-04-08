import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createsagaMiddleware from 'redux-saga';
import {put,TakeEvery} from 'redux-saga/effects';


// Reducer for our search results
const giphySearchResults = (state=[], action) => {
    if (action.type === 'SEARCH_RESULTS'){

    }
}


function* watcherSaga(action){
  yield takeEvery('SEARCH_RESULTS', searchSaga);
}

function* searchSaga(action){
    console.log('in search saga:', action);
}

const store = createStore(
    combineReducers({
        // reducers
        //giphySearchResults: giphySearchResults
    }),
    applyMiddleware( logger )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
