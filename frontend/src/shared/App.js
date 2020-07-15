import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthWrapper, AuthContent } from '../components/Auth';
import { NextPage } from '../pages';

class App extends Component {
    render(){
        return (
            <div>
                <AuthWrapper>
                    <Route exact path="/" component={AuthContent}/>
                    <Switch>
                        <Route path="/nextpage/:id" component={NextPage}/>
                        <Route path="/nextpage" component={NextPage}/>
                    </Switch>
                </AuthWrapper>
            </div>
        )
    }
}

export default App;