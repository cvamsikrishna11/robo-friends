import React, { Component } from 'react';

import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSeachChange = (event) => {
        this.setState({ searchField: event.target.value })

    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        return (
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSeachChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }

}

export default App;