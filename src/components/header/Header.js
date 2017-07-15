import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="color-brand navbar-brand" href="">Lotto Creator</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <p className="navbar-text navbar-right">Signed in as <a href="" className="navbar-link">Mark Otto</a></p>
                        </div>
                        
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;