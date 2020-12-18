import React from "react"

/**
 * SemanticScholarSearch API を利用して論文の引用情報を取得するモジュール
 */
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
      "doi": data["doi"],
    }
  }

  sortByYear(a, b){
    return a.year > b.year ? -1 : 1;
  }

  handleOnClick(){
    var BASE_URL = 'https://api.semanticscholar.org/v1/paper/'
    var doi = document.getElementById("paperdoi").value; // 10.1145/1950413.1950462
    var searchurl = BASE_URL + doi

    // APIを使って検索する
    fetch(searchurl)
      .then(response => response.json())
      .then(data => {
          this.props.setPaperTitleAndUrl(data["title"], data["url"])
          // 論文情報をパースする
          var citations = data["citations"].map(this.parsePaperInfo)
          var references = data["references"].map(this.parsePaperInfo)
          // 発行年が新しい順に論文情報を並べる
          citations.sort(this.sortByYear)
          references.sort(this.sortByYear)
          this.props.setCiteAndRef(citations, references)
        }
      )
      .catch(error=> console.log(error))
  }

  render(){
    return (
      <div>
        <a> SemanticScholar Search : </a>
        <input type = "search" placeholder = "調べたい論文のDOIを入力" id = "paperdoi" />
        <button onClick = { this.handleOnClick }> 検索 </button>
      </div>
    )
  }
}

export default SemanticscholarSearch;