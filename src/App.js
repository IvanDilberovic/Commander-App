import {Home} from './components/Home';
import {Command} from './components/Command';
import {Navigation} from './navigation/Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          Commander App
        </h3>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path='/command' component={Command}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
