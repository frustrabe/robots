import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

// App component has two states ("robots" and "searchfield"), App owns this state
// any component that has state uses the class syntax so the constructor can be used to create
// statestate is what changes in the App. React uses state to render and pass them as props
// to components so the components (as functions) can render them

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        //console.log('constructor') 1.Constructor get created//
    }

    componentDidMount() {
        this.setState({ robots: robots });
        //console.log('componentDidMount') 3.Updated the state in componentDidMount,
        //we need new render because if got from an empty array to rendering 'robots'//
    }

    // onSearchChange gets passed down to SearchBox, everytime there is a change of input
    // SearchBox lets the App know and says, there was change, run onSearchChange with (event)
    // and updates the state with a searchfiled to whavever gets written inside

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    // with info from searchbox, it can comunicate to the CardList to filterRobots
    // to filter robots state to have only what includes in searchfield 
    // and fiteredRobots gets passed to CardList

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        //console.log('render') 2.Render gets run//
        //4.Render gets run again//
        return (
            <div className='tc pa1'>
                <h1 className='f2'>Robot Family</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;