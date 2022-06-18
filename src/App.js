import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';




function App(props) {
 
  return (
    <div className="App">
      {props.myStore}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e)=>{props.b()}}>Click Me</button>
      </header>
    </div>
  );
}

let mapStateToProps=(state)=>{  //state is store object
  return {
    myStore:state
  };
}
let mapDispatchToProps=(dispatch)=>{
  return {

   a:function(){ dispatch({type:"hello1",myfriend:"hellodata1"})},
   b:()=>{dispatch({type:"hello2" , myfriend:"hellodata2"})},
   c:function(){dispatch({type:"hello3",myfriend:"hellodata3"})}

  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
