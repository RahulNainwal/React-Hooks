import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hooks1 from './functionalComponents/Hooks1'
import Hooks2 from './functionalComponents/Hooks2'
import Hooks3 from './functionalComponents/Hooks3'
import Hooks4 from './functionalComponents/Hooks4'
import Hooks5 from './functionalComponents/Hooks5'
import Hooks6 from './functionalComponents/Hooks6'
import RandomColorGenerator from './functionalComponents/RandomColorGenerator'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RandomColorGenerator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();