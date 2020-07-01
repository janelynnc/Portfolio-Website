import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebase, { withFirebase, FirebaseContext } from './Firebase';


import { BrowserRouter as Router} from 'react-router-dom';

const App = withFirebase(app);
ReactDOM.render(    <FirebaseContext.Provider value={new Firebase()}>
                        <Router basename={process.env.PUBLIC_URL}>
                            < App />
                        </Router>
                    </FirebaseContext.Provider>, 
                    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
