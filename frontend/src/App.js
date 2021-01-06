import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import SemanticscholarSearch from "./atoms/SemanticscholarSearch/SemanticscholarSearch"
import Viewer from "./atoms/Viewer/Viewer"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      paper: null,
      citations: [],
      references: [],
      enableGetCitationsMag: false,  // 引用論文の影響度を調べる
      enableGetReferencesMag: false, // 参考論文の影響度を調べる
    }

    this.handleCitationsCheck = this.handleCitationsCheck.bind(this)
    this.handleReferencesCheck = this.handleReferencesCheck.bind(this)
    this.handleSetCiteAndRef = this.handleSetCiteAndRef.bind(this)
    this.handleSetPaper = this.handleSetPaper.bind(this)
  }

  handleCitationsCheck(){
    this.setState({
      enableGetCitationsMag: !this.state.enableGetCitationsMag
    })
  }

  handleReferencesCheck(){
    this.setState({
      enableGetReferencesMag: !this.state.enableGetReferencesMag
    })
  }

  handleSetCiteAndRef(citations, references){
    this.setState({
      citations: citations,
      references: references,
    })
  }

  handleSetPaper(paper){
    this.setState({
      paper: paper,
    })
  }

  handleCellClicked(doi){
    document.getElementById("paperdoi").value = doi
  }

  render() {
    return (
      <div className="App">
        <h1>Paper Tracker</h1>
        <Router>
          <div>
            <SemanticscholarSearch
              setPaper={this.handleSetPaper}
              setCiteAndRef={this.handleSetCiteAndRef}
            />
            <div>
              検索論文名: 
              <a href={this.state.paper === null ? "" : this.state.paper["url"]}>
                {this.state.paper === null ? "" : this.state.paper["title"]}
              </a>
            </div>
            <div>
              オプション（デモ動作）<br/>
              <label>
              <input
                type="checkbox"
                onChange={this.handleCitationsCheck}
                checked={this.state.enableGetCitationsMag}
              />
              被引用論文の影響度を可視化する
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={this.handleReferencesCheck}
                  checked={this.state.enableGetReferencesMag}
                />
                引用論文の影響度を可視化する
              </label>
            </div>
          </div>
          <Viewer
            paper={this.state.paper}
            citations={this.state.citations}
            references={this.state.references}
            enableGetCitationsMag={this.state.enableGetCitationsMag}
            enableGetReferencesMag={this.state.enableGetReferencesMag}
            handleCellClicked={this.handleCellClicked}
          />
        </Router>
      </div>
    );
  }
}

export default App;
