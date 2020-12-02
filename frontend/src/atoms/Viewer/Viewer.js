import React, { useState } from "react"
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import Konva from 'konva';

function ColordRect(props) {
    return (
      <Group>
        <Rect
          x={205*(props.col+1)}
          y={55*props.row}
          width={200}
          height={50}
          fill={props.color}
        />
        <Text
          x={205*(props.col+1)}
          y={55*props.row}
          width={200}
          height={50}
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
              // Doing None
            } else if(citations[i]["year"] === citations[i-1]["year"]) {
              col++                // 列を1つ左にずらす
            } else {
              col = 0; row++;      // 行を1つ増やす
            }
            items.push(
              // 発行年を表すyearRect
              <ColordRect 
                title={citations[i]["year"]}
                row={row}
                col={-1}
                color={'white'}
              />
            );
            items.push(
              // 各論文データ
              <ColordRect 
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
              // Doing None
            } else if(references[i]["year"] === references[i-1]["year"]) {
              col++                // 列を1つ左にずらす
            } else {
              col = 0; row++;      // 行を1つ増やす
            }
            items.push(
              // 発行年を表すyearRect
              <ColordRect 
                title={references[i]["year"]}
                row={row}
                col={-1}
                color={'white'}
              />
            );
            items.push(
              <ColordRect 
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