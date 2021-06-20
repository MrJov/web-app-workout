import logo from './logo.svg'
import './css/App.css'
import { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isTextVisible: false
    }
  }
  toggleText(){
    this.setState({isTextVisible: !this.state.isTextVisible})
  }
  render() {
    var textToShow = this.state.isTextVisible ? (<span>Ciao adesso mi vedi!</span>) : (<span></span>)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <p>Powered by Jov</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
          <button className="btn btn-primary" style={{width: "200px", height: "200px"}} onClick={this.toggleText.bind(this)}>
            Toggle Text
          </button>
          {textToShow}
        </header>
      </div>
    );
  }
}

export default App;
