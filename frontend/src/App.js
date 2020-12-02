import './App.css';
import React from "react"
import SemanticscholarSearch from "./atoms/SemanticscholarSearch/SemanticscholarSearch"

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
            papertitle={this.state.papertitle}
            setPaperTitle={this.handleSetTitle}
            setCiteAndRef={this.handleSetCiteAndRef}
          />
          <p>
            検索論文名: {this.state.papertitle}
          </p>

          <p>検索論文を引用した論文:
            <ul>
            {this.state.citations.map((p) =>
              <li>
                <a href={p["url"]}>
                  {p["title"]} 
                </a>
                ({p["year"]})
              </li>
            )}
            </ul>
          </p>

          <p>
            検索論文が引用した論文:
            <ul>
            {this.state.references.map((p) =>
              <li>
                <a href={p["url"]}>
                  {p["title"]} 
                </a>
                ({p["year"]})
              </li>
            )}
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
