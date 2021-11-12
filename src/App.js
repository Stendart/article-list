import { Switch, Route} from "react-router-dom";

import './App.css';

import MainLayout from "./layouts/MainLayout/MainLayout";
import AppArticles from "./Pages/Articles/AppArticles";
import AppUsers from "./Pages/Users/AppUsers";
import AppPhotos from "./Pages/Photos/AppPhotos";
import {PureComponent} from "react";

class App extends PureComponent {
    state={
        navLinks: [
            {
                href: '/',
                text: 'Home'
            },
            {
                href: 'about',
                text: 'Users'
            },
            {
                href: 'service',
                text: 'Photos'
            }
        ]
    }
    render() {
      return (
          <div className="App">
              <MainLayout navLinks={this.state.navLinks}>
                  <Switch>
                      <Route exact path="/" component={AppArticles} />
                      <Route path="/about" component={AppUsers} />
                      <Route path="/service" component={AppPhotos} />
                      {/*<Route path="/service/:id" component={AppPhotos} />*/}
                  </Switch>
              </MainLayout>
          </div>
      );
    }
}

export default App;
