import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CallbackPage from './pages/callback';
import Home from './pages/home';
import LoginPage from './pages/login';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route path="/callback">
                        <CallbackPage />
                    </Route>
                    <Route path="/create-playlist">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;