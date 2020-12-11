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
      enableGetCitationsMag: false,  // 引用論文の影響度を調べる
      enableGetReferencesMag: false, // 参考論文の影響度を調べる
    }

    this.handleCitationsCheck = this.handleCitationsCheck.bind(this)
    this.handleReferencesCheck = this.handleReferencesCheck.bind(this)
    this.handleSetCiteAndRef = this.handleSetCiteAndRef.bind(this)
    this.handleSetTitleAndUrl = this.handleSetTitleAndUrl.bind(this)
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
          <p>
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
          </p>
        </header>
        <div>
          <Viewer
            papertitle={this.state.papertitle}
            citations={this.state.citations}
            references={this.state.references}
            enableGetCitationsMag={this.state.enableGetCitationsMag}
            enableGetReferencesMag={this.state.enableGetReferencesMag}
            handleCellClicked={this.handleCellClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
