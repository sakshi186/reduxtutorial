import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let rootReducer=(initialState="sakshi",action)=>{

  let newState = initialState;
  if(action.type === "hello2"){
    newState = action.myfriend;
    return newState;
  }
  return newState;
}

let store = createStore(rootReducer);


/*console.log(store);
store.subscribe(()=>{
  console.log(store.getState())
});
store.dispatch({type:"hello",data:"harshad"})*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
 </React.StrictMode>
);


