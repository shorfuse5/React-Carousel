import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route component={Routes} />
            </div>
        );
    }
}

export default App;
