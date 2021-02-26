import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],                                                                  
            searchfield: ''
        }
    }
// props
// state0i
// childer
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield}=this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })
        return !robots.length ?
        <h1>Loading</h1> : 
        (
            <div className='tc' >
                    <h1 className='f1' >RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} /> {/*"this" is the App */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                        
                    </Scroll>
                </div>
        )
        
        // The upper code is cleaner with (condition)? (A):(B)
        
        // if(!robots.length){
        //     return <h1>Loading</h1>
        // }
        // else{
        //     return(
        //         <div className='tc' >
        //             <h1 className='f1' >RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange} /> {/*"this" is the App */}
        //             <Scroll>
        //                 <CardList robots={filteredRobots}/>
        //             </Scroll>
        //         </div>
                
        //     );
        // }
        
    }  
}

export default App;