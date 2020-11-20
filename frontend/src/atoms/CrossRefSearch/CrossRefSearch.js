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

    /* Set refjson in App.js
    */
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