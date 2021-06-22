import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes/Routes';
import store from '../m2-bll/store';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Routes/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
