import React from "react"

class SemanticscholarSearch extends React.Component {
  constructor(props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  parsePaperInfo(data){
    return {
      "title": data["title"],
      "url": data["url"],
      "year": data["year"],
    }
  }

  handleOnClick(){
    var BASE_URL = 'https://api.semanticscholar.org/v1/paper/'
    var doi = document.getElementById("paperdoi").value; // 10.1145/1950413.1950462
    var searchurl = BASE_URL + doi

    /* Searching through API 
    */
    fetch(searchurl)
      .then(response => response.json())
      .then(data => {
          this.props.setPaperTitle(data["title"])
 
          var citations = data["citations"].map(this.parsePaperInfo)
          var references = data["references"].map(this.parsePaperInfo)
          this.props.setCiteAndRef(citations, references)
        }
      )
      .catch(error=> console.log(error))
  }

  render(){
    return (
      <div>
        <input type = "search" placeholder = "調べたい論文のDOIを入力" id = "paperdoi" />
        <button onClick = { this.handleOnClick }> 検索 </button>
      </div>
    )
  }
}

export default SemanticscholarSearch;