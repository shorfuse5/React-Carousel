import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';


// const AsyncBlog = asyncComponent(() => import('./pages/Blog'));
// const AsyncContact = asyncComponent(() => import('./pages/Contact'));
// const AsyncOurNetwork = asyncComponent(() => import('./pages/OurNetwork'));
//
// const AppliedRoute = ({ component: C, path, ...rest }) =>
//     <Route path={path} render={props => <C {...props} {...rest} />} />;

export default class Routes extends Component {
    render() {
        const { location } = this.props;

        return (
            <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        );
    }
}
