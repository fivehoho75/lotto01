import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, ResultPage } from 'components';

class Apptemp extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/result" component={ResultPage}/>
            </div>
        );
    }
}

export default Apptemp;