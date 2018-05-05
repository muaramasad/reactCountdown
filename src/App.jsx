import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'June 16, 2018'
        }
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadLine
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl 
                        className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;