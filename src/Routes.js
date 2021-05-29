import {HashRouter, Switch, Route} from 'react-router-dom';
import {AppContext} from './Contexts/AppContext';

import Header from './Components/Header';
import Footer from './Components/Footer';
import CovidInfo from './Components/CovidInfo';

import FindCountry from './Pages/FindCountry';
import Home from './Pages/Home';
import { useContext } from 'react';

const Routes = () => {
    const context = useContext(AppContext);
    const {showInfoText} = context;
    
    return(
        <HashRouter basename="/">
            <Header />
            {showInfoText && (<CovidInfo />)}
            <Switch>
                <Route exact path="/"> 
                    <Home />
                </Route>
                <Route exact path="/find">
                    <FindCountry />
                </Route>
            </Switch>
            <Footer />
        </HashRouter>
    )
}

export default Routes;