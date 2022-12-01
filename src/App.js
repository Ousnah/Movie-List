import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import HomeScreen from './Screens/Home';

import { StoreContext, StoreProvider } from "./Providers/Store"
import { useContext } from 'react';

function App() {

    return (
        <StoreProvider>
            <BrowserRouter>
                <Navigation />
                
                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                </Routes>

            </BrowserRouter>
        </StoreProvider>
    )

}

function Navigation () {

    const { user } = useContext(StoreContext)

    return (<nav>
        <ul>
            <li> <Link to="/"> Home </Link> </li>
        </ul>
    </nav>)
}

export default App;
