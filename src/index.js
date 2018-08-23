import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import just the default export
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import both default and named exports
//import myDemo,{MyTest} from './myModule';
import Hello from './Hello'
import Student from './Student'


function printName(){
    return("Teststst")
}
//Passing a method to the Component Hello as a prop
ReactDOM.render(<Hello name={printName}/>,document.getElementById('hello'));
//Rendering a Component App to the html element root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Student name={printName} roll="121" />,document.getElementById('student'))

