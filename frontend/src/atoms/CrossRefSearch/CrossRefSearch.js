import React from "react"

class CrossRefSearch extends React.Component {
  constructor(props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
    this.props.setPaperTitle()

    /* Searching through API 
    */
    // TODO: これはデモデータであるため、タイトル名から検索する仕組みを作る
    var DEMO_URL = 'https://api.semanticscholar.org/v1/paper/10.1145/1950413.1950462'
    
    fetch(DEMO_URL)
      .then(response => response.json())
      .then(data => {
          // TODO: parserを作る
          var citeobj = data["citations"]
          var citations = citeobj.map(dt => ({"title":dt["title"], "year":dt["year"]}))
          var refobj = data["references"]
          var references = refobj.map(dt => ({"title":dt["title"], "year":dt["year"]}))
          
          this.props.setCiteAndRef(
            citations,
            references
          )
        }
      )
      .catch(error=> console.log(error))
  }

  render(){
    return (
      <div>
        <input type = "search" placeholder = "調べたい論文名を入力" id = "papername" />
        <button onClick = { this.handleOnClick }> 検索 </button>
        <p> Paper name is, { this.props.papertitle } </p>
      </div>
    )
  }
}

export default CrossRefSearch;