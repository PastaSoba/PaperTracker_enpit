import './App.css';
import React from "react"
import CrossRefSearch from "./atoms/CrossRefSearch/CrossRefSearch"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      papertitle: null,
      refjson: null
    }

    this.handleSetTitle = this.handleSetTitle.bind(this)
  }

  handleApiResult(){

  }

  handleSetTitle(){
    var papertitle = document.getElementById("papername").value;
    this.setState({
      papertitle: papertitle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Paper Tracker</h1>
          <CrossRefSearch
            papertitle={this.state.papertitle}
            setPaperTitle={this.handleSetTitle}
          />
        </header>
      </div>
    );
  }
}

export default App;
