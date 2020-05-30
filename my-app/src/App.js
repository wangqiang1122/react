import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/cradList.jsx';
import Lifecycle from './components/Lifecycle.jsx'
class App extends React.Component {
constructor(prop) {
  super(prop);
  this.state= {
    prop: 'some'
  }
}
componentDidMount() {
  setTimeout(()=>{
    this.setState({
      prop: 'gsgdgsd'
    })
  },2000)
}
   
render() {
  return (
    <div className="App">
      <CardList prop={ this.state.prop }></CardList>
      <Lifecycle data></Lifecycle>
    </div>
  );
}
}

export default App;
