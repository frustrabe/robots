import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/ScrollWheel';
import ErrorBoundary from '../components/Error Boundary';
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
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading content</h1> :
            (
                <div className='tc pa1'>
                    <h1 className='f2'>Robot Family</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}


export default App;