import './App.css';
import React from "react"
import SemanticscholarSearch from "./atoms/SemanticscholarSearch/SemanticscholarSearch"
import Viewer from "./atoms/Viewer/Viewer"

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

  handleSetTitle(title){
    this.setState({
      papertitle: title
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Paper Tracker</h1>
          <SemanticscholarSearch
            setPaperTitle={this.handleSetTitle}
            setCiteAndRef={this.handleSetCiteAndRef}
          />
          <p>
            検索論文名: {this.state.papertitle}
          </p>
        </header>
        <div>
          <Viewer
            papertitle={this.state.papertitle}
            citations={this.state.citations}
            references={this.state.references}
          />
        </div>
      </div>
    );
  }
}

export default App;
