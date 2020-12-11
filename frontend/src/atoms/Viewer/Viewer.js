import React from "react"
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import getPaperCitationCount from '../SemanticscholarSearch/CitationCount.js'
import MakeColorCodeFromMag from '../ColorScale/ColorScale.js'

const RECT_WIDTH = 200;  // 格子の横幅
const RECT_HEIGHT = 50;  // 格子の縦幅
const RECT_MARGIN = 5;   // 格子間の距離

class YearRect extends React.Component {
  render(){
    return (
      <Group>
        <Rect
          x={(RECT_WIDTH+RECT_MARGIN)*(this.props.col+1)}
          y={(RECT_HEIGHT+RECT_MARGIN)*this.props.row}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
        />
        <Text
          x={(RECT_WIDTH+RECT_MARGIN)*(this.props.col+1)}
          y={(RECT_HEIGHT+RECT_MARGIN)*this.props.row}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          text={this.props.year}
          fontSize={20}
          align={"center"}
          verticalAlign={"middle"}
          />
      </Group>
    )
  }
}

class PaperRect extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: this.props.defaultcolor,
      citations: null // キャッシュ
    }

    this.clickhandler = this.clickhandler.bind(this)
  }

  clickhandler(){
    this.props.handleCellClicked(this.props.paper["doi"])
  }

  static getDerivedStateFromProps(nextProps, prevState){
    // 「引用論文の影響度を可視化する」にチェックが入ったときの処理

    if (nextProps.enableGetMag && prevState.citations == null){
      let count = getPaperCitationCount(nextProps.paper["doi"])
      let c = MakeColorCodeFromMag(count, 0, 50);
      switch (nextProps.defaultcolor){
        case "lightgreen":
          return {
            citations: count,
            color: "#"+c+"FF"+c
          }
        default:                // case "lightpink":
          return {
            citations: count,
            color: "#FF"+c+c
          }
      }

    } else if (nextProps.enableGetMag){
      let count = prevState.citations
      let c = MakeColorCodeFromMag(count, 0, 50);
      switch (nextProps.defaultcolor){
        case "lightgreen":
          return {
            citations: count,
            color: "#"+c+"FF"+c
          }
        default:                // case "lightpink":
          return {
            citations: count,
            color: "#FF"+c+c
          }
      }

    } else{
      return {
        color: nextProps.defaultcolor
      }
    }
  }

  render(){
    return (
      <Group onclick={ this.clickhandler }>
        <Rect
          x={(RECT_WIDTH+RECT_MARGIN)*(this.props.col+1)}
          y={(RECT_HEIGHT+RECT_MARGIN)*this.props.row}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          fill={this.state.color}
        />
        <Text
          x={(RECT_WIDTH+RECT_MARGIN)*(this.props.col+1)}
          y={(RECT_HEIGHT+RECT_MARGIN)*this.props.row}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          text={this.props.paper["title"]}
          />
      </Group>
    )
  }
}

class Viewer extends React.Component {
  render() {
    return (
      <Stage width={3000} height={3000}>
      <Layer>
        {/* 各論文セルをグリッド状にして可視化する部分 */}
        {(() => {
          const items = [];
          let row = 0; let col = 0; // 論文セル表示位置

          /*
          citationsについての可視化部分
          */
          let citations = this.props.citations;
          for(let i=0; i<citations.length; i++) {
            if(i===0){
              items.push(
                <YearRect year={citations[i]["year"]} row={row} col={-1}/>
              );
            } else if(citations[i]["year"] === citations[i-1]["year"]) {
              col++                // 列を1つ左にずらす
            } else {
              col = 0; row++;      // 行を1つ増やす
              items.push(
                <YearRect year={citations[i]["year"]} row={row} col={-1}/>
              );
            }
            
            items.push(
              // 各論文データ
              <PaperRect 
                paper={citations[i]}
                row={row}
                col={col}
                defaultcolor={'lightgreen'}
                handleCellClicked={this.props.handleCellClicked}
                enableGetMag={this.props.enableGetCitationsMag}
              />
            );
          }

          /*
          referencesについての可視化部分
          */
          let references = this.props.references;
          col = 0; row+=2;
          for(let i=0; i<references.length; i++) {
            if(i===0){
              items.push(
                <YearRect year={references[i]["year"]} row={row} col={-1}/>
              );
            } else if(references[i]["year"] === references[i-1]["year"]) {
              col++                // 列を1つ左にずらす
            } else {
              col = 0; row++;      // 行を1つ増やす
              items.push(
                <YearRect year={references[i]["year"]} row={row} col={-1}/>
              );
            }
            items.push(
              <PaperRect 
                paper={references[i]}
                row={row}
                col={col}
                defaultcolor={'lightpink'}
                handleCellClicked={this.props.handleCellClicked}
                enableGetMag={this.props.enableGetReferencesMag}
              />
            );
          }
          return items
        })()}
      </Layer>
      </Stage>
    );
  }
}

export default Viewer;