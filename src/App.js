//mport logo from './logo.svg';
import './App.css';
import Header from './AllComponets/Header';
import { Component } from 'react';
import Navbar from './AllComponets/Navbar'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Navbar />  
      </div>
    );
  }
}

export default App;