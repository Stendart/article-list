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
                text: 'Home',
                component: AppArticles,
                isExec: true
            },
            {
                href: 'about',
                text: 'Users',
                component: AppUsers,
                isExec: false
            },
            {
                href: 'service',
                text: 'Photos',
                component: AppPhotos,
                isExec: false
            },

        ]
    }

    render() {
      return (
          <div className="App">
              <MainLayout navLinks={this.state.navLinks}>
                  <Switch>
                      {this.state.navLinks.map((navItem) => {
                          return <Route exact={navItem.isExec} path={`/${navItem.href}`} component={navItem.component} key={navItem.text} />
                      })}

                      {/*<Route exact path="/" component={AppArticles} />*/}
                      {/*<Route path="/about" component={AppUsers} />*/}
                      {/*<Route path="/service" component={AppPhotos} />*/}

                      {/*<Route path="/service/:id" component={AppPhotos} />*/}
                  </Switch>
              </MainLayout>
          </div>
      );
    }
}

export default App;
