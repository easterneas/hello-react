import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux'

import store from './services';

// import { Header, Button, Table } from './components/index.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './views/Home.js';
// Session 4
import ClassComponent from './views/Sess4ClassComponent.js'; // Class Component
import Component from './views/Sess4Component.js';           // Functional Component
// Session 5-6
import State from './views/Sess5State.js';
import Props from './views/Sess5Props.js';
// import StatefulComponent from './views/Sess6StatefulComponent.js';
// import StatelessComponent from './views/Sess6StatelessComponent.js';
// Session 7
import ComponentLifecycle from './views/Sess7ComponentLifecycle.js';
import Api from './views/Sess7Api.js';
// Session 8
// import Api from './views/Api.js';
// Session 9
// -- App.js dilibatkan pada sesi ini
// -- Dokumentasi: https://reactrouter.com/web/api/Route
// import Api from './views/Api.js';
// Session 10
// -- App.js dilibatkan pada sesi ini
import Redux from './views/Sess10Redux.js';
// Session 11
import ReduxWithMiddleware from './views/Sess11ReduxWithMiddleware.js';
import FormErrorHandler from './views/Sess11ErrorHandler.js';

import './App.css';
import Sidebar from './components/Sidebar.js';
import Error from './components/Error.js';

function App() {
  return (
    <div className="App">
      {/* Penggunaan Provider diajarkan pada Session 10 */}
      <Provider store={ store }>
        {/* Penggunaan Router diajarkan pada Session 9 */}
        <Router>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(250px, 20vw) 1fr" }}>
            <Sidebar />
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 80px", height: "100vh", overflowY: "auto" }}>
              {/* Ini diajarkan pada Session 5 */}
              <Header />

              {/* Hint untuk Session 9 */}
              <div style={{ width: "70%", margin: "0 auto" }}>
                <Error />
                <Switch>
                  {/* Session 4 */}
                  <Route exact path="/class-component" component={ ClassComponent } />
                  <Route exact path="/functional-component" component={ Component } />
                  {/* Session 5-6 */}
                  <Route exact path="/stateful-component" component={ State } />
                  <Route exact path="/stateless-component" component={ Props }>
                    <Props nama="Budi" email="budi@mail.com" phone="+6287896541230" />
                  </Route>
                  {/* Session 7 */}
                  <Route exact path="/component-lifecycle" component={ ComponentLifecycle } />
                  {/* exact akan membuat Router mencari path yang benar-benar sesuai */}
                  <Route exact path="/api" component={ Api } />
                  {/* Session 10 */}
                  <Route exact path="/redux" component={ Redux } />
                  {/* Session 11 */}
                  <Route exact path="/redux-with-middleware" component={ ReduxWithMiddleware } />
                  <Route exact path="/form-error-handler" component={ FormErrorHandler } />

                  {/* mencari dari string awal */}
                  <Route path="/"> 
                    <Home />
                  </Route>
                </Switch>
              </div>

              <Footer batchName="Hello React" />
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
