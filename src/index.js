import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

// Reducer for our search results
const giphySearchResults = (state = [], action) => {
  if (action.type === "SEARCH_RESULTS") {
    return action.payload;
  }
  else if (action.type === "SEARCH_RESULTS_FROM_SAGA") {
    return action.payload;
  }
  else{
      return state;
  }
};

function* watcherSaga(action) {
  yield takeEvery("SEARCH_RESULTS", searchSaga);
}

function* searchSaga(action) {
  console.log("in search saga:", action);

  try {
    yield axios.post("/giphy", {searchQuery: action.payload});
    const response = yield axios.get('/giphy');
    console.log('saga axios get response:', response);
    yield put({ type: "SEARCH_RESULTS_FROM_SAGA", payload: response });
  } catch (err) {
    console.log(err);
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    // reducers
    giphySearchResults
  }),
  applyMiddleware(sagaMiddleware, logger),
);

// use watcher
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
