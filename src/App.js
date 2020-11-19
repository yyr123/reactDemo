import React, { Fragment } from 'react';
import Home from './pages/home'
import Login from './pages/login'
import './app.css';
import loadable from './utils/loadable'
import { HashRouter, Route, Switch } from 'react-router-dom'


// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

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
            {/* <Redirect to={"/home"} /> */}
            <Route component={DefaultLayout} />

            {/* 默认就是首页路由 */}
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
