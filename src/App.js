import React, { Fragment } from 'react';
import Home from './pages/home'
import Login from './pages/login'
import './app.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    // 占位符
    <Fragment>
      <HashRouter>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>

            {/* 下面的暂时不懂 */}
            <Route exact path="/" component={Home} />
            <Redirect to={"/home"} />
            {/* 默认就是首页路由 */}
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
