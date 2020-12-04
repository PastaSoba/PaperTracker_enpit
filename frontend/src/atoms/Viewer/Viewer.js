import React, { useState } from "react"
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import Konva from 'konva';


const RECT_WIDTH = 200;  // 格子の横幅
const RECT_HEIGHT = 50;  // 格子の縦幅
const RECT_MARGIN = 5;   // 格子間の距離

function YearRect(props) {
  return (
    <Group>
      <Rect
        x={(RECT_WIDTH+RECT_MARGIN)*(props.col+1)}
        y={(RECT_HEIGHT+RECT_MARGIN)*props.row}
        width={RECT_WIDTH}
        height={RECT_HEIGHT}
      />
      <Text
        x={(RECT_WIDTH+RECT_MARGIN)*(props.col+1)}
        y={(RECT_HEIGHT+RECT_MARGIN)*props.row}
        width={RECT_WIDTH}
        height={RECT_HEIGHT}
        text={props.year}
        fontSize={20}
        align={"center"}
        verticalAlign={"middle"}
        />
    </Group>
  )
}

function PaperRect(props) {
    return (
      <Group>
        <Rect
          x={(RECT_WIDTH+RECT_MARGIN)*(props.col+1)}
          y={(RECT_HEIGHT+RECT_MARGIN)*props.row}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          fill={props.color}
        />
        <Text
          x={(RECT_WIDTH+RECT_MARGIN)*(props.col+1)}
          y={(RECT_HEIGHT+RECT_MARGIN)*props.row}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          text={props.title}
          />
      </Group>
    )
}

class Viewer extends React.Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
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
                title={citations[i]["title"]}
                row={row}
                col={col}
                color={'lightgreen'}
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
                <YearRect year={citations[i]["year"]} row={row} col={-1}/>
              );
            } else if(references[i]["year"] === references[i-1]["year"]) {
              col++                // 列を1つ左にずらす
            } else {
              col = 0; row++;      // 行を1つ増やす
              items.push(
                <YearRect year={citations[i]["year"]} row={row} col={-1}/>
              );
            }
            items.push(
              <PaperRect 
                title={references[i]["title"]}
                row={row}
                col={col}
                color={'lightpink'}
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