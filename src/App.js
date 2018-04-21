import React, { Component } from 'react';
import './App.css';
import Classes from './components/Classes';
import mock_data from './data';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filterTerm: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({filterTerm: event.target.value})
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Anton Emery - Code Audition</h1>
          <h1><a href="https://github.com/AntonEmery/code-audition" target="_blank">Github Repo</a></h1>
        </header>
        <div className="content">
          <p>Search by level. (Beginner, Int, Adv), Date, Class, Cateogory, or Schedule</p>
          <input type="text" name="filter" value={this.state.value} onChange={this.handleChange} placeholder="Search for classes" />
          <Classes classes={mock_data} searchTerm={this.state.filterTerm} />
        </div>
      </div>
    );
  }
}

export default App;
