import './App.css';
import React from "react"
import CrossRefSearch from "./atoms/CrossRefSearch/CrossRefSearch"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      papertitle: null,
      citations: [],
      references: [],
    }

    this.handleSetCiteAndRef = this.handleSetCiteAndRef.bind(this)
    this.handleSetTitle = this.handleSetTitle.bind(this)
  }

  handleSetCiteAndRef(citations, references){
    this.setState({
      citations: citations,
      references: references,
    })
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
            setCiteAndRef={this.handleSetCiteAndRef}
          />
          <p>citations:
            <ul>
            {this.state.citations.map((p) =>
              <li>{p["title"]} ({p["year"]})</li>
            )}
            </ul>
          </p>

          <p>references:
            <ul>
            {this.state.references.map((p) =>
              <li>{p["title"]} ({p["year"]})</li>
            )}
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
