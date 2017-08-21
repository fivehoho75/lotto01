import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class ResultPage extends Component {
    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state
        
        return (
            <div>
                <Menu>
                    <Menu.Item header className="logo"><Link to="/">Lotto</Link></Menu.Item>  
                    <Menu.Item name='TT' active={activeItem === 'TT'} onClick={this.handleItemClick} />
                    <Menu.Item name='Result' active={activeItem === 'Result'} onClick={this.handleItemClick} />
                </Menu>
                <div>
                    ResultPage
                </div>
            </div>
        );
    }
}

export default ResultPage;