import './App.css';
import React from "react"
import SemanticscholarSearch from "./atoms/SemanticscholarSearch/SemanticscholarSearch"
import Viewer from "./atoms/Viewer/Viewer"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      papertitle: null,
      paperurl: null,
      citations: [],
      references: [],
    }

    this.handleSetCiteAndRef = this.handleSetCiteAndRef.bind(this)
    this.handleSetTitleAndUrl = this.handleSetTitleAndUrl.bind(this)
  }

  handleSetCiteAndRef(citations, references){
    this.setState({
      citations: citations,
      references: references,
    })
  }

  handleSetTitleAndUrl(title, url){
    this.setState({
      papertitle: title,
      paperurl: url,
    })
  }

  handleCellClicked(doi){
    document.getElementById("paperdoi").value = doi
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Paper Tracker</h1>
          <SemanticscholarSearch
            setPaperTitleAndUrl={this.handleSetTitleAndUrl}
            setCiteAndRef={this.handleSetCiteAndRef}
          />
          <p>
            検索論文名: 
            <a href={this.state.paperurl}>
            {this.state.papertitle}
            </a>
          </p>
        </header>
        <div>
          <Viewer
            papertitle={this.state.papertitle}
            citations={this.state.citations}
            references={this.state.references}
            handleCellClicked={this.handleCellClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
