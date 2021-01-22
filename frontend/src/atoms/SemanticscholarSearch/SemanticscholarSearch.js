import React from "react"
import { Link } from "react-router-dom";

/**
 * SemanticScholarSearch API を利用して論文の引用情報を取得するモジュール
 */
class SemanticscholarSearch extends React.Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  parsePaperInfo(data){
    let authorId_list = data["authors"].map((author)=>{return author["authorId"]})
    return {
      "title": data["title"],
      "url": data["url"],
      "year": data["year"],
      "doi": data["doi"],
      "authorId_list": authorId_list,
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
          var paper = this.parsePaperInfo(data)
          this.props.setPaper(paper)
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
        <p> SemanticScholar Search :　
        <input type = "search" placeholder = "調べたい論文のDOIを入力" id = "paperdoi" value={this.props.inputvalue} onChange={this.props.onInputChange}/>
        <Link to={"?doi="+this.props.inputvalue}>
          <button onClick = { this.handleOnClick }> 検索 </button>
        </Link>
        </p>
      </div>
    )
  }
}

export default SemanticscholarSearch;